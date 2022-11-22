import { Link } from 'react-router-dom';


const Switch = ({ listingType, listingTypeReverse, listingPage }) => {

  return (
    <>
      <div
        className={`switch-container ${listingType === 'vacancies' ? 'switch-btn--active' : ''}`}
      >
        <span>Резюме</span>
        <div className="switch-btn switch-btn--white">
          <Link to={`/catalog/${listingTypeReverse}${listingPage ? '/map' : ''}`}></Link>
        </div>
        <span>Вакансии</span>
      </div>
    </>
  )
}




export default Switch;