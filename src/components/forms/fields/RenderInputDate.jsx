import { Field } from 'redux-form';


const TempateInputText = (props) => {

  const { input, placeholder, label, labelSecond, errorOn, meta: { touched, error } } = props;

  return (
    <>
      {label && <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>}
      <input
        {...input}
        type="date"
        placeholder={placeholder}
        className={`input-decorate ${errorOn && touched && error && 'error-input'}`}
      />
      {errorOn && touched && error && <span className='error-hint'>{error}</span>}

    </>
  );
}



const RenderInputDate = ({ name, placeholder, label, validate, errorOn }) => {
  return <Field
    name={name}
    label={label}
    placeholder={placeholder}
    component={TempateInputText}
    validate={validate}
    errorOn={errorOn}

  />;
}

export default RenderInputDate;