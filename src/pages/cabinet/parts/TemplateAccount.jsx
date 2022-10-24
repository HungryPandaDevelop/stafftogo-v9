import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';
import Breadcrumbs from 'pages/parts/Breadcrumbs';

const TemplateAccount = ({ title, children, addWrapClass }) => {
  return (
    <>
      <div className="stub"></div>
      <Breadcrumbs />
      <div className="content">
        <div className="main-full">
          <h1>{title}</h1>
        </div>
        <div className="main-grid">
          <div className="col-3 col-sm-12">
            <CabinetSidebar />
          </div>
          <div className="col-9 col-sm-12">
            <div className={addWrapClass ? "cabinet-account shadow-container " + addWrapClass : "cabinet-account shadow-container"}>
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="stub"></div>
    </>
  )
}

TemplateAccount.defaultProps = {
  title: 'Templage Cabinet Page'
}

export default TemplateAccount

