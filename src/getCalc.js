import out from './output';
import getDiff from './getDiff';
import getPrice from './getPrice';
import input from './input';

export default () => {
  const res = [];
  const plan = document.getElementById('plan').value;
  const diff = [];
  const all = [];
  let total = 0;
  for (let i = 0; i < input.length; i += 1) {
    total += Number(input[i].value);
    diff.push(getDiff(i, input[i].value));
    all.push(Number(getPrice(i).toFixed(2)));
    res.push(input[i].value);
  }
  out.diff = diff;
  out.all = all;
  out.total = Number(total.toFixed(2));
  out.result = plan + total;
  localStorage.res = res;
  return out;
};
