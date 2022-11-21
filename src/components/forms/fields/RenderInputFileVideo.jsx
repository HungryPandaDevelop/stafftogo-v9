
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
    <div className='form-line'>
      {label && <label className="col-12"><b>{label}</b><span>{labelSecond}</span></label>}
      <div
        className="file-input-container"
      >
        {loadingFile === true && <div className="preloader"></div>}

        {nameFile && (
          <div className='file-uploaded'>
            <video className='file-uploaded-container' width="400" height="300" controls="controls" >
              <source src={nameFile} type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
            </video>
            <div className='file-uploaded-delete' onClick={() => { deleteFile() }}>delete</div>
          </div>
        )}
        <div className={`${nameFile && 'hiddened-file'}`}>
          <div className="file-decorate"><span>{textEmpty}</span><i></i></div>
          <input ref={elRef} type="text" {...input} value={nameFile} className="input-file" autocomplete='off' />
          <input type="file" onChange={onChange} className="input-file" accept='video/mp4' autocomplete='off' />
        </div>

      </div>
    </div>
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
