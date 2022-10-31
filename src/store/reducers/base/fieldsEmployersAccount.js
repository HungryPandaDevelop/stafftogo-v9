import { required, minLength,mailCheck } from 'components/forms/validator';


export default function(){
  return {
    order: [
      "titleOne",
      "imgsAccount",
      "accountName",
      "email",
      "site_company",
      "typeEmployer",
      "phones",
      "typeCabinet",
      "typeJob",
      "description_company",
      "num_workers",
      "videoCompany",
      "titleTwo", 
      "legalNameCompany",
      "centralOffice",
      "how_get",
      "inn_company",
      "kpp",
      "bank",
      "bik",
      "kc",
      "pc",
      "legal_address", 
      "closeDoc",

    ],
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"resume"},
        {name:"Компания", value:"vacancies"},
      ],
      wrapClass: "col-5 account-item"
    },
    accountName: { 
      type:"text" ,
      name: "accountName", 
      label: "Название компании", 
      wrapClass: "col-5 account-item" ,
      validate: [required,minLength],
    },
    email: { 
      type:"text" ,
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      disabled: 0,
      wrapClass: "col-5 account-item"
    },
    site_company: { 
      type:"text",  
      name: "site_company", 
      label: "Сайт компании", 
      placeholder: "Доменное имя вашего сайта ",
      wrapClass: "col-5 col-offset-3  account-item"
    },
    num_workers: { 
      type:"text", 
      name: "num_workers", 
      label: "Количество сотрудников", 
      labelSecond:"(Указывается число сотрудников в цифровом эквиваленте)", 
      placeholder: "Введите цифру от 1", 
      typeField: "number",
      wrapClass: "col-12 account-item"
    },
    kpp: { 
      type:"text",
      name: "kpp", 
      label: "КПП компании", 
      placeholder: "Кпп",
      wrapClass: "col-12 account-item"  
    },
    inn_company: { 
      type:"text", 
      name: "inn_company", 
      label: "ИНН компании", 
      placeholder: "ИНН компании",
      wrapClass: "col-12 account-item", 
    },
    bank: { 
      type:"text",
      name: "bank", 
      label: "Банк", 
      placeholder: "Банк",
      wrapClass: "col-12 account-item" 
    },
    bik: { 
      type:"text", 
      name: "bik", 
      label: "БИК",
      placeholder: "БИК",
      wrapClass: "col-12 account-item" 
    },
    kc: { 
      type:"text", 
      name: "kc", 
      label: "К/С", 
      placeholder: "К/С",
      wrapClass: "col-12 account-item" 
      
    },
    pc: { 
      type:"text",  
      name: "pc", 
      label: "Р/С", 
      placeholder: "Р/С",
      wrapClass: "col-12 account-item", 
    },
    legal_address: { 
      type:"text", 
      name: "legal_address", 
      label: "Юридический адрес", 
      placeholder: "Юридический адрес",
      wrapClass: "col-12 account-item" 
    },
    description_company: { 
      type:"textarea", 
      name: "description_company", 
      label: "Краткое описание компании", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      maxLength: 500,
      wrapClass: "col-12 account-item"
    },
    how_get: { 
      type:"textarea", 
      name: "how_get", 
      label: "Как добраться до офиса", 
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
      maxLength: 500,
      wrapClass: "col-12 account-item"
    },
    
    closeDoc: { 
      type:"checkbox", 
      name: "closeDoc",
      label: "Закрывающие документы",
      options: [
        { label: 'По почте', value: 'to_mail' },
        { label: 'По электронной почте', value: 'to_email' },
        { label: 'Документы не нужны', value: 'not' }
      ],
      wrapClass: "col-12 account-item"
    },
    typeEmployer: { 
      type:"checkbox", 
      name: "typeEmployer", 
      label: "Тип работодателя", 
      options: [
        { label: 'Прямой работодатель', value: 'direct' },
        { label: 'Кадровое агентство', value: 'agency' }
      ] ,
      wrapClass: "col-5 account-item"
    }
      ,
    titleOne: {
      type:"title",
      label:"Основная информация",
      wrapClass: "col-12 account-item" 
      
    },
    titleTwo: {
      type:"title",
      label:"Реквизиты компании",
      wrapClass: "col-12 account-item" 
    },
    typeJob: {
      type: "list", 
      name: "typeJob", 
      label:"Тип компании", 
      options:[
        {label: "Бар", value:"type_1"},
        {label: "Вендинг", value:"type_2"},
        {label: "Винная", value:"type_3"},
        {label: "Винодельня", value:"type_4"},
        {label: "Гостиница", value:"type_5"},
        {label: "Кейтеринг", value:"type_6"},
        {label: "Кондитерская", value:"type_7"},
        {label: "Кофейня", value:"type_8"},
        {label: "Отель", value:"type_9"},
        {label: "Пекарня", value:"type_10"},
        {label: "Вендинг", value:"type_11"},
        {label: "Пивная", value:"type_12"},
        {label: "Пищевой завод", value:"type_13"},
        {label: "Пиццерия", value:"type_14"},
        {label: "Развлечения", value:"type_15"},
        {label: "Реклама", value:"type_16"},
        {label: "Ресторан", value:"type_17"},
        {label: "Сыроварня", value:"type_18"},
        {label: "Фаст Фуд", value:"type_19"},
        {label: "Франчайзинг", value:"type_20"},
        {label: "Частная ферма", value:"type_21"},
      ],
      wrapClass: "col-12 account-item"
    },
    phones: {
      type: "complex", 
      name: "phones", 
      label:"Телефоны компании",  
      wrapClass: "col-5 col-offset-3 account-item",
      btnAddText: "Добавить телефон",
      allFields: [
        { 
          type:"phone", 
          name: "phones", 
          wrapClass: "col-12" 
        },
      ],
    },
    legalNameCompany: {
      type: "multy", 
      mainname: "legalNameCompany", 
      label:"Юридическое наименование организации",  
      allFields: [
        { 
          type:"select", 
          name: "type",
          length: "col-6", 
          placeholder: "Общество с ограниченной ответственностью",
          options: [
            {label:"ООО", value:"type1"}, 
            {label:"ЗАО", value:"type2"}, 
            {label:"ОАО", value:"type3"}, 
            {label:"ИП", value:"type4"} ,
            {label:"УП", value:"type5"}  , 
            {label:"Общ. орг.", value:"type6"}  , 
            {label:"Некорм. орг.", value:"type7"}  , 
            {label:"Гос. уч.", value:"type8"}  , 
            {label:"АО", value:"type9"}  , 
            {label:"ПАО", value:"type10"}  , 
            
          ]
        },
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование компании", 
          length: "col-6" 
        },

      ],
      wrapClass: "col-12 account-item"
    },
    centralOffice: { 
      type: "multy", 
      mainname: "centralOffice", 
      label:"Центральный офис компании",  
      allFields: [
        { 
          type:"select", 
          name: "city",  
          length: "col-6", 
          placeholder: "Город",
          options: [
            {label:"Москва", value:"type1"}, 
            {label:"Санкт-Петербург", value:"type2"}, 
            {label:"Казань", value:"type3"}, 
            {label:"Сочи", value:"type4"}  , 
            {label:"Севастополь", value:"type5"}
          ]
        },
        { 
          name: "address",  
          type:"text", 
          placeholder: "Адрес: улица, дом, корпус, строение", 
          length: "col-6" 
        },
      ],
      wrapClass: "col-12 account-item"
    },
    imgsAccount: {
      type: "photo", 
      name: "imgsAccount", 
      label:"Фото профиля", 
      labelSecond:"(Изображение формата jpg,png не менее 150x150 px, не более 8Мб)", 
      typeFile: "img", 
      typeUpload:".png, .jpg, .jpeg", 
      maxSize: 5242880, 
      textEmpty: "На данный момент фоно не выбрано",
      wrapClass: "col-2 col-lg-3 col-sm-5 input-photo-container"
    },
    videoCompany: {
      type: "fileVideo",
      name: "videoCompany",
      label:"Загрузите видеоприветствие", 
      typeAccept: ".jpg, .jpeg, .png", 
      textEmpty:"На данный момент видео не выбрано",
      wrapClass: "col-12 account-item",
      maxSize: 104857600
    },
    typeCompany: {
      type: "select",
      name: "typeCompany", 
      label:"Тип компании",
      labelSecond:"выберете тип", 
      options: [
        {name:"ООО", value:"ooo"}, 
        {name:"ЗАО", value:"zao"} ,
        {name:"ИП", value:"ip"}
      ],
      wrapClass: "col-12 account-item"
    },
  }
}