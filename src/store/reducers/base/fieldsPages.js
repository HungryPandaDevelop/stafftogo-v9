export default function(){
  return {
    order: [
      "id",
      "link",
      "title",
      "content",
      "img",
      "menuPlace",
      "num",
    ],
    id: { 
      type:"text" ,
      label:"id",
      name: "id", 
      placeholder: "id", 
      wrapClass: "col-12"
    },
    link: { 
      type:"text", 
      label:"link",
      name: "link", 
      placeholder: "link", 
      wrapClass: "col-12"
    },
    title: { 
      type:"text", 
      label:"title",
      name: "title", 
      placeholder: "title", 
      wrapClass: "col-12"
    },
    content: { 
      type:"text", 
      label:"content",
      name: "content", 
      placeholder: "content", 
      wrapClass: "col-12"
    },
    img: { 
      type:"file", 
      label:"img",
      name: "img", 
      typeAccept: "jpg, png", 
      wrapClass: "col-12"
    },
    menuPlace: { 
      type:"text", 
      label:"menuPlace",
      name: "menuPlace", 
      placeholder: "menuPlace", 
      wrapClass: "col-12"
    },
    num: { 
      type:"text", 
      label:"num",
      name: "num", 
      placeholder: "num", 
      wrapClass: "col-12"
    },
  }
}

