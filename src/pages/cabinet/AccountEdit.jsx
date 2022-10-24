import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

// import { sendUserInfo } from 'store/asyncActions/sendUserInfo';
import { saveInfo } from 'store/asyncActions/saveInfo';

import ActionFn from 'store/actions';

const AccountEdit = ({
  ActionFn,
  uid,
  userInfo,
  checkingStatus,
  dataForm,
  fields,
}) => {


  const navigate = useNavigate();


  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    ActionFn('CHANGE_ACCOUNT_INFO', true);
    saveInfo(dataForm.values, uid, 'users').then(() => {
      ActionFn('CHANGE_ACCOUNT_INFO', false);
      ActionFn('SET_INFO_ACCOUNT', dataForm.values);
    });

    navigate('/cabinet/', { replace: true });
  }



  /* сохранение данных пользователя */



  return (
    <>
      <TemplateAccount title="Учетная запись" >
        {checkingStatus ? 'Loading account...' : (
          <RenderFormAccount
            btnSaveText="Сохранить изменения"
            objFields={fields}
            orderFields={fields.order}
            initialValues={userInfo}
            onSubmitIn={onSubmitIn}
            sending={true}
            btnWrapClass="col-9 col-offset-3 btn-container"
            btnClass='btn-save btn--green ico-in ico-in--left'
            formClassAdd="main-grid"
            cabinetBack={true}
            cabinetBackLink=""
          />
        )}


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.accountInfo.info.typeCabinet === 'vacancies' ? state.fieldsEmployersAccount : state.fieldsApplicantsAccount;

  return {
    fields: fields,
    dataForm: formReducer,
    userInfo: state.accountInfo.info,
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps,
  {
    ActionFn
  })(AccountEdit);