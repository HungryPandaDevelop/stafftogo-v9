import { Field, FieldArray } from 'redux-form';

import RenderInputText from './RenderInputText'; // поле стандартное

import RenderInputTextarea from './RenderInputTextarea'; // поле текста

import RenderInputSelectTrue from './RenderInputSelectTrue';

const TemplateInputComplex = ({ names, allFields, fields }) => {

  // console.log('fields', fields)

  const choiseFields = (type) => {
    return allFields.map((field, index) => {
      switch (field.type) {
        case 'text':
          return (
            <div key={index}>
              <RenderInputText
                className='input-decorate'
                name={names + '_' + field.name + '_' + type}
              />
            </div>
          )
      }
    })
  };
  return (
    <>
      {fields.map((hobby, index) => (
        <div key={index}>
          {choiseFields('add')}
          <div
            onClick={() => fields.remove(index)}
            className="delete-field"
          >
          </div>
        </div>
      ))}
      <div className="btn" onClick={() => fields.push()}>
        +++
      </div>
    </>
  )
};

const RenderInputComplex = ({ name, allFields }) => {

  return (
    <div className='main-grid multy-field form-line'>
      <FieldArray
        name={name}
        names={name}
        allFields={allFields}
        component={TemplateInputComplex}
      />
    </div>
  )
}


export default RenderInputComplex;