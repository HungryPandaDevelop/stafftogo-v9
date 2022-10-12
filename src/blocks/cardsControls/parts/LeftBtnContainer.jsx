import { useState } from 'react';


import { connect } from 'react-redux';
import BtnTemplate from "./BtnTemplate";

import SpecializationPopup from 'blocks/popupControls/SpecializationPopup';
import IndustryPopup from 'blocks/popupControls/IndustryPopup';
import RewardPopup from 'blocks/popupControls/RewardPopup';
import AdditionalPopup from 'blocks/popupControls/AdditionalPopup';

import specializationBtnContent from '../js/specializationBtnContent';
import industryBtnContent from '../js/industryBtnContent';
import setPriceText from '../js/setPriceText';



const ChoiseContentBtn = ({ listingSearch }) => {


  const [idVisiblePopup, setIdVisiblePopup] = useState('4');

  const onShowPopup = (idPopup) => {
    setIdVisiblePopup(idPopup);
  }

  return (
    <>
      <BtnTemplate name={specializationBtnContent(listingSearch.specializationImg)} idPopup="1" onShowPopup={onShowPopup}>
        {idVisiblePopup === '1' && <SpecializationPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate name={industryBtnContent(listingSearch.industry)} idPopup="2" onShowPopup={onShowPopup}>
        {idVisiblePopup === '2' && <IndustryPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate name={setPriceText(listingSearch)} idPopup="3" onShowPopup={onShowPopup}>
        {idVisiblePopup === '3' && <RewardPopup onShowPopup={onShowPopup} />}
      </BtnTemplate>
      <BtnTemplate name='Еще фильтры' idPopup="4" onShowPopup={onShowPopup} >
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