import { useRef } from 'react';
import jsPDF from 'jspdf';

const Demo = () => {




  const refImg = useRef(null);


  const printImg = async () => {

    const doc = new jsPDF({
      format: 'a4',
      unit: 'px',

    });

    // Adding the fonts.
    doc.setFont('Inter-Regular', 'normal');

    doc.html(refImg.current, {
      async callback(doc) {
        await doc.save('document');
      },
    });

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
