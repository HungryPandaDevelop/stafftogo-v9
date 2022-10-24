// import html2canvas from "html2canvas";
// import { jsPDF } from "jspdf";

import Pdf from "react-to-pdf";
// import { pdfFromReact } from "generate-pdf-from-react-html";

import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getSingleListing } from 'store/asyncActions/getSingleListing';


import Breadcrumbs from 'pages/parts/Breadcrumbs';
import SimpleDateTime from 'react-simple-timestamp-to-date'; // ???

import InfoExp from 'pages/catalog/parts/cardsItem/InfoExp'
import ExpWorkSingle from 'pages/catalog/parts/cardsItem/ExpWorkSingle';
import Additional from 'pages/catalog/parts/cardsItem/Additional';


import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg';

import phoneIco from 'front-end/images/icons/phone-green.svg';
import mainIco from 'front-end/images/icons/mail-green.svg';
import markerIco from 'front-end/images/icons/marker-green.svg';

import dayWork from 'front-end/images/icons/day-work.svg';
import quicklyWork from 'front-end/images/icons/quickly-work.svg';
import nightWork from 'front-end/images/icons/night-work.svg';
import projectWork from 'front-end/images/icons/project-work.svg';

import star from 'front-end/images/icons/star-white.svg';
import view from 'front-end/images/icons/hide-view-white.svg';
import download from 'front-end/images/icons/hide-view-white.svg';
import print from 'front-end/images/icons/print-white.svg';



const CardsDetail = () => {



  const refContent = useRef(null);
  const toPdf = () => {


    // const input = refContent.current;
    // html2canvas(input)
    //   .then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdf = new jsPDF();
    //     pdf.addImage(imgData, 'JPEG', 2, 0);
    //     pdf.save(`test.pdf`);
    //   })




  }

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [viewSidebar, setViewSidebar] = useState(false);

  const params = useParams();

  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setViewSidebar(true);

      } else {
        setViewSidebar(false);
      }
    });

    getSingleListing(params.catagoryName, params.elementId).then(res => {
      setListing(res);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <>Loading</>
  }


  const imgCards = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;
  const address = listing.coords && listing.coords.split('--');
  // console.log('listing', listing)


  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [2, 4]
  };


  return (
    <>
      <div className="stub"></div>

      <Pdf
        targetRef={refContent}
        filename="cenaze-yardimlasma.pdf"
        scale={0.6}
      >
        {({ toPdf }) => (
          <button className="button" onClick={toPdf} >
            Pdf İndir
          </button>
        )}
      </Pdf>

      <Breadcrumbs />
      <div className="content" >
        <div className="main-full" ><h1>Вакансия детально</h1></div>
        <div className="main-grid">
          <div className="col-10 col-lg-9 col-sm-12" ref={refContent}>
            <div className="cards-main shadow-container">
              <div className="cards-item-roof">
                <span>Резюме обновлено:&nbsp;
                  <SimpleDateTime
                    format="MYD"
                    showTime="0"
                    dateSeparator="."
                  >{listing.timestamp.seconds}</SimpleDateTime></span>
              </div>
              <div className="main-grid">
                <div className="col-2 col-md-3 col-sm-4 col-xs-12" >
                  <div className="cards-face-container">
                    <div
                      className="cards-face img-cover"
                      style={{ backgroundImage: `url(${imgCards})` }}
                    >
                    </div>
                  </div>
                </div>
                <div className="col-6 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-item-info-container">
                  <div className="cards-item-info" >
                    <div className="cards-item-info-top">
                      <h3>{listing.card_name}</h3>

                      {listing.salary_price && (
                        <div className="cards-item-price">
                          <b>P {listing.salary_price}</b>
                          <span>{listing.salary_worktime}</span>
                        </div>
                      )}
                    </div>
                    <ul className="cards-item-bottom ln">
                      <InfoExp listing={listing} />
                    </ul>
                  </div>
                  <div className="cards-item-delimetr"></div>
                </div>
                <div className="cards-pay-offset col-md-3 col-sm-4 col-xs-12">
                  <div className="cards-mobile-controls">
                    <div className="sidebar-btn">
                      <span>В избранное</span>
                      {/* <img src="/images/icons/star-white.svg" alt="" /> */}
                    </div>
                    <div className="sidebar-btn"><span>Спрятать</span>
                      {/* <img src="/images/icons/hide-view-white.svg" alt="" /> */}
                    </div>
                    <div className="sidebar-btn"><span>Скачать</span>
                      {/* <img src="/images/icons/download-white.svg" alt="" /> */}
                    </div>
                    <div className="sidebar-btn"><span>Распечатать</span>
                      {/* <img src="/images/icons/print-white.svg" alt="" /> */}
                    </div>
                  </div>
                </div>
                <div className="col-4 col-xxl-5 col-md-9 col-sm-8 col-xs-12 cards-pay-container" >
                  <div className="cards-item-info cards-item-pay-info">
                    {listing.userInfo.fio && (<h3>{listing.userInfo.fio}</h3>)}
                    <ul className="ln cards-item-info-list">
                      {listing.userInfo.phone && (
                        <li>
                          <img src={phoneIco} alt="" />
                          <Link to={`tel:${listing.userInfo.phone}`}>
                            {listing.userInfo.phone}
                          </Link>
                        </li>
                      )}
                      {listing.userInfo.email && (
                        <li>
                          <img src={mainIco} alt="" />
                          <Link to={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</Link>
                        </li>
                      )}

                      {address && (<li>
                        <img src={markerIco} alt="" />
                        <span>Адрес: </span>
                        <b>{address[0]}</b>
                      </li>)}
                    </ul>
                    <div className="cards-item-bottom btn-container">
                      {address && (
                        <Link to={`/map/${params.elementId}`} className="btn btn--green-border ico-in ico-in--left btn-show-map">
                          <i></i>
                          <span>Показать на карте</span>
                        </Link>
                      )}

                      <div className="btn btn--green-border btn-mobile">Видеочат</div>
                      <div className="btn btn--green-border btn-mobile">Чат</div>
                      <div className="btn btn--green-border btn-mobile">Откликнуться</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cards-second-info main-grid">
              <div className="col-7 col-md-12">
                ? Расхождение с кабинетом ?
                <div className="cards-typework-item shadow-container">
                  <div className="cards-typework-img">
                    <img src={dayWork} alt="" />
                  </div>
                  <div className="cards-typework-info"><em>Полная занятость</em><span>В месяц</span><b>Р 155 000 - 180 000</b></div>
                </div>
                <div className="cards-typework-item shadow-container">
                  <div className="cards-typework-img">
                    <img src={quicklyWork} alt="" />
                  </div>
                  <div className="cards-typework-info"><em>Срочный выезд</em><span></span><b>Р 3 000</b></div>
                </div>
                <div className="cards-typework-item shadow-container">
                  <div className="cards-typework-img">
                    <img src={nightWork} alt="" />
                  </div>
                  <div className="cards-typework-info"><em>Работа ночью</em><span>В месяц</span><b>Р 5 500</b></div>
                </div>
                <div className="cards-typework-item shadow-container">
                  <div className="cards-typework-img">
                    <img src={projectWork} alt="" />
                  </div>
                  <div className="cards-typework-info"><em>Проектная работа</em><span></span><b>Р 5 500</b></div></div>
                ? Расхождение с кабинетом ?
              </div>
              <div className="col-5 col-md-12">
                <Additional list={listing.additional} />
              </div>
            </div>
            <div className="cards-about" convert-html-to-pdf>
              {listing.companyWorkComplex && (
                <div className="cards-about-item">
                  <h3>Опыт работы {<ExpWorkSingle listing={listing} />}</h3>
                  {listing.companyWorkComplex.map((item, index) => (
                    <div className="cards-about-line" key={index}>
                      {item.namework && (<h4>{item.workfrom} / {item.workto}</h4>)}
                      {item.namework && (<h5>Должность: {item.namework}</h5>)}
                      {item.namecompany && (<h5>Организация: {item.namecompany}</h5>)}
                      {item.workresp && (
                        <>
                          <h5>Обязанности: </h5>
                          <p>{item.workresp}</p>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {listing.institution && (
                <div className="cards-about-item">
                  <h3>Профессиональные образование</h3>
                  {listing.institution.map((item, index) => (
                    <div className="cards-about-line" key={index}>
                      {item.dateEnd && (<h4>Дата окончания: {item.dateEnd}</h4>)}
                      {item.place && (<h5>Учебное заведение: {item.place}</h5>)}
                      {item.faculty && (<h5>Факультет: {item.faculty}</h5>)}
                      {item.specialization && (<h5>Специализация: {item.specialization}</h5>)}
                    </div>
                  ))}
                </div>
              )}

              {listing.about && (
                <div className="cards-about-item">
                  <h3>Обо мне</h3>
                  {listing.about}
                </div>
              )}

            </div>

          </div>
          <div className="col-2 col-lg-3 hidden-sm hidden-xs">
            <div className="cards-sidebar">
              <div className={`cards-sidebar-about shadow-container ${viewSidebar && 'show'}`}>
                <div className="cards-face-container">
                  <div
                    className="cards-face img-cover"
                    style={{ backgroundImage: `url(${imgCards})` }}
                  >
                  </div>
                </div>
                <div className="cards-info">
                  <h3>{listing.userInfo.fio && listing.userInfo.fio}</h3>
                </div>
                <ul className="ln cards-item-info-list">
                  {listing.userInfo.phone && (
                    <li>
                      <Link to={`tel:${listing.userInfo.phone}`}>
                        {listing.userInfo.phone}
                      </Link>
                    </li>
                  )}
                  {listing.userInfo.email && (
                    <li>
                      <Link to={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</Link>
                    </li>
                  )}
                </ul>
              </div>
              <div className="cards-sidebar-controls">
                <div className="sidebar-btn"> <span>В избранное</span><img src={star} alt="" /></div>
                <div className="sidebar-btn"> <span>Спрятать</span><img src={view} alt="" /></div>
                <div className="sidebar-btn" onClick={toPdf}> <span>Скачать</span><img src={download} alt="" /></div>
                <div className="sidebar-btn"> <span>Распечатать</span><img src={print} alt="" /></div>
              </div>
              <div className="btn-container">
                <div className="btn btn--green-border">Видеочат</div>
                <div className="btn btn--green-border">
                  Чат</div>
                <div className="btn btn--green-border">Откликнуться</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="stub"></div>

    </>
  )
}

export default CardsDetail;