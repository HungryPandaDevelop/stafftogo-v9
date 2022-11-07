//1 норм решение но не работает с картинкой fb
import { jsPDF } from "jspdf";
import * as htmlToImage from 'html-to-image';
//1 норм решение но не работает с картинкой fb

import { useReactToPrint } from 'react-to-print';

import { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import Breadcrumbs from 'pages/parts/Breadcrumbs';




import CardsMain from 'pages/catalog/parts/cardsDetail/CardsMain';
import CardsSecond from 'pages/catalog/parts/cardsDetail/CardsSecond';

import CardsAbout from 'pages/catalog/parts/cardsDetail/CardsAbout';
import CardsSidebar from 'pages/catalog/parts/cardsDetail/CardsSidebar';
import Reviews from 'pages/catalog/parts/cardsDetail/Reviews';

import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg';


const CardsDetail = ({ uid, cabinetType, listingType }) => {
  const refContent = useRef(null);

  const toPdf = (namecards, nameaccount) => {
    // норм решение но не работает с картинкой fb
    htmlToImage.toPng(refContent.current, { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        const pdf = new jsPDF();
        const imgProps = pdf.getImageProperties(dataUrl);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(`${namecards}-${nameaccount}.pdf`);
      });
    // норм решение но не работает с картинкой fb

  }

  const handlePrint = useReactToPrint({
    content: () => refContent.current,
  });

  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {

    getSingleListing(params.catagoryName, params.elementId).then(res => {
      setListing(res);
      setLoading(false);
    });

  }, []);

  if (loading) {
    return <>Loading</>
  }

  const imgCards = listing.userInfo.imgsAccount ? listing.userInfo.imgsAccount : defaultCardsImg;


  return (
    <>
      <div className="stub"></div>

      <Breadcrumbs />
      <div className="content" >
        <div className="main-full">
          <h1>Вакансия детально</h1>
        </div>
        <div className="main-grid">
          <div className="col-10 col-lg-9 col-sm-12" ref={refContent}>

            <CardsMain listing={listing} elementId={params.elementId} imgCards={imgCards} />

            <CardsSecond listing={listing} />

            <CardsAbout listing={listing} />

            <Reviews
              listingType={listingType}
              elementId={params.elementId}
              listing={listing}
            />
          </div>
          <div className="col-2 col-lg-3 hidden-sm hidden-xs">
            <CardsSidebar
              toPdf={toPdf}
              handlePrint={handlePrint}
              listing={listing}
              imgCards={imgCards}
              uid={uid}
              cabinetType={cabinetType}
              listingType={listingType}
              elementId={params.elementId}
            />
          </div>
        </div>

      </div>
      <div className="stub"></div>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    currentCard: state.accountInfo.info.currentCard,
    roomUpdate: state.accountInfo.roomUpdate,
    uid: state.accountInfo.info.uid,
    cabinetType: state.accountInfo.info.typeCabinet,
    listingType: state.listingTypeReducer,
  }
}



export default connect(mapStateToProps)(CardsDetail);

