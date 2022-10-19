import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';

const TemplateAccount = ({ title, children }) => {
  return (
    <>
      <div className="stub"></div>
      <div className="content">
        <div className="main-full">
          <h1>{title}</h1>
        </div>
        <div className="main-grid">
          <div className="col-3 col-sm-12">
            <CabinetSidebar />
          </div>
          <div className="col-9 col-sm-12">
            <div className="cabinet-account shadow-container">
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

