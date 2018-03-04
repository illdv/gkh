import getSplitObj from './getSplitObj';
import { MouthData, PriceData } from './classData';

const calc = document.querySelector('#calc');
const displayCost = document.querySelectorAll('.costRes');
const displayLast = document.querySelectorAll('.lastMonth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');
const displayAll = document.querySelectorAll('.allRes');
const plan = document.querySelector('#plan');
const total = document.querySelector('#total');
const result = document.querySelector('#result');

const createObj = displayList => {
  const arrValue = [...displayList].reduce((acc, elem) => acc.concat(elem.value), []);
  if (arrValue.length === 5) {
    return new PriceData(...arrValue);
  }
  return new MouthData(...arrValue);
};

let prices = JSON.parse(localStorage.getItem('prices')) || '';

const lastMonth = JSON.parse(localStorage.getItem('lastMonth')) || '';

let currentMonth = JSON.parse(localStorage.getItem('currentMonth')) || '';

function displaying(nodes, obj) {
  nodes.forEach((node, index) => {
    if (obj === '') {
      node.value = '';
    } else {
      node.value = getSplitObj(obj)[index];
    }
  });
}
displaying(displayCost, prices);

displaying(displayLast, lastMonth);

const objDiff = {};
function calcDifference(last, current) {
  return getSplitObj(last).reduce((acc, lastValue, index) => {
    const currentValue = getSplitObj(current)[index];
    const currentKeys = getSplitObj(current, false)[index];
    const diff = currentValue - lastValue;
    console.log(diff);

    acc[currentKeys] = diff;
    return acc;
  }, objDiff);
}

const objTariff = {};
function calcTariff(diff, price) {
  return getSplitObj(price, false).reduce((acc, priceKey, index) => {
    let forTariff;
    const diffValue = getSplitObj(diff)[index];
    const priceValue = getSplitObj(price)[index];
    if (priceKey === 'sink') {
      forTariff = diffValue * priceValue;
    } else {
      forTariff = getSplitObj(diff)[index - 1] * priceValue;
    }
    acc[priceKey] = forTariff;
    return acc;
  }, objTariff);
}

const calcTotal = tariff => getSplitObj(tariff).reduce((sum, value) => sum + value, 0);

plan.value = localStorage.plan || '';

function countUp() {
  prices = createObj(displayCost);
  currentMonth = createObj(displayCurrent);

  localStorage.setItem('prices', JSON.stringify(prices));
  localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
  localStorage.setItem('lastMonth', JSON.stringify(currentMonth));

  const diff = calcDifference(lastMonth, currentMonth);

  displaying(displayDiff, diff);
  displaying(displayAll, calcTariff(objDiff, prices));
  const planValue = parseInt(plan.value, 10);
  localStorage.setItem('plan', planValue);

  const totalValue = calcTotal(objTariff);
  total.textContent = totalValue;

  result.textContent = totalValue + planValue;
}
calc.addEventListener('click', countUp);
