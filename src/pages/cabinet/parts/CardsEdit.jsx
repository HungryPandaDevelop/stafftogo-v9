import { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import { useParams, useNavigate } from 'react-router-dom';

import { getSingleListing } from 'store/asyncActions/getSingleListing';

import { saveInfo } from 'store/asyncActions/saveInfo';

import { getListingDefault } from 'store/asyncActions/getListing';

const VacanciesEdit = ({ accountInfo, cabinetType, fields, dataForm }) => {

  const [getInfo, setGetInfo] = useState({});

  const [listings, setListings] = useState(fields);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getSingleListing(cabinetType, params.elementId).then(res => {
      console.log('setGetInfo', accountInfo);
      setGetInfo(res);
    });

    getListingDefault('specialization').then(res => {

      let newListing = res.map(item => {
        return {
          label: item.name,
          value: item.type
        }
      });

      fields.typeSpecialization.options = newListing
      setListings(fields)
      // setLoading(false);
    });

    getListingDefault('activity').then(res => {

      let newListing = res.map(item => {
        return {
          label: item.name,
          value: item.type
        }
      });
      console.log(res)
      fields.industry.options = newListing
      setListings(fields)
      setLoading(false);
    });
  }, []);

  /* получение данных пользователя */

  /* сохранение данных пользователя */
  const onSubmitIn = () => {
    // console.log(dataForm.values);



    saveInfo({ ...dataForm.values, userInfo: accountInfo }, params.elementId, cabinetType).then(() => {
      navigate('/cabinet/' + cabinetType, { replace: true });
    });
  }

  /* сохранение данных пользователя */

  const renderDataText = () => {
    return cabinetType === 'resume' ? 'Редактировать резюме' : 'Редактировать вакансию'
  }


  return (
    <>
      {loading !== true && (<TemplateAccount title={renderDataText()} >
        <RenderFormAccount
          btnSaveText="Сохранить изменения"
          objFields={listings}
          orderFields={listings.order}
          initialValues={getInfo ? getInfo : null}
          onSubmitIn={onSubmitIn}
          btnWrapClass='btn-container col-12'
          btnClass='btn-save btn--green ico-in ico-in--left'
          formClassAdd='main-grid'
          cabinetBack={true}
          cabinetBackLink={cabinetType}
          sending={true}
        />
      </TemplateAccount>)}

    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;
  const fields = state.accountInfo.info.typeCabinet === 'vacancies' ? state.fieldsVacancies : state.fieldsResume;
  return {
    uid: state.accountInfo.info.uid,
    accountInfo: state.accountInfo.info,
    cabinetType: state.accountInfo.info.typeCabinet,
    fields: fields, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(VacanciesEdit);