
import { connect } from 'react-redux';

import RenderFormAccount from 'components/forms/RenderFormAccount';

import ActionFn from 'store/actions';


const RewardPopup = ({
  onShowPopup,
  ActionFn,
  dataForm,
  fields,
  priceDataFrom,
  priceDataTo
}) => {


  const onSubmit = () => {
    ActionFn('SEARCH_PRICE_FROM_LISTING', dataForm.values.pricefrom);
    ActionFn('SEARCH_PRICE_TO_LISTING', dataForm.values.priceto);
  }
  const onReset = () => {
    // console.log('ss', priceDataFrom)
    ActionFn('SEARCH_PRICE_FROM_LISTING', '');
    ActionFn('SEARCH_PRICE_TO_LISTING', '');
  }

  return (

    <div className="filters-popup reward-popup">
      <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
      <RenderFormAccount
        btnSaveText="Сохранить изменения"
        objFields={fields}
        orderFields={fields.order}
        initialValues={{ pricefrom: priceDataFrom, priceto: priceDataTo }}
        showBtn='hide'
        formClassAdd="reward-grid main-grid"

      />
      <div className="filters-btn-container">
        <div className="btn btn--green-border" onClick={() => { onSubmit(); onShowPopup(0); }}>Применить</div>
        <span className="btn btn--orange-border" onClick={() => { onReset(); onShowPopup(0); }}>Сбросить</span>
      </div>
    </div >
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  return {
    fields: state.fieldsPriceFilter, // база полей
    dataForm: formReducer,
    priceDataFrom: state.listingSearchReducer.price_from,
    priceDataTo: state.listingSearchReducer.price_to,
  }
}

export default connect(mapStateToProps, { ActionFn })(RewardPopup);