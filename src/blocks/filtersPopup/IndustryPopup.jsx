import { connect } from 'react-redux';

import baseSorting from 'blocks/filtersPopup/js/baseSorting'

import ActionFn from 'store/actions';


const IndustryPopup = ({
  onShowPopup,
  industryActiveList,
  industryBase,
  ActionFn, }) => {


  const getBaseSorting = baseSorting(industryBase)


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

    <div className="filters-popup alphabet-popup industry-popup">
      <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
      <div className="alphabet-grid">

        {getBaseSorting.map((item, i) => (
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
        ))
        }
      </div>
      <div className="filters-btn-container">
        <span className="btn btn--orange-border" onClick={() => { onReset(); onShowPopup(0); }}>Сбросить</span>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {

  return {
    industryBase: state.industryBase,
    industryActiveList: state.listingSearchReducer.industry
  }
}

export default connect(mapStateToProps, { ActionFn })(IndustryPopup);