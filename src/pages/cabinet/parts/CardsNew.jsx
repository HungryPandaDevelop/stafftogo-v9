import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { connect } from 'react-redux';

import { addCards } from 'store/asyncActions/addCards';

import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import RenderFormAccount from 'components/forms/RenderFormAccount';


import { getListingDefault } from 'store/asyncActions/getListing';

const VacanciesNew = ({ accountInfo, uid, cabinetType, fields, dataForm }) => {

  const navigate = useNavigate();

  const [listings, setListings] = useState(fields);
  const [loading, setLoading] = useState(true);

  useEffect(() => {


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


  const onSubmitIn = () => {
    const addUserInfo = { ...dataForm.values, userInfo: accountInfo };


    // console.log('addUserInfo', addUserInfo)
    addCards(addUserInfo, cabinetType, uid).then(() => {
      navigate('/cabinet/' + cabinetType, { replace: true });
    });

  }

  const cabinetText = () => {
    if (cabinetType === 'resume') {
      return ['резюме', 'резюме']
    }
    else {
      return ['вакансии', 'вакансию']
    }
  }


  return (
    <>
      {loading !== true && (<TemplateAccount title={`Создание ${cabinetText()[0]}`} >
        <RenderFormAccount
          btnSaveText={`Добавить ${cabinetText()[1]}`}
          objFields={listings}
          orderFields={listings.order}
          onSubmitIn={onSubmitIn}
          sending={true}
          btnWrapClass='btn-container col-12'
          btnClass='btn-save btn--green ico-in ico-in--left'
          formClassAdd='main-grid'
          cabinetBack={true}
          cabinetBackLink={cabinetType}
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

export default connect(mapStateToProps)(VacanciesNew);