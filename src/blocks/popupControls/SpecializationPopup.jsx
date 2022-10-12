import { connect } from 'react-redux';

import baseSorting from 'blocks/popupControls/js/baseSorting'

import ActionFn from 'store/actions';


const SpecializationPopup = ({
  onShowPopup,
  specializationActiveList,
  specializationBase,
  ActionFn, }) => {


  const getBaseSorting = baseSorting(specializationBase)


  const changeActiveList = (type, img) => {


    if (specializationActiveList.includes(type)) {
      ActionFn('REMOVE_SPECIALIZATION', type);
      ActionFn('REMOVE_SPECIALIZATION_IMG', img);
    } else {
      ActionFn('ADD_SPECIALIZATION', type);
      ActionFn('ADD_SPECIALIZATION_IMG', img);
    }

  }


  return (

    <div className="filters-popup alphabet-popup">
      <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
      <div className="alphabet-grid">

        {getBaseSorting.map((item, i) => (
          <div className="alphabet-group" key={i}>
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
          </div>
        ))
        }
      </div >
    </div >
  )
}

const mapStateToProps = (state) => {

  return {
    specializationBase: state.specializationBase,
    specializationActiveList: state.listingSearchReducer.specialization
  }
}

export default connect(mapStateToProps, { ActionFn })(SpecializationPopup);