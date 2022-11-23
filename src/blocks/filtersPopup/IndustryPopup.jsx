import { connect } from 'react-redux';
import { useEffect, useState } from 'react';

import baseSorting from 'blocks/filtersPopup/js/baseSorting'

import ActionFn from 'store/actions';

import { getListingDefault } from 'store/asyncActions/getListing';


const IndustryPopup = ({
  onShowPopup,
  industryActiveList,
  industryBase,
  ActionFn, }) => {

  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListingDefault('activity').then(res => {
      // console.log('activity', res)

      setListings(res);
      setLoading(false);
    });
  }, []);

  const getBaseSorting = loading !== true && baseSorting(listings)


  const changeActiveList = (type, img) => {


    if (industryActiveList.includes(type)) {
      ActionFn('REMOVE_INDUSTRY', type);
    } else {
      ActionFn('ADD_INDUSTRY', type);
    }

  }

  const onReset = () => {
    ActionFn('REMOVE_INDUSTRY_ALL');
  }




  return (
    <>
      {loading !== true &&
        <div className="filters-popup alphabet-popup industry-popup">
          <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
          <div className="alphabet-grid">

            {getBaseSorting.map((item, i) => {
              if (item.length > 0) {
                return (
                  <div className="alphabet-group" key={i}>
                    <div className="alphabet-letter"><span>{item[0].name[0]}</span></div>
                    <ul className="ln">
                      {item.map(({ name, type }, i) => (
                        <li
                          key={i}
                          onClick={(e) => { changeActiveList(type) }}
                          className={(industryActiveList.includes(type) ? 'active' : '')}
                        >
                          <em> {name}</em>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              }
            }
            )
            }
          </div>
          <div className="filters-btn-container">
            <span className="btn btn--orange-border" onClick={() => { onReset(); onShowPopup(0); }}>Сбросить</span>
          </div>
        </div>
      }
    </>
  )

}

const mapStateToProps = (state) => {

  return {
    industryBase: state.industryBase,
    industryActiveList: state.listingSearchReducer.industry
  }
}

export default connect(mapStateToProps, { ActionFn })(IndustryPopup);