import CabinetSidebar from 'pages/cabinet/parts/CabinetSidebar';

const TemplateAccount = ({ title, children, rightSibar }) => {
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
            <div className="cabinet-body">
              {children}
            </div>
          </div>
          <div className="col-2">
            {rightSibar}
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

