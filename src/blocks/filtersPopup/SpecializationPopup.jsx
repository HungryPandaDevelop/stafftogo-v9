import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import baseSorting from 'blocks/filtersPopup/js/baseSorting'

import ActionFn from 'store/actions';

import { getListingDefault } from 'store/asyncActions/getListing';

const SpecializationPopup = ({
  onShowPopup,
  specializationActiveList,
  specializationBase,
  ActionFn, }) => {

  // console.log('specializationBase', specializationBase)


  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListingDefault('specialization').then(res => {
      // console.log('specializationLoad', res)

      setListings(res);
      setLoading(false);
    });
  }, []);

  const getBaseSorting = loading !== true && baseSorting(listings)


  const changeActiveList = (type, img) => {


    if (specializationActiveList.includes(type)) {
      ActionFn('REMOVE_SPECIALIZATION', type);
      ActionFn('REMOVE_SPECIALIZATION_IMG', img);
    } else {
      ActionFn('ADD_SPECIALIZATION', type);
      ActionFn('ADD_SPECIALIZATION_IMG', img);
    }

  }


  const onReset = () => {
    ActionFn('REMOVE_SPECIALIZATION_ALL');
  }


  return (
    <>
      {loading !== true && (<div className="filters-popup alphabet-popup">
        <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
        <div className="alphabet-grid">
          {getBaseSorting.map((item, i) => {
            if (item.length > 0) {
              return (<div className="alphabet-group" key={i}>
                <div className="alphabet-letter"><span>{item[0].name[0]}</span></div>
                <ul className="ln">
                  {item.map(({ name, type, count, imgBack, imgFront }, i) => (
                    <li
                      key={i}
                      onClick={(e) => { changeActiveList(type, imgBack) }}
                      className={(specializationActiveList.includes(type) ? 'active' : '')}
                    >
                      {imgBack && (<>
                        <i className="alphabet-ico">

                          <img className="ico-back" src={imgFront} alt="" />
                          <img className="ico-front" src={imgBack} alt="" />
                        </i>
                      </>)}
                      <em> {name}</em>
                    </li>
                  ))}
                </ul>
              </div>)
            }
          })
          }
        </div>
        <div className="filters-btn-container">
          <span className="btn btn--orange-border" onClick={() => { onReset(); onShowPopup(0); }}>Сбросить</span>
        </div>
      </div >)}
    </>
  )
}

const mapStateToProps = (state) => {

  return {
    specializationBase: state.specializationBase,
    specializationActiveList: state.listingSearchReducer.specialization
  }
}

export default connect(mapStateToProps, { ActionFn })(SpecializationPopup);