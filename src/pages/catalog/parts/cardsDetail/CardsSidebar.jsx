import { useState, useEffect } from 'react';

import BtnLike from 'pages/catalog/parts/cardsItem/BtnLike';


import view from 'front-end/images/icons/hide-view-white.svg';
import download from 'front-end/images/icons/download-white.svg';
import print from 'front-end/images/icons/print-white.svg';


const CardsSidebar = ({ listing, imgCards, toPdf, handlePrint, uid, cabinetType, listingType }) => {


  const [viewSidebar, setViewSidebar] = useState(false);


  useEffect(() => {

    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setViewSidebar(true);

      } else {
        setViewSidebar(false);
      }
    });


  }, []);

  return (
    <>
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
                <a href={`tel:${listing.userInfo.phone}`}>
                  {listing.userInfo.phone}
                </a>
              </li>
            )}
            {listing.userInfo.email && (
              <li>
                <a href={`mailto:${listing.userInfo.email}`}>{listing.userInfo.email}</a>
              </li>
            )}
          </ul>
        </div>

        <div className="cards-sidebar-controls">
          {(uid && listingType != cabinetType) && (
            <BtnLike
              listing={listing}
            />
          )}
          <div className="sidebar-btn"> <span>Спрятать</span><img src={view} alt="" /></div>
          <div className="sidebar-btn"
            onClick={() => { toPdf(listing.card_name, listing.userInfo.fio) }}
          > <span>Скачать</span><img src={download} alt="" /></div>
          <div className="sidebar-btn" onClick={handlePrint}> <span>Распечатать</span><img src={print} alt="" /></div>
        </div>
        <div className="btn-container">
          <div className="btn btn--green-border">Видеочат</div>
          <div className="btn btn--green-border">
            Чат</div>
          <div className="btn btn--green-border">Откликнуться</div>
        </div>
      </div>
    </>
  )
}

export default CardsSidebar
