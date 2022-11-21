export default function(){
  return {
    order: [
      "activeCards",
      "titleOne",
      "card_name",
      "requirements",
      "terms",
      "salary",
      "extraWorkType",
      "coords",
      "typeSpecialist",
      "titleTwo",
      "responsibilities",
      "titleThree",
      "education",
      "wetake",


    ],
    coords: { 
      type:"coords", 
      name: "coords",  
      placeholder: "Адрес", 
      label: "Адрес",
      wrapClass: "col-12 account-item",
    },
    card_name:{
      type:"text", 
      name: "card_name",  
      placeholder: "Желаемая должность", 
      label:"Желаемая должность", 
      wrapClass: "col-12 account-item"
    },
    requirements:{
      type:"textarea", 
      name: "requirements",  
      placeholder: "Желаемые требования", 
      label:"Желаемые требования", 
      wrapClass: "col-6 account-item"
    },
    terms:{
      type:"textarea", 
      name: "terms",  
      placeholder: "Желаемые условия", 
      label:"Желаемые условия", 
      wrapClass: "col-6 account-item"
    },
    responsibilities: { 
      type:"textarea", 
      name: "responsibilities",  
      label: "Основные обязанности",
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)",
      wrapClass: "col-12 account-item", 
    },
    typeSpecialist: { 
      type:"radio", 
      name: "typeSpecialist", 
      options: [
        { label: 'Мне нужен один специалист', value: 'one_spec' },
        { label: 'Мне нужна команда', value: 'multy_spec' }
      ],
      wrapClass: "col-12 account-item",
    },
    extraWorkType: {
      type: "complex", 
      name: "extraWorkType", 
      wrapClass: "col-12 account-item",
      btnAddText: "Добавить",
      label:"Дополнительные условия занятости",
      allFields: [
        { 
          type:"text", 
          name: "price",  
          placeholder: "Желаемая зарплата", 
          wrapClass: "col-6"
        },
        { 
          type:"select", 
          name: "priceType",  
          wrapClass: "col-6",
          placeholder:"Тип оплаты",
          options: [
            {label:"Руб./Смена", value:"type1"}, 
            {label:"Руб./Час", value:"type2"}, 
            {label:"Руб./Месяц", value:"type3"}, 
            {label:"За проект", value:"type4"}, 
          ]
        },
        { 
          type:"select", 
          name: "employment", 
          placeholder: "Занятость", 
          wrapClass: "col-6",
          options:[
            {label: "Полная", value:"type_1"},
            {label: "Частичная", value:"type_2"},
            {label: "Волонтерство", value:"type_3"},
            {label: "Стажировка", value:"type_4"},
            {label: "Подработка", value:"type_5"},
          ]
        },
        { 
          type:"select", 
          name: "worktype", 
          placeholder: "Тип работы", 
          wrapClass: "col-6" ,
          options:[
            {label: "Постоянная работа", value:"type_1"},
            {label: "Ночная работы", value:"type_2"},
            {label: "Сдельная работа / Подмена", value:"type_3"},
            {label: "Срочная работа", value:"type_4"},
            {label: "Фриланс", value:"type_5"},
          ]
        },

      ],
    },
    settings: {
      type: "checkbox", 
      name: "settings", 
      options:[
        {label: "Включить автоподбор резюме", value:"type_1"},
        {label: "Разместить вакансию анаонимно (скрыть название компании)", value:"type_2"},
      ],
      wrapClass: "col-12 account-item",
    },
    salary: { 
      type: "multy", 
      mainname: "salary", 
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "price",  
          label:"Зарплата",  
          placeholder: "Укажите сумму", 
          length: "col-6 account-item"
        },
        { 
          type:"select", 
          name: "priceType",  
          length: "col-6  account-item",
          label:"Тип оплаты",  
          placeholder:"Тип оплат",
          options: [
            {label:"Руб./Смена", value:"type1"}, 
            {label:"Руб./Час", value:"type2"}, 
            {label:"Руб./Месяц", value:"type3"}, 
            {label:"За проект", value:"type4"}, 
          ]
        },
        { 
          type:"select", 
          name: "worktype",  
          length: "col-6 ",
          label:"Тип работы",
          placeholder:"Выберете тип работы",
          options: [
            {label: "Постоянная работа", value:"type_1"},
            {label: "Ночная работы", value:"type_2"},
            {label: "Сдельная работа / Подмена", value:"type_3"},
            {label: "Срочная работа", value:"type_4"},
            {label: "Фриланс", value:"type_5"},
          ]
        },
        { 
          type:"select", 
          name: "worktime",  
          length: "col-6",
          label:"Тип занятости",
          placeholder:"Выберете тип занятости",
          options: [
            {label: "Полная", value:"type_1"},
            {label: "Частичная", value:"type_2"},
            {label: "Волонтерство", value:"type_3"},
            {label: "Стажировка", value:"type_4"},
            {label: "Подработка", value:"type_5"},
          ]
        },
      ],
    },

    wetake:{
      type:"checkbox", 
      name: "wetake", 
      label:"Рассматриваем на вакансию всех, в том числе",
      options: [
        { label: 'Пенсионеров', value: 'type1' },
        { label: 'Соискателей с инвалидностью', value: 'type2' },
        { label: 'Студентов', value: 'type3' },
        { label: 'Иностранных граждан (мигрантов)', value: 'type4' },
      ],
      wrapClass: "col-12 account-item", 
    },
    rubric: {
      type: "select", 
      name: "rubric",
      label:"Рубрика", 
      placeholder:"Выбрать",
      options: [
        {label: "Бар", value:"type_1"},
        {label: "Вендинг", value:"type_2"},
        {label: "Винная", value:"type_3"},
        {label: "Винодельня", value:"type_4"},
        {label: "Гостиница", value:"type_5"},
        {label: "Кейтеринг", value:"type_6"},
        {label: "Кондитерская", value:"type_7"},
        {label: "Кофейня", value:"type_8"},
        {label: "Отель", value:"type_9"},
      ],
      wrapClass: "col-12 account-item", 
    },
    education: { 
      type:"select", 
      name: "education",
      label:"Уровень", 
      placeholder: "Выбрать образование",
      wrapClass: "col-12 account-item",
      options: [
        { label: 'Среднее', value: 'type1' },
        { label: 'Неоконченное высшее', value: 'type2' },
        { label: 'Бакалавр', value: 'type3' },
        { label: 'Средне специальное', value: 'type4' },
        { label: 'Высшее', value: 'type5' },
        { label: 'Магистр', value: 'type6' },
      ] 
    },
    region: {
      type: "select", 
      name: "region",
      label:"Регион показа", 
      placeholder:"Москва",
      options: [
        {label:"Москва", value:"type1"}, 
        {label:"Санкт-Петербург", value:"type2"}, 
        {label:"Казань", value:"type3"}, 
        {label:"Сочи", value:"type4"}  , 
        {label:"Севастополь", value:"type5"}
      ],
      wrapClass: "col-12 account-item",
    },
    titleOne: {
      type:"title",
      label:"Основная информация",
      wrapClass: "col-12 account-item", 
    },
    titleTwo: {
      type:"title",
      label:"Обязанности",
      wrapClass: "col-12 account-item", 

    },
    titleThree: {
      type:"title",
      label:"Образование",
      wrapClass: "col-12 account-item",
      
    },
    titleFour: {
      type:"title",
      label:"Настройка публикации вакансии",
      wrapClass: "col-12 account-item", 
    },
    activeCards: {
      type:"switch",
      name: "activeCards", 
      label: "Статус", 
      options: [
        {name:"Активно",value:"on"},
        {name:"Не активно", value:"off"},
      ],
      wrapClass: "col-12 account-item"
    },
  
  }
}