import declination from './declination';

const btnContent = (el, declinationMass, mainName) => {
  if (el.length > 0) {
    return 'Выбрано'+' '+el.length+' '+declination(el, declinationMass);
  } else {
    return mainName;
  }
}

export default btnContent;