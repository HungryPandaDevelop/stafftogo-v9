import { Field, FieldArray } from 'redux-form';

import RenderInputText from './RenderInputText'; // поле стандартное

import RenderInputTextarea from './RenderInputTextarea'; // поле текста

import RenderInputSelectTrue from './RenderInputSelectTrue';



const TemplateInputComplex = ({ names, allFields, fields }) => {

  const choiseFields = (hobbyParam, allFieldsParam) => {

    return allFields.map((item, index) => {
      switch (item.type) {
        case 'text':
          return (
            <div key={index}>
              <RenderInputText
                className='input-decorate'
                name={`${hobbyParam}.${item.name}`}
              />
            </div>
          )
      }
    })
  };

  return (
    <ul>
      <li>
        <button type="button" onClick={() => { fields.push(); }}>Add Hobby</button>
      </li>
      {fields.map((hobby, index) => (
        <li key={index}>
          <div key={index}>
            {choiseFields(hobby, allFields)}
            <button
              onClick={() => fields.remove(index)}
              className="delete-field"
            >x
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

const RenderInputComplex = ({ name, allFields }) => {

  return (
    <div className='main-grid multy-field form-line'>
      <FieldArray
        allFields={allFields}
        name={name}
        component={TemplateInputComplex}
      />
    </div>
  )
}


export default RenderInputComplex
