
export default function(){
  return {
    order: ["additional","exp_work"],
    exp_work: { 
      type:"text" ,
      name: "exp_work", 
      label: "Общий стаж работы", 
      placeholder: "Общий стаж работы", 
      
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
      ] 
    },
    // message: { name: "message", label: "Сообщение", placeholder: "Напишите сообщение... ", type:"textarea",validate: [required,minLength]  },
  }
}