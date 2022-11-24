import { useRef } from 'react';

import ReactToPrint from 'react-to-print';

import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';


const Demo = () => {

  const refImg = useRef(null);


  const printImg = async () => {
    const dataUrl = await htmlToImage.toPng(refImg.current);
    console.log(refImg)
    // download image
    const link = document.createElement('a');
    link.download = "html-to-img.png";
    link.href = dataUrl;
    link.click();
  }
  return (
    <div className='all' ref={refImg} style={{ background: 'white' }}>
      <div className="stub"></div>
      <img width="30px" src="https://firebasestorage.googleapis.com/v0/b/stafftogo-8721b.appspot.com/o/images%2FKs8AALPMJ0MkLl888A9jSBr2IaC3-avatar-1.jpg-4029e26e-e646-4e52-8864-3d034642317f?alt=media&token=0ea89e1c-05fc-4a43-8ba0-8b1e710e4826" alt="" />
      <div className="main-full">
        <h1>Demo</h1>
      </div>
      <div className="main-full">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ut. Exercitationem dicta incidunt ratione placeat labore distinctio, dignissimos vitae mollitia doloremque deserunt, porro suscipit accusamus? Optio vitae fuga odit aliquid!
      </div>
      <div className="main-full">
        <div className="btn" onClick={printImg}>pdf</div>
      </div>

    </div>
  )
}

export default Demo
