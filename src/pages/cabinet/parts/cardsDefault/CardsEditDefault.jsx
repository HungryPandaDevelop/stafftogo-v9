import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams, useNavigate } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { saveInfo } from 'store/asyncActions/saveInfo';


const VacanciesEdit = ({ fields, dataForm, nameList, fieldsDefault }) => {

  const [getInfo, setGetInfo] = useState({});

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleListing(nameList, params.elementId).then(res => {

      setGetInfo(res);
    });
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    // console.log(dataForm.values);



    saveInfo(dataForm.values, params.elementId, nameList).then(() => {
      navigate('/cabinet/' + nameList, { replace: true });
    });
  }

  /* сохранение данных пользователя */



  return (
    <>

      <TemplateAccount title={nameList} >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={fields[fieldsDefault]}
          orderFields={fields[fieldsDefault].order}
          initialValues={getInfo ? getInfo : null}
          onSubmitIn={onSubmitIn}
          btnWrapClass='btn-container col-12'
          btnClass='btn-save btn--green ico-in ico-in--left'
          formClassAdd='main-grid'
          cabinetBack={true}

          sending={true}
        />
      </TemplateAccount>
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.fieldsSpecialization
  return {
    fields: state, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(VacanciesEdit);