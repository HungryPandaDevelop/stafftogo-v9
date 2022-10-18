import { Field, FieldArray  } from 'redux-form';
import {  createTextMask } from 'redux-form-input-masks';

const TemplateInputAddition = ({ fields, member, btnTextAdd, nameField, typeInner }) => {

  const phoneMask = createTextMask({
    pattern: '+7 (999) 999-9999',
  });

  // console.log('typeInner', typeInner)
  const coditionProps = typeInner === "phone" ? ({...phoneMask }):('')

  return(
    <div className="form-line form-addition">
          <Field
            name={`${nameField}_main`}
            type="text"
            component="input"
            className="input-decorate"
            {...coditionProps}
          />
      {fields.map((item, index) => (
        <div key={index}>
          <Field
            name={item}
            type="text"
            component="input"
            className="input-decorate"
            {...coditionProps}
          />
          <div
            onClick={() => fields.remove(index)}
            className="delete-field"
          >
          </div>
        </div>
      ))}
      
        <div className="add-field" onClick={() => fields.push()}>
          {btnTextAdd}
        </div>
      
    </div>
  )
};

const RenderInputAddition = (name, label, btnTextAdd, typeInner) => {
  return (
    <>
      {label&& (<label><b>{label}</b></label>)}
      <FieldArray
        name={name} 
        nameField={name}
        component={TemplateInputAddition}
        btnTextAdd={btnTextAdd}
        typeInner={typeInner}
      />
    </>
  )
}

export default RenderInputAddition;