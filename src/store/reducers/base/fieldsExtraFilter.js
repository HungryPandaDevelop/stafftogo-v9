export default function(){
  return {
    order: [
      "gender",
      "age",
      "exp",
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
      wrapClass: "col-12 col-xs-12"
    },
    age: {
      type: "multy", 
      mainname: "age", 
      label:"Возраст",  
      allFields: [
        { 
          type:"text" ,
          name: "age_from", 
          placeholder: "От",
          length: "col-6 col-xs-12" 
        },
        { 
          type:"text", 
          name: "age_to", 
          placeholder: "До",
          length: "col-6 col-xs-12" 
        },
      ],
      wrapClass: "col-6 col-xs-12"
    },
    exp: {
      type: "multy", 
      mainname: "exp", 
      label:"Опыт",  
      allFields: [
        { 
          type:"text" ,
          name: "exp_from", 
          placeholder: "От",
          length: "col-6 col-xs-12" 
        },
        { 
          type:"text", 
          name: "exp_to", 
          placeholder: "До",
          length: "col-6 col-xs-12" 
        },
      ],
      wrapClass: "col-6 col-xs-12"
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
      wrapClass: "col-12 col-xs-12"
    },
  }
}