import { useState } from 'react';

import { Link } from 'react-router-dom';

import { reduxForm } from 'redux-form';

import RenderTitle from './fields/RenderTitle';

import RenderInputText from './fields/RenderInputText'; // поле стандартное

import RenderInputDate from './fields/RenderInputDate'; // поле стандартное

import RenderInputPhone from './fields/RenderInputPhone'; // поле телефон

import RenderInputPassword from './fields/RenderInputPassword'; // поле пароля

import RenderInputTextarea from './fields/RenderInputTextarea'; // поле текста

import RenderInputSwitch from './fields/RenderInputSwitch'; // поле переключателя, не уневерсальное!

import RenderInputCheckbox from './fields/RenderInputCheckbox';  // поле чекбокс множественное, не уневерсальное!

import RenderInputRadio from './fields/RenderInputRadio';  // поле чекбокс множественное, не уневерсальное!

import RenderInputList from './fields/RenderInputList'; // поле список множественное, не уневерсальное!

import RenderInputMulty from './fields/RenderInputMulty'; // поле селект + текст

// import RenderInputAddition from './fields/RenderInputAddition'; // поле с добавлением полей 

import RenderInputFileNew from './fields/RenderInputFileNew'; // поле с добавлением поля! 

import RenderInputFilePhoto from './fields/RenderInputFilePhoto'; // поле с добавлением поля! 

import RenderInputSelectTrue from './fields/RenderInputSelectTrue'; // поле с селект

import RenderInputComplex from './fields/RenderInputComplex'; // поле с селект

import RenderInputCoords from './fields/RenderInputCoords'; // поле с селект

import ploaderImg from 'front-end/images/preloader.gif'

// --------------------------------------------------------------------

const TemplateForm = (props) => {
  //console.log(props)
  const {
    handleSubmit,
    objFields,
    orderFields,
    btnSaveText,
    formClassAdd,
    showBtn,
    cabinetBack,
    btnWrapClass,
    btnClass,
    sending,
    onSubmitIn,
    cabinetBackLink
  } = props;

  const [errorOn, setErrorOn] = useState(false);

  const showErr = () => {
    setErrorOn(true);
    setTimeout(() => { setErrorOn(false); }, 2500);
  }

  const onSubmit = (formData) => {
    // console.log('save in formData', formData);
    showErr();
    if (errorOn) {
      onSubmitIn();
    }
  }


  const RenderFields = (obj, index) => {

    const choiseFieldType = (type) => {
      switch (type) {
        case 'title':
          return RenderTitle(obj.label, index);
        case 'text':
          return (
            <RenderInputText
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              validate={obj.validate}
              errorOn={errorOn}
            />
          );
        case 'date':
          return (
            <RenderInputDate
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              validate={obj.validate}
              errorOn={errorOn}
            />
          );
        case 'coords':
          return (
            <RenderInputCoords
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
            />
          );
        case 'phone':
          return (
            <RenderInputPhone
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
            />
          );
        case 'textarea':
          return (
            <RenderInputTextarea
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              labelSecond={obj.labelSecond}
              disabled={obj.disabled}
              maxLength={obj.maxLength}
              validate={obj.validate}
              errorOn={errorOn}
            />
          )
        case 'checkbox':
          return (<RenderInputCheckbox
            name={obj.name}
            label={obj.label}
            labelSecond={obj.labelSecond}
            options={obj.options}
          />)
        case 'radio':
          return (
            <RenderInputRadio
              name={obj.name}
              label={obj.label}
              labelSecond={obj.labelSecond}
              options={obj.options}
            />
          );
        case 'list':
          return RenderInputList(obj.name, obj.label, obj.labelSecond, obj.options,);
        case 'password':
          return (
            <RenderInputPassword
              name={obj.name}
              placeholder={obj.placeholder}
              label={obj.label}
              validate={obj.validate}
              errorOn={errorOn}
            />
          );

        case 'switch':
          return (
            <RenderInputSwitch
              name={obj.name}
              label={obj.label}
              options={obj.options}
            />
          );
        case 'multy':
          return (
            <RenderInputMulty
              mainname={obj.mainname}
              label={obj.label}
              labelSecond={obj.labelSecond}
              allFields={obj.allFields}
            />
          );
        case 'select':
          return (
            <RenderInputSelectTrue
              name={obj.name}
              label={obj.label}
              labelSecond={obj.labelSecond}
              placeholder={obj.placeholder}
              options={obj.options}
            />
          );
        case 'file':
          return (
            <RenderInputFileNew
              name={obj.name}
              label={obj.label}
              labelSecond={obj.labelSecond}
              allFields={obj.allFields}
              typeUpload={obj.typeUpload}
              maxSize={obj.maxSize}
              typeFile={obj.typeFile}
              textEmpty={obj.textEmpty}
            />
          );
        case 'photo':
          return (
            <RenderInputFilePhoto
              name={obj.name}
              label={obj.label}
              labelSecond={obj.labelSecond}
              allFields={obj.allFields}
              typeUpload={obj.typeUpload}
              maxSize={obj.maxSize}
              typeFile={obj.typeFile}
              textEmpty={obj.textEmpty}
            />
          );
        case 'complex':
          return (
            <RenderInputComplex
              name={obj.name}
              label={obj.label}
              allFields={obj.allFields}
              btnAddText={obj.btnAddText}
            />
          );
        default:
      }
    }

    return (
      <>
        {choiseFieldType(obj.type)}
      </>
    )
  }


  const renderBtnSubmit = () => {
    return showBtn !== 'hide' && (
      <>
        <button onClick={onSubmit} className={`btn  ${btnClass}`}>
          {sending ? (
            cabinetBack ? (<><i></i><span>{btnSaveText}</span></>) :
              btnSaveText
          ) : (
            <img className='preloader' src={ploaderImg} />
          )}
        </button>
      </>
    );
  }

  return (
    <form
      className={formClassAdd ? formClassAdd + ' form' : 'form'}
      onSubmit={handleSubmit(onSubmit)}

    >
      {orderFields.map((item, index) => (
        <div key={index} className={objFields[item].wrapClass}>
          {
            (RenderFields(objFields[item], index))
          }
        </div>
      ))}
      <div className={btnWrapClass}>
        {renderBtnSubmit()}
        {cabinetBack && <Link to={`/cabinet/${cabinetBackLink}`} className="btn btn--red-border ico-in ico-in--left btn-cancel "><i></i><span>Отменить</span></Link>}
      </div>


    </form >
  )
}



export default reduxForm({
  form: 'singleInput',
  enableReinitialize: true,
})(TemplateForm);


