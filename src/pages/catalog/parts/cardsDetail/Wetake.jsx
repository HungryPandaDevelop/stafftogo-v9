
const Wetake = ({ list }) => {

  const additionalListRender = (list) => {


    const additionalTypeArr = [
      { label: 'Пенсионеров', value: 'type1' },
      { label: 'Соискателей с инвалидностью', value: 'type2' },
      { label: 'Студентов', value: 'type3' },
      { label: 'Иностранных граждан (мигрантов)', value: 'type4' },
    ];

    let filterList = [];
    list.forEach(el => {
      additionalTypeArr.forEach(item => {
        if (item.value === el) {
          filterList.push(item.label);
        }
      })
    });

    return filterList.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  return (
    <>
      <h3>Рассматриваем на вакансию всех, в том числе</h3>
      <ul className="ln">
        {additionalListRender(list)}
      </ul>

    </>
  )
}

export default Wetake
