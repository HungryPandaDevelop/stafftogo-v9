import { connect } from 'react-redux';

import RenderFormAccount from 'components/forms/RenderFormAccount';

const Demo = ({
  dataForm,
  fields,
}) => {

  const onSubmitIn = () => {
    console.log('dataForm.values', dataForm.values)
  }


  return (
    <div>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="stub"></div>
      Demo
      <RenderFormAccount
        btnSaveText="Сохранить изменения"
        objFields={fields}
        orderFields={fields.order}
        onSubmitIn={onSubmitIn}
        sending={true}
        btnClass="btn--green"
        formClassAdd="cabinet-account cabinet-edit shadow-container"
      />
    </div>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsDemo;

  return {
    fields: fields,
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(Demo);