import { connect } from 'react-redux';
import ActionFn from 'store/actions';

import RenderFormAccount from 'components/forms/RenderFormAccount';

const AdditionalPopup = ({ showPopupControls, fields, dataForm, extraData, ActionFn }) => {



  const onSubmitIn = () => {
    // console.log(dataForm.values);
    ActionFn('SEARCH_EXTRA_TO_LISTING', dataForm.values)


  }


  return (
    <div className="filters-popup additional-popup">
      <div className="filters-close-popup"></div>
      <div className="map-popup-container filters-container">
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={fields}
          orderFields={fields.order}
          initialValues={extraData}
          onSubmitProps={onSubmitIn}
          showBtn='hide'
          formClassAdd="additional-grid main-grid"
        />
      </div>
    </div>
  )
}


const mapStateToProps = (state) => {
  const formReducer = state.form && state.form.singleInput;

  return {

    fields: state.fieldsExtraFilter, // база полей
    dataForm: formReducer,
    extraData: state.listingSearchReducer.extra
  }
}


export default connect(mapStateToProps, { ActionFn })(AdditionalPopup);