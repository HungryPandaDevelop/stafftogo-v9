import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: ["name","email","password","typeCabinet"],
    name: { 
      name: "name", 
      label: "Имя пользователя", 
      placeholder: "Имя пользователя", 
      type:"text",
      validate: [required,minLength] ,
      wrapClass: "form-line"
    },
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
    typeCabinet: {
      type:"switch",
      name: "typeCabinet", 
      label: "Тип кабинета", 
      options: [
        {name:"Соискатель",value:"resume"},
        {name:"Компания", value:"vacancies"},
      ],
      wrapClass: "form-line"
    },
  }
}