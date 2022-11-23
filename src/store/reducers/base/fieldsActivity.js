export default function(){
  return {
    order: [
      "name",
      "type"
    ],
    name:{
      type:"text", 
      name: "name",  
      placeholder: "name", 
      label:"name", 
      wrapClass: "col-12 account-item"
    },
    type:{
      type:"text", 
      name: "type",  
      placeholder: "type", 
      label:"type", 
      wrapClass: "col-12 account-item"
    },

  }
}