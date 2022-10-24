
import { useState, useEffect, useRef } from 'react';

import { Field } from 'redux-form';

import storeImage from 'hooks/storeImage';

import avatarBlack from 'front-end/images/icons/avatar-black.svg'
import photoIco from 'front-end/images/icons/cabinet/photo-add-black.svg'

// import userIco from 'front-end/images/icons/avatar-black.svg';
// import photoIco from 'front-end/images/icons/photo-add-black.svg';

const TemplateFile = (props) => {

  const elRef = useRef();

  const {
    input,
    name,
    label,
    labelSecond,
    maxSize,
    typeFile,
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
  const deleteFile = (index) => {
    setNameFile('');
    elRef.current.focus();
  }

  return (
    <>
      {label && <b>{label}</b>}
      <div className='input-photo'>
        <div
          className="input-file-container"
        >
          {loadingFile === true && <div className="preloader"></div>}
          <input ref={elRef} type="text" {...input} value={nameFile} className="input-file" />
          <input type="file" onChange={onChange} className="input-file" />
        </div>

        {!nameFile && <>
          <img src={avatarBlack} alt="" className="input-user-ico" />
          <img src={photoIco} alt="" className="input-photo-ico" />
        </>}
        {nameFile && (
          <div className='input-photo-uploaded' style={{ backgroundImage: `url(${nameFile})` }}>
            <div className='input-photo-clear' onClick={() => { deleteFile() }}></div>
          </div>
        )}
      </div></>
  )
}


const RenderInputFileNew = (props) => {

  return <Field
    name={props.name}
    props={props}
    component={TemplateFile}
  />

}


export default RenderInputFileNew
