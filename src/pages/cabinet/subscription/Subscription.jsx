import TemplateAccount from 'pages/cabinet/parts/TemplateAccount';

import baseSub from 'front-end/images/icons/cabinet/base-sub.svg';
import premiumSub from 'front-end/images/icons/cabinet/premium-sub.svg';
import proSub from 'front-end/images/icons/cabinet/pro-sub.svg';

// Robokassa instance

const Subscription = () => {

  return (
    <TemplateAccount title='Чат' >

      <div className="main-grid">
        <div className="col-4">
          <div className="subscribe-item">
            <div className="subscribe-ico">
              <img src={baseSub} alt={baseSub} />
            </div>
            <h3>Базовый подписка</h3>
            <div className="subscribe-price">Р 3000</div>
            <div className="subscribe-list">
              <ul className="ln">
                <li>Срок размещения 30 дней</li>
                <li>Отклик по телефону</li>
                <li>Цена за 1 шт 500 Р</li>
              </ul>
            </div>
            <div className="btn-container">
              <div className="btn btn--orange">Купить</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="subscribe-item">
            <div className="subscribe-ico">
              <img src={premiumSub} alt={premiumSub} />
            </div>
            <h3>Премиум подписка</h3>
            <div className="subscribe-price">Р 6000</div>
            <div className="subscribe-list">
              <ul className="ln">
                <li>Срок размещения 30 дней</li>
                <li>Отклик по телефону</li>
                <li>Цена за 1 шт 500 Р</li>
              </ul>
            </div>
            <div className="btn-container">
              <div className="btn btn--orange">Купить</div>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="subscribe-item">
            <div className="subscribe-ico">
              <img src={proSub} alt={proSub} />
            </div><h3>Pro подписка</h3>
            <div className="subscribe-price">Р 12000</div>
            <div className="subscribe-list">
              <ul className="ln">
                <li>Срок размещения 30 дней</li>
                <li>Отклик по телефону</li>
                <li>Цена за 1 шт 500 Р</li>
              </ul>
            </div>
            <div className="btn-container">
              <div className="btn btn--orange">Купить</div>
            </div>
          </div>
        </div>
      </div>
    </TemplateAccount >

  )
}

export default Subscription
