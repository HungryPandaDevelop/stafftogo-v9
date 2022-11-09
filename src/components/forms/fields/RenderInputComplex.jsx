import { FieldArray } from 'redux-form';

import RenderInputText from './RenderInputText'; // поле стандартное
import RenderInputPhone from './RenderInputPhone'; // поле стандартное
import RenderInputDate from './RenderInputDate'; // поле стандартное

import RenderInputTextarea from './RenderInputTextarea'; // поле текста

import RenderInputSelectTrue from './RenderInputSelectTrue';



const TemplateInputComplex = ({ allFields, fields, btnAddText }) => {

  const choiseFields = (hobbyParam) => {

    return allFields.map((item, index) => {
      switch (item.type) {
        case 'text':
          return (
            <div key={index} className={item.wrapClass}>
              <RenderInputText
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
                placeholder={item.placeholder}
              />
            </div>
          )
        case 'phone':
          return (
            <div key={index} className={item.wrapClass}>
              <RenderInputPhone
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
              />
            </div>
          )
        case 'date':
          return (
            <div key={index} className={item.wrapClass}>
              <RenderInputDate
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
                placeholder={item.placeholder}
              />
            </div>
          )
        case 'textarea':
          return (
            <div key={index} className={item.wrapClass}>
              <RenderInputTextarea
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
                placeholder={item.placeholder}
              />
            </div>
          )
        case 'select':
          return (
            <div key={index} className={item.wrapClass}>
              {item.label && <label><b>{item.label}</b></label>}
              <RenderInputSelectTrue
                name={`${hobbyParam}.${item.name}`}
                placeholder={item.placeholder}
                options={item.options}
              />
            </div>
          )
      }
    })
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className="complex-input">
          <div className="main-grid">
            {choiseFields(item, allFields)}
            <div
              onClick={() => fields.remove(index)}
              className="complex-delete-field ico-in"
            >
            </div>
          </div>
        </div>
      ))}
      <div className="btn-container col-12">
        <div className='btn btn--green ico-in ico-in--left btn-add' onClick={() => { fields.push(); }}>
          <i></i><span>{btnAddText}</span>
        </div>
      </div>
    </>
  )
}

const RenderInputComplex = ({ name, allFields, label, btnAddText }) => {

  return (
    <>
      {label && (<b>{label}</b>)}
      <FieldArray
        allFields={allFields}
        name={name}
        component={TemplateInputComplex}
        btnAddText={btnAddText}
      />
    </>
  )
}


export default RenderInputComplex
