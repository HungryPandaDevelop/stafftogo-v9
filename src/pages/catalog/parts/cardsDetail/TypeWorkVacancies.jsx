
import dayWork from 'front-end/images/icons/day-work.svg';
import quicklyWork from 'front-end/images/icons/quickly-work.svg';
import nightWork from 'front-end/images/icons/night-work.svg';
import projectWork from 'front-end/images/icons/project-work.svg';



const choiseImg = (imgType) => {
  switch (imgType) {
    case 'Ночная работы':
      return nightWork;
    case 'Срочная работа':
      return quicklyWork;
    case 'Сдельная работа / Подмена':
      return projectWork;
    case 'Постоянная работа':
      return dayWork;
    default:
      return false;
  }

}

const TypeWorkVacancies = ({ list }) => {


  return (
    <div>
      <h3>Дополнительны условия занятости</h3>
      {list.map((item, index) => {
        return (
          <div key={index} className="cards-typework-item shadow-container">

            {choiseImg() && <div className="cards-typework-img"><img src={choiseImg(item.worktype)} alt="" /></div>}

            <div className="cards-typework-info">
              <em>{item.worktype}</em>
              <span>{item.employment}</span>
              <span>{item.workTime}</span>
              <span>{item.priceType}</span>
              <b>Р {item.price}</b>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default TypeWorkVacancies
