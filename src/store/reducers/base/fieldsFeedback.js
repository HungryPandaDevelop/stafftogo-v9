import { required, minLength,mailCheck } from 'components/forms/validator';

export default function(){
  return {
    order: ["f","n","o","phone","email","commets","agreement"],
    f: { 
      name: "f", 
      placeholder: "Фамилия", 
      type:"text",
      validate: [required,minLength],
      wrapClass: "col-4 col-xs-12 form-line"

    },
    n: { 
      name: "n", 
      placeholder: "Имя", 
      type:"text",
      validate: [required,minLength],
      wrapClass: "col-4 col-xs-12 form-line" 
    },
    o: { 
      name: "o", 
      placeholder: "Отчество", 
      type:"text",
      validate: [required,minLength],
      wrapClass: "col-4 col-xs-12 form-line"
    },
    phone: { 
      type:"phone" ,
      name: "phone", 
      placeholder: "Телефон",
      wrapClass: "col-6 col-xs-12 form-line"
    },
    email: { 
      name: "email", 
      placeholder: "Почта", 
      type:"text", 
      validate: [required,minLength,mailCheck],
      wrapClass: "col-6 col-xs-12 form-line"
    },
    commets: { 
      type:"textarea", 
      name: "commets", 
      placeholder: "Комментарий", 
      maxLength: 500,
      wrapClass: "col-12 "
    },
    agreement: { 
      type:"checkbox", 
      name: "agreement",
      options: [
        { 
          label: 'Я даю свое согласие на обработку персональных данных', 
          value: 'agreement_on',
          checked: 1,
          disabled: 1
        },
      ],
      validate: [required],
      wrapClass: "col-12  form-line"
    },
  }
}