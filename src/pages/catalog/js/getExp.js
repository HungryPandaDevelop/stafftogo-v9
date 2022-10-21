import moment from 'moment';

const getExp = (el)=>{

  let diffAll = 0;
  el.companyWorkComplex.forEach(item => {
    const dateFrom = new Date(item.workfrom);
    const dateTo = new Date(item.workto);
    const diffSingle = moment(dateTo).diff(dateFrom, 'month');
    diffAll = diffSingle + diffAll;
  });

  const yearAll = Math.floor(diffAll / 12);
  const monthAll = diffAll - (yearAll * 12)

  return [yearAll,monthAll];
}

export default getExp;