import { Field } from 'redux-form';
import {useState, useRef} from 'react';

const TempateInputStar = (props) => {
  const [choisesIndex, setChoiseIndex] = useState('');
  const { input, placeholder, label, } = props;
  const elRef = useRef();

  const renderStars = ()=>{
    const stars = [];


    const onChoiseStar = (i)=>{

      setChoiseIndex(i);
      elRef.current.focus();
    }
    
    for(let i = 0; i<5; i++){
      stars.push(<i 
        key={i}
        className={`star-ico star-ico--gray ${choisesIndex >= i && 'active'}`}
        onClick={()=>{onChoiseStar(i)}}
        ></i>)
    }
    
    return stars;
  }

  return (
    <>
    <div className="reviews-stars">
      <div className="reviews-stars-container">
        {renderStars()}
      </div>
    </div>
      {label && <label><b>{label}</b> </label>}
      <input
        {...input}
        value={choisesIndex+1}
        ref={elRef}
        type="text"
        placeholder={placeholder}
        className="input-stars"
      
      />


    </>
  );
}



const RenderInputStar = ({ name, label }) => {

  return <Field
    name={name}
    label={label}
    component={TempateInputStar}


  />;
}

export default RenderInputStar;