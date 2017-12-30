const storage = () => {
  const preDate = document.getElementsByClassName('preDate');
  for (let i = 0; i < preDate.length; i += 1) {
    preDate[i].innerHTML = localStorage.res.split(',')[i];
  }
};
const doyear = () => {
  const res = [];
  const dateIn = document.getElementsByClassName('dateIn');

  const fn = (resNum) => {
    const { value } = dateIn[resNum];
    res.push(value);
    const diff = value - +(localStorage.res.split(',')[resNum]);
    return diff;
  };
  const hot = fn(0);
  document.getElementById('diffHot').innerHTML = hot;
  const sinkHot = hot * 17.00;
  document.getElementById('sinkHot').innerHTML = sinkHot;
  const allHot = hot * 105.76;
  document.getElementById('allHot').innerHTML = allHot;

  const cold = fn(1);
  document.getElementById('diffCold').innerHTML = cold;
  const allCold = cold * 33.50;
  document.getElementById('allCold').innerHTML = allCold;

  const gas = fn(2);
  document.getElementById('diffGas').innerHTML = gas;
  const allGas = gas * 5.85;
  document.getElementById('allGas').innerHTML = allGas;

  const el = fn(3);
  document.getElementById('diffEl').innerHTML = el;
  const allEl = el * 3.74;
  document.getElementById('allEl').innerHTML = allEl;

  localStorage.res = res;
  const plan = document.getElementById('plan').value;
  const total = (allCold + allHot + sinkHot + allEl + allGas).toFixed(2);
  document.getElementById('total').innerHTML = total;
  const result = plan + Number(total);
  document.getElementById('result').innerHTML = result;
};
