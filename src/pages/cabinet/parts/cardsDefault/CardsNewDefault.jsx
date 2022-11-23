import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { addCardsDefault } from 'store/asyncActions/addCards';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


const VacanciesNew = ({ fields, dataForm, nameList, fieldsDefault }) => {

  const navigate = useNavigate();

  const onSubmitIn = () => {

    console.log('addUserInfo', dataForm.values)
    addCardsDefault(dataForm.values, nameList).then(() => {
      navigate('/cabinet/' + nameList, { replace: true });
    });

  }





  return (
    <>
      <TemplateAccount title={`Создание ${nameList}`} >
        <RenderFormAccount
          btnSaveText='Добавить'
          objFields={fields[fieldsDefault]}
          orderFields={fields[fieldsDefault].order}
          onSubmitIn={onSubmitIn}
          sending={true}
          btnWrapClass='btn-container col-12'
          btnClass='btn-save btn--green ico-in ico-in--left'
          formClassAdd='main-grid'
          cabinetBack={true}

        />
      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsSpecialization
  return {
    // fields: fields, // база полей
    fields: state, // база полей
    dataForm: formReducer,
  }
}

export default connect(mapStateToProps)(VacanciesNew);