const storage = () => {
  const preDate = document.getElementsByClassName('preDate');
  for (let i = 0; i < preDate.length; i += 1) {
    preDate[i].innerHTML = localStorage.res.split(',')[i];
  }
};
const doyear = () => {
  let res = [];
  const dateIn = document.getElementsByClassName('dateIn');

  const fn = (resNum) => {
    const r = dateIn[resNum].value;
    res.push(r);
    const diff = res - +(localStorage.res.split(',')[resNum]);
    return diff;
  };

  document.getElementById('diffHot').innerHTML = fn(0);
  const sinkHot = fn(0) * 17.00;
  document.getElementById('sinkHot').innerHTML = sinkHot;
  const allHot = fn(0) * 105.76;
  document.getElementById('allHot').innerHTML = allHot;

  const cold = dateIn[1].value;
  const diffCold = cold - localStorage.cold;
  res.push(cold);
  document.getElementById('diffCold').innerHTML = diffCold;
  const allCold = diffCold * 33.50;
  document.getElementById('allCold').innerHTML = allCold;

  const gas = dateIn[2].value;
  const diffGas = cold - localStorage.gas;
  res.push(gas);
  document.getElementById('diffGas').innerHTML = diffGas;
  const allGas = diffGas * 5.85;
  document.getElementById('allGas').innerHTML = allGas;

  const el = dateIn[3].value;
  const diffEl = el - localStorage.el;
  res.push(el);
  localStorage.res = res;
  document.getElementById('diffEl').innerHTML = diffEl;
  const allEl = diffEl * 3.74;
  document.getElementById('allEl').innerHTML = allEl;

  const plan = dateIn[4].value;
  const total = (allCold + allHot + sinkHot + allEl + allGas).toFixed(2);
  document.getElementById('total').innerHTML = total;
  const result = plan + Number(total);
  document.getElementById('result').innerHTML = result;
};
