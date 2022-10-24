import { Field } from 'redux-form';

import { createTextMask } from 'redux-form-input-masks';

const phoneMask = createTextMask({
  pattern: '+7 (999) 999-99-99',
});
const RenderInputPhone = ({ name, placeholder, label, labelSecond }) => {
  return (
    <>
      {label && (<label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>)}

      <Field
        name={name}
        type="tel"
        placeholder={placeholder}
        component="input"
        className="input-decorate"
        {...phoneMask}

      />
    </>
  );
}

export default RenderInputPhone;