import { Field } from 'redux-form';

const TemplateInputCheckbox = ({ name, label, labelSecond, options, input }) => {

  return (
    <>
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      {options.map(item => (
        <div className='checkbox' key={item.value}>
          <label>{item.label}
            <input
              {...input}
              name={name}
              value={item.value}
              type="checkbox"
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