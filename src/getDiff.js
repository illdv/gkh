const d = [];
export default (index, value) => {
  if (value) {
    d.push(value - +(localStorage.res.split(',')[index]));
  }
  return d[index];
};
