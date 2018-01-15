import { dateIn, d } from './output';

export default (index) => {
  const { value } = dateIn[index];
  d.push(value - +(localStorage.res.split(',')[index]));
  return d[index];
};
