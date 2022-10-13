const search = {
  name: '', 
  price_from: '', 
  price_to: '',
  gender: '',
  additional: [],
  age_from: '',
  age_to: '',
  exp_from: '',
  exp_to: '',
  specialization: [],
  specializationImg: [],
  industry: []
}

const  listingSearchReducer = (state=search, action) => {
  switch(action.type){
    case 'SEARCH_NAME_LISTING':
      return {...state, name: action.payload,}
    case 'SEARCH_PRICE_FROM_LISTING':
      return {...state, price_from: action.payload,}
    case 'SEARCH_PRICE_TO_LISTING':
      return {...state, price_to: action.payload,}
    case 'SEARCH_ADDITIONAL_TO_LISTING':
      return {...state, ...action.payload,}
    case "ADD_SPECIALIZATION":
      return {...state, specialization: [...state.specialization, action.payload]}
    case "REMOVE_SPECIALIZATION":
      return {...state, specialization: state.specialization.filter(el => el !== action.payload) }
    case "ADD_SPECIALIZATION_IMG":
      return {...state, specializationImg: [...state.specializationImg, action.payload]}
    case "REMOVE_SPECIALIZATION_ALL":
      return {...state, specialization: [],  specializationImg:[]}
    case "REMOVE_SPECIALIZATION_IMG":
      return {...state, specializationImg: state.specializationImg.filter(el => el !== action.payload) }
    case "ADD_INDUSTRY":
      return {...state, industry: [...state.industry, action.payload]}
    case "REMOVE_INDUSTRY":
      return {...state, industry: state.industry.filter(el => el !== action.payload) }
    case "REMOVE_INDUSTRY_ALL":
      return {...state, industry: [] }
    default:
      return state;
  }
}

export default listingSearchReducer;