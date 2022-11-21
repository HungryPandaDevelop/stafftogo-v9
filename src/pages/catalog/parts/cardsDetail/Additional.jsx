import React from 'react'

const Additional = ({ list }) => {

  const additionalListRender = (list) => {


    const additionalTypeArr = [
      { label: 'Есть ИП/Самозанятый', value: 'type_1' },
      { label: 'Медицинская книжка', value: 'type_2' },
      { label: 'Готовность к командировкам', value: 'type_3' },
      { label: 'Готовность работать ночью', value: 'type_4' },
      { label: 'Срочный выезд', value: 'type_5' },
      { label: 'Разрешение на работу в России', value: 'type_6' },
      { label: 'Гражданство РФ', value: 'type_6' },
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

  if (list.length === 0) { return false }
  return (
    <>
      <div className="cards-verified-list shadow-container">
        <h3>Проверено Staff 2 Go</h3>
        <ul className="ln">
          {additionalListRender(list)}
        </ul>
      </div>
    </>
  )
}

export default Additional
