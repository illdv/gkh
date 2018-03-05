import getSplitObj from './getSplitObj';
import { MouthData, PriceData } from './classData';

const calc = document.querySelector('#calc');
export const displayCost = document.querySelectorAll('.costRes');
export const displayLast = document.querySelectorAll('.lastMonth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');
const displayAll = document.querySelectorAll('.allRes');
export const displayPlan = document.querySelector('#plan');
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

let lastMonth = JSON.parse(localStorage.getItem('lastMonth')) || '';

let currentMonth = JSON.parse(localStorage.getItem('currentMonth')) || '';

let plan = JSON.parse(localStorage.getItem('plan')) || '';

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
displayPlan.value = plan;
const objDiff = {};
function calcDifference(last, current) {
  return getSplitObj(last).reduce((acc, lastValue, index) => {
    const currentValue = getSplitObj(current)[index];
    const currentKeys = getSplitObj(current, false)[index];
    const diff = currentValue - lastValue;
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
      forTariff = Number(Number(diffValue * priceValue).toFixed(2));
    } else {
      forTariff = Number(Number(getSplitObj(diff)[index - 1] * priceValue).toFixed(2));
    }
    acc[priceKey] = forTariff;
    return acc;
  }, objTariff);
}

const calcTotal = tariff => getSplitObj(tariff).reduce((sum, value) => sum + value, 0);

function countUp() {
  prices = createObj(displayCost);
  currentMonth = createObj(displayCurrent);
  lastMonth = createObj(displayLast);
  plan = Number(Number(displayPlan.value).toFixed(2));

  localStorage.setItem('prices', JSON.stringify(prices));
  localStorage.setItem('currentMonth', JSON.stringify(currentMonth));
  localStorage.setItem('lastMonth', JSON.stringify(currentMonth));
  localStorage.setItem('plan', JSON.stringify(plan));

  displaying(displayDiff, calcDifference(lastMonth, currentMonth));
  displaying(displayAll, calcTariff(objDiff, prices));

  const totalValue = calcTotal(objTariff);
  total.textContent = totalValue;

  result.textContent = totalValue + plan;
}
calc.addEventListener('click', countUp);
