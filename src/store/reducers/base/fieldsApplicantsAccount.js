export default function(){
  return {
    order: [
      "titleOne",
      "imgsAccount",
      "accountName",
      "email",
      "phone",
      "age",
      "typeCabinet",
      "statusInSite",
      "gender",
      "country",
    ],
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"resume"},
        {name:"Компания", value:"vacancies"},
      ],
      wrapClass: "col-5 col-offset-3  account-itemы"
    },
    gender: {
      type:"radio",
      name: "gender", 
      label: "Пол", 
      options: [
        {label:'Женщина', value: "women" },
        {label:'Мужчина', value: "men" },
      ],
      wrapClass: "col-5 col-offset-3  account-item"
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0,
      wrapClass: "col-5 account-item"
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      label: "Телефон", 
      placeholder: "Телефон",
      wrapClass: "col-5 col-offset-3  account-item"
    },
    statusInSite: {
      type:"switch",
      name: "statusInSite", 
      label: "Мой статус на сайте", 
      options: [
        {name:"Я ищу работу",value:"on"},
        {name:"Я не ищу работу", value:"off"},
      ],
      wrapClass: "col-5  account-item"
    },
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Фио", 
      placeholder: "Фио", 
      wrapClass: "col-5 account-item"
      
    },
    age: { 
      type:"date" ,
      name: "age", 
      label: "Дата рождения", 
      wrapClass: "col-5 account-item"
      
    },
    country: { 
      type:"text" ,
      name: "country", 
      label: "Гражданство", 
      placeholder: "Гражданство", 
      wrapClass: "col-5  account-item"
    },
    imgsAccount: {
      type: "photo", 
      name: "imgsAccount", 
      label:"Фото профиля", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 1000000, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-2 col-lg-3 col-sm-5 input-photo-container"
    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
      wrapClass: "col-12"
    },
  }
}