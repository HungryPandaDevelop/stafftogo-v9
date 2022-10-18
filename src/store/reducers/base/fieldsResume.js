export default function(){
  return {
    order: [
      "titleOne",
      "card_name",
      "salary",
      "coords",
      "industry",
      "typeSpecialization",
      "titleTwo",
      "companyWork",
      "companyWorkComplex",
      "titleThree",
      "education",
      "institution",
      "lang",
      "titleFour",
      "employment",
      "work_time",
      "car_exp",
      "additional",
    ],
    card_name:{
      type:"text", 
      name: "card_name",  
      placeholder: "Желаемая должность", 
      label:"Желаемая должность", 
      wrapClass: "col-12 account-item"
    },
    salary: { 
      type: "multy", 
      mainname: "salary", 
      label:"Зарплата",  
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "priceFrom",  
          placeholder: "От", 
          length: "col-6"
        },
        { 
          type:"select", 
          name: "priceType",  
          length: "col-6",
          placeholder:"Руб./мес.",
          options: [
            {name:"Руб./Смена", value:"type1"}, 
            {name:"Руб./Час", value:"type2"}, 
            {name:"За проект", value:"type3"}, 
          ]
        },
      ],
    },
    coords: { 
      type:"coords", 
      name: "coords",  
      placeholder: "Адрес", 
      label: "Адрес",
      wrapClass: "col-12 account-item",

    },
    titleOne: {
      type:"title",
      label:"Основная информация", 
      wrapClass: 'col-12 account-item'
    },
    titleTwo: {
      type:"title",
      label:"Сведения о работе", 
      wrapClass: "col-12 account-item",
    },
    titleThree: {
      type:"title",
      label:"Образование", 
      wrapClass: "col-12 account-item",
    },
    titleFour: {
      type:"title",
      label:"Дополнительно", 
      wrapClass: "col-12 account-item",
    },
    industry: {
      type: "list", 
      name: "industry", 
      label:"В какой сфере вы хотите работать?", 
      wrapClass: "col-12 account-item",
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
      ]
    },
    typeSpecialization: {
      type: "list", 
      name: "specialization", 
      label:"Специализация сотрудника?", 
      wrapClass: "col-12 account-item",
      options:[
        {label: "Администратор", value:"spec_1"},
        {label: "Водитель", value:"spec_2"},
        {label: "Горничная", value:"spec_3"},
        {label: "Диджей", value:"spec_4"},
      ]
    },

    companyWork: {
      type: "multy", 
      mainname: "companyWork", 
      label:"Организация",  
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование организации", 
          length: "col-6 account-item" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Должность account-item",
          length: "col-6" 
        },
        { 
          type:"textarea", 
          name: "work", 
          placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
          maxLength: 500,
          length: "col-12 account-item" 
        },
      ],
    },
    companyWorkComplex: {
      type: "complex", 
      name: "companyWorkComplex", 
      label:"Организация",  
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование организации", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Должность",
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "work", 
          placeholder: "Введите не более 500 символов (символы перестанут печататься, когда вы превысите лимит)", 
          maxLength: 500,
          length: "col-12" 
        },
      ],
    },
    lang: {
      type: "additional", 
      name: "lang", 
      label:"Владение языками", 
      btnTextAdd:"+ Добавить язык", 
      wrapClass: "col-12 account-item",
      typeInner: "text"
    },
    education: { 
      type:"checkbox", 
      name: "typeEducation",
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
    institution: {
      type: "multy", 
      mainname: "institution", 
      label:"Учебное заведение",  
      wrapClass: "col-12 account-item",
      allFields: [
        { 
          type:"text", 
          name: "name", 
          placeholder: "Наименование учебного заведения", 
          length: "col-6" 
        },
        { 
          type:"text", 
          name: "type", 
          placeholder: "Факультет",
          length: "col-6 account-item" 
        },
        { 
          type:"text", 
          name: "special", 
          placeholder: "Специализация",
          length: "col-6 account-item" 
        },
        { 
          type:"text", 
          name: "year", 
          placeholder: "Год окончания",
          length: "col-6 account-item" 
        },
      ],
    },

    employment: { 
      type:"select", 
      name: "employment", 
      label: "Занятость", 
      placeholder: "Занятость", 
      wrapClass: "col-12 account-item",
      options:[
        {name: "Полная", value:"type_1"},
        {name: "Частичная", value:"type_2"},
        {name: "Волонтерство", value:"type_3"},
        {name: "Стажировка", value:"type_4"},
        {name: "Подработка", value:"type_5"},
      ]
    },
    work_time: { 
      type:"select", 
      name: "work_time", 
      label: "График работы", 
      placeholder: "График работы", 
      wrapClass: "col-12 account-item",
      options:[
        {name: "Полный день", value:"type_1"},
        {name: "Сменый график", value:"type_2"},
        {name: "Гибкий график", value:"type_3"},
        {name: "Вахтовый метод", value:"type_4"},
        {name: "Удаленная работа", value:"type_5"},
      ]
    },
    car_exp: { 
      type: "select", 
      name: "car_exp", 
      label: "Опыт вождения", 
      placeholder: "Опыт вождения", 
      wrapClass: "col-12 account-item",
      options:[
        {name: "A", value:"type_1"},
        {name: "B", value:"type_2"},
        {name: "C", value:"type_3"},
        {name: "D", value:"type_4"},
        {name: "E", value:"type_5"},
      ]
    },    
    additional: {
      type:"checkbox", 
      name: "additional",
      wrapClass: "col-12 account-item",
      options: [
        { label: 'Есть ИП/Самозанятый', value: 'type_1' },
        { label: 'Медицинская книжка', value: 'type_2' },
        { label: 'Готовность к командировкам', value: 'type_3' },
        { label: 'Готовность работать ночью', value: 'type_4' },
        { label: 'Срочный выезд', value: 'type_5' },
        { label: 'Разрешение на работу в России', value: 'type_6' },
        { label: 'Гражданство РФ', value: 'type_6' },
      ] 
    },
  }
}