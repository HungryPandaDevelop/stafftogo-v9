import ExpWorkSingle from 'pages/catalog/parts/cardsItem/ExpWorkSingle';

const CardsAbout = ({ listing }) => {
  return (
    <>
      <div className="cards-about" >
        {listing.companyWorkComplex && (
          <div className="cards-about-item">
            <h3>Опыт работы {<ExpWorkSingle listing={listing} />}</h3>
            {listing.companyWorkComplex.map((item, index) => (
              <div className="cards-about-line" key={index}>
                {item.namework && (<h4>{item.workfrom} / {item.workto}</h4>)}
                <h5>{item.namework && (item.namework)} / {item.namecompany && (item.namecompany)}</h5>
                {item.workresp && (
                  <>
                    <p>{item.workresp}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        {listing.typeSpecialist && (
          <div className="cards-about-item">
            <h3>Отбор команды</h3>
            {listing.typeSpecialist === "multy_spec" ? 'Мне нужна команда' : 'Мне нужен один специалист'}
          </div>
        )}
        {listing.education && (
          <div className="cards-about-item">
            <h3>Уровень образования</h3>
            {listing.education}
          </div>
        )}
        {listing.requirements && (
          <div className="cards-about-item">
            <h3>Требования</h3>
            {listing.requirements}
          </div>
        )}
        {listing.terms && (
          <div className="cards-about-item">
            <h3>Условия</h3>
            {listing.terms}
          </div>
        )}

        {listing.institution && (
          <div className="cards-about-item">
            <h3>Профессиональные образование</h3>
            {listing.institution.map((item, index) => (
              <div className="cards-about-line" key={index}>
                {item.dateEnd && (<h4>Дата окончания: {item.dateEnd}</h4>)}
                <h5>
                  {item.place && (item.place)} /
                  {item.faculty && (item.faculty)} /
                  {item.specialization && (item.specialization)}
                </h5>
              </div>
            ))}
          </div>
        )}
        {listing.lang && (
          <div className="cards-about-item">
            <h3>Владение языками</h3>
            {listing.lang.map((item, index) => (
              <div className="cards-about-line" key={index}>
                {item.explang && (<h4>{item.explang}</h4>)}
                <h5>
                  {item.namelang && (item.namelang)}
                </h5>
              </div>
            ))}
          </div>
        )}

        {listing.about && (
          <div className="cards-about-item">
            <h3>Обо мне</h3>
            {listing.about}
          </div>
        )}

        {listing.responsibilities && (
          <div className="cards-about-item">
            <h3>Основные обязанности</h3>
            {listing.responsibilities}
          </div>
        )}
        {listing.car_exp && (
          <div className="cards-about-item">
            <h3>Опыт вождения</h3>
            {listing.car_exp}
          </div>
        )}




      </div>
    </>
  )
}

export default CardsAbout
