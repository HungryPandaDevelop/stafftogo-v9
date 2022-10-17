import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';
import { Link } from 'react-router-dom';

const TemplateAccount = ({ title, children, cabinetType }) => {
  return (
    <>
      <div className="stub"></div>
      <div className="content">
        <div className="main-grid cabinet-head">
          <div className="col-3 col-sm-12"> </div>
          <div className="col-9 col-sm-12">
            <h1>{title}</h1>
          </div>
        </div>
        <div className="main-grid">
          <div className="col-3 col-sm-12">
            <CabinetSidebar />
          </div>
          <div className="col-9 col-sm-12">
            {cabinetType && (
              <Link className="btn btn--orange" to={`/cabinet/${cabinetType}-new`}>
                Создать {cabinetType === 'resume' ? 'резюме' : 'вакансию'}
              </Link>
            )}

            <div className="cabinet-body">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

TemplateAccount.defaultProps = {
  title: 'Templage Cabinet Page'
}

export default TemplateAccount

