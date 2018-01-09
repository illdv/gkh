const storage = () => {
  const preDate = document.getElementsByClassName('preDate');
  for (let i = 0; i < preDate.length; i += 1) {
    preDate[i].innerHTML = localStorage.res.split(',')[i];
  }
};
export const fn = num => num * 3;
export const fn2 = num => num * 2;
const engine = () => {
  const res = [];
  const dateIn = document.getElementsByClassName('dateIn');
  const diffRes = document.getElementsByClassName('diffRes');
  const allRes = document.getElementsByClassName('allRes');

  const diff = (resNum) => {
    const { value } = dateIn[resNum];
    res.push(value);
    const d = value - +(localStorage.res.split(',')[resNum]);
    return d;
  };

  let total = 0;
  for (let i = 0; i < dateIn.length; i += 1) {
    const el = diff(i);
    const price = (element) => {
      switch (element) {
        case 0:
          document.getElementById('sinkHot').innerHTML = el * 17.00;
          return el * 105.76;
        case 1:
          return el * 33.50;
        case 2:
          return element * 5.85;
        case 3:
          return el * 3.74;
        default:
          return alert('incorrect value');
      }
    };
    diffRes[i].innerHTML = el;
    allRes[i].innerHTML = price(i);
    total += price(i);
  }
  document.getElementById('total').innerHTML = total.toFixed(2);
  localStorage.res = res;
  const plan = document.getElementById('plan').value;
  const result = plan + Number(total);
  document.getElementById('result').innerHTML = result;
};
