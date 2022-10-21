import { Field } from 'redux-form';

const TemplateInputCheckbox = ({ name, label, labelSecond, options, input }) => {

  return (
    <>
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      {options.map((item,index) => (
        <div className='checkbox' key={index}>
          {  console.log('value,',item.value)}
          <label>{item.label}
            <input
              type="checkbox"
              {...input}
              value={item.value}
              defaultChecked={item.checked  && 'checked' }
              disabled={item.disabled && 'disabled'}
            
            />
            <span></span>
          </label>
        </div>
      ))}

    </>
  );
}

const RenderInputCheckbox = ({ name, label, labelSecond, options }) => {

  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    options={options}
    component={TemplateInputCheckbox}
    
  />;
}

export default RenderInputCheckbox;