const d = [];
export default (index, value) => {
  if (value) {
    d.push(value - +(localStorage.preRes.split(',')[index]));
  }
  return d[index];
};
