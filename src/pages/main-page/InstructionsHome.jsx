import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import img1 from 'front-end/images/inst-0.svg'
import img2 from 'front-end/images/inst-1.svg'
import img3 from 'front-end/images/inst-2.svg'
import img4 from 'front-end/images/inst-3.svg'

const InstructionsHome = ({ checkingStatus, uid }) => {
  return (
    <div>
      <section className="instructions-home">
        <div className="instructions-home-header main-grid">
          <div className="col-5 col-sm-6 col-xs-12">
            <h2>Разместите профайл с видеоприветствием и все!</h2>
          </div>
          <div className="col-4 col-sm-3 col-xs-12"><img className="instructions-home-img" src={img1} alt="" /></div>
          <div className="col-3 col-sm-12 col-xs-12">
            <p>Расскажите подробно в вашем резюме или вакансии о своих пожеланиях к работе: условия работы, оплаты и все остально: что с вашей точки зрения может заинтересовать будущего работодателя или соискателя. На нашем портале ваш профайл может быть дополнен видео приветствием: которое увеличит ваши шансы на выбор в вашу пользу.</p>
          </div>
        </div>
        <div className="instructions-home-body main-grid">
          <div className="instructions-home-item col-4 col-xs-12">
            <h3>Выбирайте работу или сотрудника даже на 1 час</h3>
            <div className="img-container"><img className="instructions-home-thumb" src={img2} alt="" /></div>
            <p>На нашем портале можно подобрать специалистов и работу даже для неполной или краткосрочной занятости. Выбирайте удобную для вас дату и время и подбирайте привелкательные для вас проекты.</p>
          </div>
          <div className="instructions-home-item col-4 col-xs-12">
            <h3>Используйте видео чат для обсуждения деталей</h3>
            <div className="img-container"><img className="instructions-home-thumb" src={img3} alt="" /></div>
            <p>Возможность общения с работодателем или соискателем, не покидая своей текущей локации. Статус “online” подскажет вам о том, что вы можете открыть текстовый или видео чат и перейти к общению буквально за 5 секунд.</p>
          </div>
          <div className="instructions-home-item col-4 col-xs-12">
            <h3>Оставляйте<br /> реальные отзывы</h3>
            <div className="img-container"><img className="instructions-home-thumb" src={img4} alt="" /></div>
            <p>Вы можете написать отзыв про любого бывшего сотрудника или работодателя. После модерации отзыв станет доступным для прочтения всем пользователям портала. Реальные отзывы помогут вам сделать безошибочный выбор.</p>
          </div>

          {checkingStatus ? 'Loading...' : (uid ? '' : <div className="col-12 btn-container"> <Link to="/registration" className="btn btn--orange" href="#">Регистрация </Link></div>)}

        </div>
      </section>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    uid: state.accountInfo.info.uid,
    checkingStatus: state.accountInfo.checkingStatus
  }
};

export default connect(mapStateToProps)(InstructionsHome);