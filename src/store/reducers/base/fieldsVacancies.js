export default function(){
  return {
    order: [
      "activeCards",
      "titleOne",
      "card_name",
      "salary",
      "coords",
      "typeWork",
      "typeSpecialist",
      "titleTwo",
      "responsibilities",
      "titleThree",
      "education",
      "institution",
      "wetake",
      "titleFour",
      "rubric",
      "region",
      "settings"
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
    responsibilities: { 
      type:"textarea", 
      name: "responsibilities",  
      label: "Основные обязанности",
      placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)",
      wrapClass: "col-12 account-item", 
    },
    typeSpecialist: { 
      type:"checkbox", 
      name: "typeSpecialist", 
      options: [
        { label: 'Мне нужен один специалист', value: 'one_spec' },
        { label: 'Мне нужна команда', value: 'multy_spec' }
      ],
      wrapClass: "col-12 account-item",
    },
    typeWork: {
      type: "checkbox", 
      name: "typeWork", 
      label:"Тип работы", 
      options:[
        {label: "Постоянная работа", value:"type_1"},
        {label: "Ночная работа", value:"type_2"},
        {label: "Сдельная работа/Подмена", value:"type_3"},
        {label: "Срочная работа", value:"type_4"},
        {label: "Консалтинг", value:"type_5"},
        {label: "Фриланс", value:"type_6"},
      ],
      wrapClass: "col-12 account-item",
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
      label:"Зарплата",  
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "price",  
          placeholder: "Укажите сумму", 
          length: "col-6"
        },
        { 
          type:"select", 
          name: "worktime",  
          length: "col-6",
          placeholder:"Выберете занятость",
          options: [
            {label: "Полный день", value:"type_1"},
            {label: "Сменный график", value:"type_2"},
            {label: "Гибкий график", value:"type_3"},
            {label: "Вахтовый метод", value:"type_4"},
            {label: "Удаленая работа", value:"type_5"},
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
    institution: {
      type: "complex", 
      name: "institution", 
      label: "Место образование",
      wrapClass: "col-12 account-item",
      btnAddText: "Добавить место обучения",
      allFields: [
        { 
          type:"text", 
          name: "place", 
          placeholder: "Учебное заведение", 
          wrapClass: "col-6" 
        },
        { 
          type:"text", 
          name: "faculty", 
          placeholder: "Факультет",
          wrapClass: "col-6" 
        },
        { 
          type:"text", 
          name: "specialization", 
          placeholder: "Специализация", 
          wrapClass: "col-6" 
        },
        { 
          type:"date", 
          name: "dateEnd", 
          placeholder: "Год окончания", 
          maxLength: 500,
          wrapClass: "col-6" 
        },

      ],
    },
  }
}