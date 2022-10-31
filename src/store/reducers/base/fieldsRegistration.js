import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: [
      "email",
      "password",
      "accountName",
      "typeCabinet"
    ],
    email: { 
      name: "email", 
      label: "Почта", 
      placeholder: "Почта", 
      type:"text" , 
      validate: [required,minLength,mailCheck],
      wrapClass: "form-line"
    },
    password: { 
      name: "password", 
      label: "Пароль",
      placeholder: "Введите пароль", 
      type:"password", 
      validate: [required,minLength],
      wrapClass: "form-line"
    },
    accountName: { 
      name: "accountName", 
      label: "Фио",
      placeholder: "Фио", 
      type:"text", 
      validate: [required,minLength],
      wrapClass: "form-line",
      nameChangingBool: true
    },
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"resume"},
        {name:"Компания", value:"vacancies"},
      ],
      wrapClass: "form-line",
      extraType: "change-label-reg"
    },
  }
}