
import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import storeImage from 'hooks/storeImage';

const TemplateFile = (props) => {

  const elRef = useRef();

  const {
    input,
    label,
    labelSecond,
    maxSize,
    typeAccept,
    textEmpty
  } = props;

  const [nameFile, setNameFile] = useState('');
  const [firstLoad, setFirstLoad] = useState(0);
  const [loadingFile, setLoadingFile] = useState(false);

  useEffect(() => {

    if (input.value && firstLoad === 0) {
      setFirstLoad(1);
      setNameFile(input.value);
    }

  });

  const onChange = async (e) => {
    elRef.current.focus();

    const files = e.target.files; // выделили фотки

    if (e.target.files[0].size > maxSize) {
      e.target.value = '';
      alert('Файл слишком большой')
      // toast.error('Файл слишком большой')
      return false;
    }

    let fileUrls = await Promise.all( // загрузили получили урлы
      [...files].map((file) => storeImage(file, setLoadingFile))
    ).catch(() => {
      console.log('err')
      return
    });



    setNameFile(fileUrls);
  }
  const deleteFile = () => {
    setNameFile('');
    elRef.current.focus();
  }

  return (
    <>
      {label && <label><b>{label}</b>{labelSecond && <span>{labelSecond}</span>}</label>}
      <div
        className="file-input-container"
      >
        {loadingFile === true && <div className="preloader"></div>}
        {!nameFile && <div className="file-decorate"><span>{textEmpty}</span><i></i></div>}
        <input ref={elRef} type="text" {...input} value={nameFile} className="input-file-second" />
        <input type="file" onChange={onChange} className="input-file" accept=".jpg, .jpeg, .png" />
        {nameFile && (
          <div className='file-uploaded'>
            <div className="file-uploaded-container">
              <img src={nameFile} alt={nameFile} />
            </div>
            <div className='file-uploaded-delete' onClick={() => { deleteFile() }}>delete</div>
          </div>
        )}
      </div>
    </>
  )
}


const RenderInputFileNew = (props) => {

  return <Field
    name={props.name}
    props={props}
    typeAccept={props.typeAccept}
    component={TemplateFile}
  />

}


export default RenderInputFileNew
