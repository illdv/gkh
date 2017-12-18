localStorage.hot;
localStorage.cold;
localStorage.gas;
localStorage.el;
const storage = () => {
  document.getElementById('preHot').innerHTML = localStorage.hot;
  document.getElementById('preCold').innerHTML = localStorage.cold;
  document.getElementById('preGas').innerHTML = localStorage.gas;
  document.getElementById('preEl').innerHTML = localStorage.el;
};
const doyear = () => {
  const dateIn = document.getElementsByClassName('dateIn');
  const hot = dateIn[0].value;
  const diffHot = hot - localStorage.hot;
  localStorage.hot = hot;
  document.getElementById('diffHot').innerHTML = diffHot;
  const sinkHot = diffHot * 17.00;
  document.getElementById('sinkHot').innerHTML = sinkHot;
  const allHot = diffHot * 105.76;
  document.getElementById('allHot').innerHTML = allHot;

  const cold = dateIn[1].value;
  const diffCold = cold - localStorage.cold;
  localStorage.cold = cold;
  document.getElementById('diffCold').innerHTML = diffCold;
  const allCold = diffCold * 33.50;
  document.getElementById('allCold').innerHTML = allCold;

  const gas = dateIn[2].value;
  const diffGas = cold - localStorage.gas;
  localStorage.gas = gas;
  document.getElementById('diffGas').innerHTML = diffGas;
  const allGas = diffGas * 5.85;
  document.getElementById('allGas').innerHTML = allGas;

  const el = dateIn[3].value;
  const diffEl = el - localStorage.el;
  localStorage.el = el;
  document.getElementById('diffEl').innerHTML = diffEl;
  const allEl = diffEl * 3.74;
  document.getElementById('allEl').innerHTML = allEl;

  const plan = dateIn[4].value;
  console.log(plan);
  const total = (allCold + allHot + sinkHot + allEl + allGas).toFixed(2);
  document.getElementById('total').innerHTML = total;
  const result = plan + Number(total);
  document.getElementById('result').innerHTML = result;
};
