import { useState } from 'react';


import { connect } from 'react-redux';
import BtnTemplate from "./BtnTemplate";

import SpecializationPopup from 'blocks/filtersPopup/SpecializationPopup';
import IndustryPopup from 'blocks/filtersPopup/IndustryPopup';
import RewardPopup from 'blocks/filtersPopup/RewardPopup';
import AdditionalPopup from 'blocks/filtersPopup/AdditionalPopup';

import specializationBtnContent from '../js/specializationBtnContent';
import industryBtnContent from '../js/industryBtnContent';
import setPriceText from '../js/setPriceText';



const ChoiseContentBtn = ({ listingSearch, sectionTop }) => {
  let additionalFilterValueObj = {
    gender: listingSearch.gender,
    additional: listingSearch.additional,
    age_from: listingSearch.age_from,
    age_to: listingSearch.age_to,
    exp_from: listingSearch.exp_from,
    exp_to: listingSearch.exp_to
  }




  const goToTop = () => {
    window.scrollTo({
      top: sectionTop - 160,
      behavior: 'smooth',
    });
  };

  const [idVisiblePopup, setIdVisiblePopup] = useState('0');

  const onShowPopup = (idPopup) => {

    if (idVisiblePopup !== idPopup) {
      setIdVisiblePopup(idPopup);
    }
    else {
      setIdVisiblePopup(0);
    }
  }

  return (
    <>
      <BtnTemplate
        name={specializationBtnContent(listingSearch.specializationImg)}
        idPopup="1"
        onShowPopup={onShowPopup}
        idVisiblePopup={idVisiblePopup}
        goToTop={goToTop}
      >
        {idVisiblePopup === '1' && <SpecializationPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate
        name={industryBtnContent(listingSearch.industry)}
        idPopup="2"
        onShowPopup={onShowPopup}
        idVisiblePopup={idVisiblePopup}
        goToTop={goToTop}
      >
        {idVisiblePopup === '2' && <IndustryPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate
        name={setPriceText(listingSearch)}
        idPopup="3"
        onShowPopup={onShowPopup}
        idVisiblePopup={idVisiblePopup}
        goToTop={goToTop}
      >
        {idVisiblePopup === '3' && <RewardPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate
        name='Еще фильтры'
        idPopup="4"
        onShowPopup={onShowPopup}
        idVisiblePopup={idVisiblePopup}
        additionalFilterValueObj={additionalFilterValueObj}
        goToTop={goToTop}
      >
        {idVisiblePopup === '4' && <AdditionalPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
    </>
  )

}


const mapStateToProps = (state) => {

  return {
    listingSearch: state.listingSearchReducer,
  }
}

export default connect(mapStateToProps)(ChoiseContentBtn);