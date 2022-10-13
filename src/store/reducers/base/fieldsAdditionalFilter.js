export default function(){
  return {
    order: [
      "gender",
      "age_from",
      "age_to",
      "exp_from",
      "exp_to",
      "additional",
    ],
    gender: {
      type:"radio",
      name: "gender", 
      label: "Пол", 
      options: [
        {label:'Не имеет значения', value: "no" },
        {label:'Женщина', value: "women" },
        {label:'Мужчина', value: "men" },
      ],
      wrapClass: "col-12 gender-box additional-line"
    },
    age_from: {
      label: "Возраст", 
      type:"text", 
      name: "age_from", 
      placeholder: "До",
      wrapClass: "col-6 col-xs-12 additional-line"
    },
    age_to: {
      label: "hide", 
      type:"text", 
      name: "age_to", 
      placeholder: "До",
      wrapClass: "col-6 col-xs-12 additional-line hide-label"
    },
    exp_from: {
      label: "Опыт", 
      type:"text", 
      name: "exp_from", 
      placeholder: "До",
      wrapClass: "col-6 col-xs-12 additional-line"
    },
    exp_to: {
      label: "hide", 
      type:"text", 
      name: "exp_to", 
      placeholder: "До",
      wrapClass: "col-6 col-xs-12 additional-line hide-label"
    },

    additional: { 
      type:"checkbox",
      name: "additional", 
      label: "", 
      options: [
        { label: 'Есть ИП/Самозанятый', value: 'type_1' },
        { label: 'Медицинская книжка', value: 'type_2' },
        { label: 'Готовность к командировкам', value: 'type_3' },
        { label: 'Готовность работать ночью', value: 'type_4' },
        { label: 'Срочный выезд', value: 'type_5' },
        { label: 'Разрешение на работу в России', value: 'type_6' },
        { label: 'Гражданство РФ', value: 'type_7' },
      ],
      wrapClass: "col-12 additional-checkbox"
    },
  }
}