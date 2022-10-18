import { Field, FieldArray } from 'redux-form';


const renderField = ({ input }) => {
  return (<>
    <input type="text" {...input} />
  </>)
}

const renderHobbies = ({ fields }) => {


  return (
    <ul>
      <li>
        <button type="button" onClick={() => { fields.push(); }}>Add Hobby</button>
      </li>
      {fields.map((hobby, index) => (
        <li key={index}>
          <button
            type="button"
            title="Remove Hobby"
            onClick={() => fields.remove(index)}
          >x</button>
          <Field
            name={`${hobby}.first_name`}
            type="text"
            component={renderField}
            label={`Hobby #${index + 1}`}
          />
          <Field
            name={`${hobby}.last_name`}
            type="text"
            component={renderField}
            label={`Hobby #${index + 1}`}
          />
        </li>
      ))}
    </ul>
  )
}

const RenderInputComplex = () => {




  return (
    <div>
      <FieldArray
        name={`hobbies`}
        component={renderHobbies}
      />
    </div>
  )
}

export default RenderInputComplex
