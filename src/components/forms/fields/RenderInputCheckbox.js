import { Field} from 'redux-form';
import { ReduxCheckbox, Checkboxes } from 'react-form-checkbox';



const TemplateCheckbox = ({ name, input, label }) => (
  <div className="checkbox">
    <label>
      {label}
      <input type="checkbox" {...input} />
      <span></span>
    </label>
  </div>
);

const RenderInputCheckbox = ({name, label, labelSecond, options}) => {
  return (
    <>
      <label><b>{label}</b> {labelSecond ? <span>{labelSecond}</span> : ''}</label>
      <Field
        name={name}
        component={ReduxCheckbox(Checkboxes)}
        data={options}
        itemComponent={TemplateCheckbox}
        variants={options}
      />
    </>
  );
}

export default RenderInputCheckbox;