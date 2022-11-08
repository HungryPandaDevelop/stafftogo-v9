
const TypeWork = ({ list }) => {

  const additionalListRender = (list) => {


    const additionalTypeArr = [
      { label: "Постоянная работа", value: "type_1" },
      { label: "Ночная работы", value: "type_2" },
      { label: "Сдельная работа / Подмена", value: "type_3" },
      { label: "Срочная работа", value: "type_4" },
      { label: "Фриланс", value: "type_5" },
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
      <div className="cards-typework-item shadow-container" key={index}>
        <div className="cards-typework-info"><em>{item}</em></div>

      </div>
    ))
  }

  if (list.length === 0) { return false }
  return (
    <>
      <h3>Дополнительны условия занятости</h3>
      {additionalListRender(list)}
    </>
  )
}

export default TypeWork
