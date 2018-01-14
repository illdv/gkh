
const res = [];
const d = [];
const dateIn = document.getElementsByClassName('dateIn');
const diffRes = document.getElementsByClassName('diffRes');
const allRes = document.getElementsByClassName('allRes');
const plan = document.getElementById('plan');

const getDiff = (index) => {
  const { value } = dateIn[index];
  res.push(value);
  d.push(value - +(localStorage.res.split(',')[index]));
  return d[index];
};

const out = {};
const price = (index) => {
  switch (index) {
    case 0: {
      const sink = d[index] * 17.00;
      out.sink = sink;
      return (d[index] * 105.76) + sink;
    }
    case 1:
      return d[index] * 33.50;
    case 2:
      return d[index] * 5.85;
    case 3:
      return d[index] * 3.74;
    default:
      return alert('incorrect value');
  }
};

const engine = (data, pl) => {
  const diff = [];
  const all = [];
  let total = 0;
  for (let i = 0; i < data.length; i += 1) {
    total += Number(data[i].value);
    diff.push(getDiff(i));
    all.push(Number(price(i).toFixed(2)));
  }
  out.diff = diff;
  out.total = Number(total.toFixed(2));
  out.all = all;
  out.result = pl + total;
  return out;
};

const output = () => {
  engine(dateIn, Number(plan.value));
  for (let i = 0; i < dateIn.length; i += 1) {
    diffRes[i].innerHTML = out.diff[i];
    allRes[i].innerHTML = out.all[i];
  }
  document.getElementById('sinkHot').innerHTML = out.sink;
  document.getElementById('total').innerHTML = out.total;
  document.getElementById('result').innerHTML = out.result;
  localStorage.res = res;
};

export default engine;
