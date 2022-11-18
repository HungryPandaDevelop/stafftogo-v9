import { useEffect } from 'react';

import { connect } from 'react-redux';

import RenderFormAccount from 'components/forms/RenderFormAccount';

import { getTestItem } from 'store/asyncActions/inviteChat';

const Demo = ({
  dataForm,
  fields,
}) => {

  useEffect(() => {
    getTestItem()
  }, [])

  const onSubmitIn = () => {
    console.log('dataForm.values', dataForm.values)
  }


  return (
    <div>
      <div className="stub"></div>
      <div className="stub"></div>
      <div className="stub"></div>

      <div className="main-full">
        <h1>Demo</h1>
      </div>
      <div className="main-full">
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
      <div className="stub"></div>
      <div className="stub"></div>
    </div>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsChat;

  return {
    fields: fields,
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(Demo);