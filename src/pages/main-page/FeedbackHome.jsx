

import { useState, useRef } from 'react';

import { connect } from 'react-redux';
import RenderFormAccount from 'components/forms/RenderFormAccount';

import emailjs from '@emailjs/browser';

const FeedbackHome = ({ fields, dataForm }) => {


  const [sending, setSending] = useState(true);
  const [valueForm, setValueForm] = useState({});
  const [goodSend, setGoodSend] = useState(false);

  const onSubmitIn = (term) => {
    console.log('sending...');
    setSending(false)
    // setSeinding(true);

    emailjs.send('service_yew9khi', 'template_ld1qsqs', dataForm.values, '8uwo94j0rrU71YiK6')
      .then((result) => {
        setSending(true)
        setValueForm({ test: 'test' });
        setGoodSend(true);
        setTimeout(() => {
          setGoodSend(false);
        }, 4000);
      }, (error) => {
        console.log(error.text);
      });

  }
  return (
    <>
      <section className="feedback-home">
        <div className="main-grid">
          <div className="col-6 col-md-12">
            <h2>Оставь заявку на услуги профессионального рекрутера из нашей команды</h2>
          </div>
          <div className="col-6 hidden-md"></div>
          <div className="col-6 col-md-12 checkbox-container">
            <form className="form main-grid">
              <div className="checkbox col-6 col-xs-12">
                <label>Разработка стратегии поиска кандидата
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Подбор и оценка заявок, включая проверку документов
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Тесная коммуникация с Заказчиком
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Проведение собеседований
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Формулировка требований к соискателю или работодателю
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Составление и презентация Job Offer
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Продвижение вакансии или резюме на портале
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
              <div className="checkbox col-6 col-xs-12">
                <label>Подготовка и проверка Трудовых Договоров
                  <input type="checkbox" checked disabled /><span></span>
                </label>
              </div>
            </form>
          </div>
          <div className="col-6 col-md-12 feedback-container">
            <RenderFormAccount
              btnSaveText="Отправить"
              objFields={fields}
              orderFields={fields.order}
              onSubmitIn={onSubmitIn}
              formClassAdd="main-grid form-default"
              btnClass="btn--green"
              sending={sending}
              initialValues={valueForm}
              btnWrapClass="col-12"
              showBtn={true}
            />
            <div className={`popup-form-sends ${goodSend && 'active'}`}>
              Ваша заявка отправлена
            </div>

          </div>
        </div>
      </section>
    </>
  )
}



const mapStateToProps = (state) => {

  const formReducer = state.form && state.form.singleInput;

  return {
    fields: state.fieldsFeedback, // база полей
    dataForm: formReducer,
  }
}


export default connect(mapStateToProps)(FeedbackHome);