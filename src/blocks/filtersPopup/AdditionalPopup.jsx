import { useState } from 'react';
import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderFormAccount from 'components/forms/RenderFormAccount';

const AdditionalPopup = ({
  onShowPopup,
  fields,
  dataForm,
  ActionFn,
  gender,
  additional,
  age_from,
  age_to,
  exp_from,
  exp_to
}) => {

  let valueObj = {
    gender,
    additional,
    age_from,
    age_to,
    exp_from,
    exp_to
  }


  const onSubmitIn = () => {
    console.log('dataForm.values', dataForm.values);

    ActionFn('SEARCH_ADDITIONAL_TO_LISTING', dataForm.values);

  }
  const onReset = () => {
    ActionFn('SEARCH_ADDITIONAL_TO_LISTING',
      {
        gender: '',
        additional: [],
        age_from: '',
        age_to: '',
        exp_from: '',
        exp_to: '',
      });
  }





  return (
    <div className="filters-popup additional-popup">
      <div className="filters-close-popup" onClick={() => { onShowPopup(0) }}></div>
      <RenderFormAccount
        btnSaveText="Сохранить изменения"
        objFields={fields}
        orderFields={fields.order}
        initialValues={valueObj}
        showBtn='hide'
        formClassAdd="additional-grid main-grid"
      />
      <div className="filters-btn-container">
        <div className="btn btn--gren-border" onClick={() => { onSubmitIn(); onShowPopup(0); }}>Применить</div>
        <span className="btn btn--orange-border" onClick={() => { onReset(); onShowPopup(0); }}>Сбросить</span>
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form && state.form.singleInput;

  return {

    fields: state.fieldsAdditionalFilter, // база полей
    dataForm: formReducer,
    gender: state.listingSearchReducer.gender,
    additional: state.listingSearchReducer.additional,
    age_from: state.listingSearchReducer.age_from,
    age_to: state.listingSearchReducer.age_to,
    exp_from: state.listingSearchReducer.exp_from,
    exp_to: state.listingSearchReducer.exp_to,
  }
}


export default connect(mapStateToProps, { ActionFn })(AdditionalPopup);