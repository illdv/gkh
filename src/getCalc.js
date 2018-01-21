import getDiff from './getDiff';
import getPrice from './getPrice';
import input from './input';

const out = {};

export default () => {
  const r = [];
  const plan = Number(input.plan.value);
  const diff = [];
  const all = [];
  let total = 0;
  for (let i = 0; i < input.res.length; i += 1) {
    const { value } = input.res[i];
    total += Number(value);
    diff.push(getDiff(i, value));
    if (getPrice(i).length > 1) {
      const sink = getPrice(i)[1];
      out.sink = sink;
    }
    all.push(Number(getPrice(i)[0]));
    r.push(value);
  }
  out.diff = diff;
  out.all = all;
  out.total = total;
  out.result = plan + total;
  localStorage.preRes = r;
  return out;
};
