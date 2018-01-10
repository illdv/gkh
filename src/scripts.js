
const storage = () => {
  const preDate = document.getElementsByClassName('preDate');
  for (let i = 0; i < preDate.length; i += 1) {
    preDate[i].innerHTML = localStorage.res.split(',')[i];
  }
};
const res = [];
const d = [];
const dateIn = document.getElementsByClassName('dateIn');
const plan = document.getElementById('plan').value;
const diffRes = document.getElementsByClassName('diffRes');
const allRes = document.getElementsByClassName('allRes');

const getDiff = (index) => {
  const { value } = dateIn[index];
  res.push(value);
  d.push(value - +(localStorage.res.split(',')[index]));
  return d[index];
};

const price = (index) => {
  switch (index) {
    case 0:
      document.getElementById('sinkHot').innerHTML = d[index] * 17.00;
      return d[index] * 105.76;
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

const engine = () => {
  let total = 0;
  for (let i = 0; i < dateIn.length; i += 1) {
    diffRes[i].innerHTML = getDiff(i);
    allRes[i].innerHTML = price(i);
    total += price(i);
  }
  document.getElementById('total').innerHTML = total.toFixed(2);


  const result = plan + Number(total);
  document.getElementById('result').innerHTML = result;
  localStorage.res = res;
};

export default engine;
