export default function(){
  return {
    order: [
      "pricefrom",
      "priceto",
    ],
    pricefrom: { 
      type:"text" ,
      name: "pricefrom", 
      placeholder: "От", 
      wrapClass: "col-6 col-xs-12"
    },
    priceto: { 
      type:"text", 
      name: "priceto", 
      placeholder: "До", 
      wrapClass: "col-6 col-xs-12"
    },
  }
}