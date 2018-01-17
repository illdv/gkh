import getDiff from './getDiff';
import getPrice from './getPrice';
import input from './input';


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

localStorage.res = res;

export default {
  diff,
  all,
  total: Number(total.toFixed(2)),
  result: plan + total,
};
