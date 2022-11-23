export default function(){
  return {
    order: [
      "name",
      "type",
      "imgFront",
      "imgBack",
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
    imgFront: {
      type: "file", 
      name: "imgFront", 
      label:"img front", 
      maxSize: 1000000, 
      textEmpty: "На данный момент imgFront не выбрано",
      wrapClass: "col-12  account-item",
      nameFolder: 'specialization',
      typeUpload:".png, .jpg, .jpeg, .svg", 
    },
    imgBack: {
      type: "file", 
      name: "imgBack", 
      label:"img imgBack", 
      maxSize: 1000000, 
      textEmpty: "На данный момент imgBack не выбрано",
      wrapClass: "col-12  account-item",
      nameFolder: 'specialization',
      typeUpload:".png, .jpg, .jpeg, .svg", 
    },
  }
}