import { getSingleListing } from 'store/asyncActions/getSingleListing';
import { useEffect, useState } from 'react';
import Breadcrumbs from 'pages/parts/Breadcrumbs';

const TemplatePage = ({ pages, id }) => {

  const [content, setContent] = useState({});

  useEffect(() => {
    console.log('pages', pages)
    getSingleListing('pages', id).then(res => {
      setContent(res);
      console.log('res pages', res)
    })
  }, []);

  return (
    <div className='content'>
      <div className="stub"></div>
      {/* <Breadcrumbs link={pages} linkText={content.title} /> */}
      <div className="main-full">
        <h1>{content.title}</h1>
      </div>
      <div className="main-grid">
        <div className="col-6">
          {content.img && (
            <div className="page-img">
              <img src={content.img} alt="" />
            </div>
          )}

        </div>
        <div className="col-6">
          <div>{content.content}</div>
        </div>

      </div>

      <div className="stub"></div>
    </div>
  )
}

export default TemplatePage
