import { required, minLength } from 'components/forms/validator';

export default function(){
  return {
    order: ["grade","reviews",],
    grade: { 
      name: "grade", 
      placeholder: "Оценка... ", 
      type:"star",
      wrapClass: "form-line",
    },
    reviews: { 
      name: "reviews", 
      placeholder: "Напишите Отзыв... ", 
      type:"textarea",
      wrapClass: "form-line",
    },
  }
}