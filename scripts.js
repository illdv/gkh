const storage = () => {
  const preDate = document.getElementsByClassName('preDate');
  for (let i = 0; i < preDate.length; i += 1) {
    preDate[i].innerHTML = localStorage.res.split(',')[i];
  }
};
const doyear = () => {
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
  const price = (element) => {
    if (element === 0) {
      return diff(0) * 105.76;
    } else if (element === 1) {
      return diff(1) * 33.50;
    } else if (element === 2) {
      return diff(2) * 5.85;
    } else if (element === 3) {
      return diff(3) * 3.74;
    }
  };
  let total = 0;
  for (let i = 0; i < dateIn.length; i += 1) {
    const el = diff(i);
    if (i === 0) {
      document.getElementById('sinkHot').innerHTML = el * 17.00;
    }
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
