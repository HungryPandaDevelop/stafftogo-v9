import { Field, FieldArray } from 'redux-form';

import RenderInputText from './RenderInputText'; // поле стандартное

import RenderInputTextarea from './RenderInputTextarea'; // поле текста

import RenderInputSelectTrue from './RenderInputSelectTrue';



const TemplateInputComplex = ({ allFields, fields, btnAddText }) => {

  const choiseFields = (hobbyParam) => {

    return allFields.map((item, index) => {
      switch (item.type) {
        case 'text':
          return (
            <div key={index} className={item.wrapClass}>
              {console.log('item', item.wrapClass)}
              <RenderInputText
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
                placeholder={item.placeholder}
              />
            </div>
          )
      }
    })
  };

  return (
    <>
      {fields.map((item, index) => (
        <div key={index} className="main-grid complex-input">
          <div className="col-12">
            <b className="comlex-num">#{index + 1}</b>
          </div>
          {choiseFields(item, allFields)}
          <div
            onClick={() => fields.remove(index)}
            className="complex-delete-field ico-in"
          >
          </div>
        </div>
      ))}
      <div className="btn-container col-12">
        <div className='btn btn--gren' onClick={() => { fields.push(); }}>{btnAddText}</div>
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
