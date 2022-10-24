import moment from 'moment';

const getBirth = (item)=>{
  const dateFrom = new Date(item);
  const dateNow = new Date();
 return moment(dateNow).diff(dateFrom, 'year');
}

export default getBirth;