// import { useState } from "react";

import RightBtnContainer from "blocks/cardsControls/parts/RightBtnContainer";


import { connect } from 'react-redux';

import LeftBtnContainer from "blocks/cardsControls/parts/LeftBtnContainer";

const CardsControls = ({ listingSearch }) => {


  const industry = listingSearch.industry;
  const specialization = listingSearch.specialization;



  return (
    <>
      <div className="filters">
        <div className="filters-close-mobile"></div>
        <div className="main-full filters-container">
          <div className="btn-container--left">
            <LeftBtnContainer
              industry={industry}
              specialization={specialization}
            />
          </div>
          <div className="btn-container--right">
            <RightBtnContainer />
          </div>
        </div>
      </div>


    </>
  )
}


const mapStateToProps = (state) => {
  return {
    listingSearch: state.listingSearchReducer
  }
}

export default connect(mapStateToProps)(CardsControls);