import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from 'front-end/images/adv-1.svg'
import img2 from 'front-end/images/adv-2.svg'
import img3 from 'front-end/images/adv-3.svg'
import img4 from 'front-end/images/adv-4.svg'



const AdvantagesHome = ({ setSectionTop }) => {
  const boxRef = useRef(false);
  useEffect(() => {
    setSectionTop(boxRef.current.offsetTop);
  }, []);
  return (
    <>
      <section className="advantages-home" ref={boxRef}>
        <div className="main-grid">
          <div className="advantages-home-header">
            <h2>Умная система GoMap</h2>
            <div className="subtopic">Мы предлагаем решения, которые помогут найти намного продуктивнее </div>
          </div>
        </div>
        <div className="main-grid">
          <div className="advantages-home-item col-6 col-xs-12">
            <img className="advantages-home-img advantages-home-img--left" src={img1} alt="" />
            <div className="advantages-home-info"><b>С нами проще добраться </b>
              <h3>Прокладываем маршрут в реальном времени</h3>
              <div>На интерактивной карте можно построить маршрут до места назначения. Оцените время на дорогу. Проложите марштрут с помощью разных транспортных средств.</div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="advantages-home-item advantages-home-item--right col-6 col-xs-12">
            <img className="advantages-home-img advantages-home-img--right" src={img2} alt="" />
            <div className="advantages-home-info advantages-home-info--right"><b>Задания на час</b>
              <h3>Поиск и реализация краткосрочных проектов</h3>
              <div>Поиск и реализация краткосрочных проектов Ваш сострудник не вышел на работу, а надо быстро перемыть гору посуды?! Смело размещайте срочную вакансию и через 15 минут вы найдете специалиста, который оперативно выполнит поставленную задачу. </div>
            </div>
          </div>
          <div className="section-btn col-xs-12">
            <div className="long-arrow long-arrow--top"></div>
            <div className="long-arrow long-arrow--down"></div>
            <Link to="/catalog/resume/map" className="btn btn btn--white-border" >GoMap </Link>
          </div>
          <div className="advantages-home-item col-6 col-xs-12">
            <img className="advantages-home-img advantages-home-img--left" src={img3} alt="" />
            <div className="advantages-home-info"><b>Ранжирование по опыту </b>
              <h3>Подбор профессионалов<br /> любого уровня</h3>
              <div>На карте за считанные секунды можно отсортировать и выбрать как начинающих специалистов, так и гуру своего дела. </div>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="advantages-home-item advantages-home-item--right col-6 col-xs-12">
            <img className="advantages-home-img advantages-home-img--right" src={img4} alt="" />
            <div className="advantages-home-info advantages-home-info--right"><b>OnLine карта</b>
              <h3>Территориальное<br /> таргетирование</h3>
              <div>Мечта каждого - работа около дома! Наш портал поможет подобрать самое удобное для вас месторасположение</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default AdvantagesHome;
