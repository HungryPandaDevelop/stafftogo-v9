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

        {listing.about && (
          <div className="cards-about-item">
            <h3>Обо мне</h3>
            {listing.about}
          </div>
        )}

      </div>
    </>
  )
}

export default CardsAbout
