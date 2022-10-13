
import { Field } from 'redux-form';

const TemplateInputRadio = ({ name, label, labelSecond, options, input }) => {

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
              type="radio"
              checked={input.value === item.value ? 'checked' : ''}
            />
            <span></span>
          </label>
        </div>
      ))}

    </>
  );
}

const RenderInputRadio = ({ name, label, labelSecond, options }) => {

  return <Field
    name={name}
    label={label}
    labelSecond={labelSecond}
    options={options}
    component={TemplateInputRadio}
  />;
}

export default RenderInputRadio;