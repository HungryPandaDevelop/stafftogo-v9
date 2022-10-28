import { connect } from 'react-redux';
import Applicants from 'pages/cabinet/account/Applicants';
import Employers from 'pages/cabinet/account/Employers';
import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';



import defaultCardsImg from 'front-end/images/icons/avatar-light-gray.svg'
const Account = ({
  checkingStatus,
  userInfo,
  fields
}) => {



  const renderImgCards = () => {
    const imgCards = userInfo.imgsAccount ? userInfo.imgsAccount : defaultCardsImg;

    return (
      <div className="cards-face-container">
        <b>Фото профиля</b>
        <div
          className={`img-cover ${userInfo.imgsAccount ? 'cards-face' : 'empty-face'} `}
          style={{ backgroundImage: `url(${imgCards})` }}
        >
        </div>
      </div>
    )
  }




  const formatPhone = (value) => {
    return `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, value.length)}`
  }


  return (
    <>
      <TemplateAccount title="Учетная запись компании" >

        {checkingStatus ? 'Loading account...' :
          userInfo.typeCabinet === 'resume' ? (
            <Applicants
              userInfo={userInfo}
              renderImgCards={renderImgCards}
              formatPhone={formatPhone}
            />) : (
            <Employers
              userInfo={userInfo}
              renderImgCards={renderImgCards}
              formatPhone={formatPhone}
              fields={fields}
            />
          )
        }


      </TemplateAccount>
    </>
  )
}

const mapStateToProps = (state) => {
  const fields = state.accountInfo.info.typeCabinet === 'vacancies' ? state.fieldsEmployersAccount : state.fieldsApplicantsAccount;
  return {
    fields: fields,
    userInfo: state.accountInfo.info,
    checkingStatus: state.accountInfo.checkingStatus
  }
}

export default connect(mapStateToProps)(Account);