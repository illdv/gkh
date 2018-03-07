import getSplitObj from './getSplitObj';
import { MouthData, PriceData } from './classData';
import * as domElements from './domElements';

let prices = JSON.parse(localStorage.getItem('prices')) || '';

let lastMonth = JSON.parse(localStorage.getItem('lastMonth')) || '';

let plan = localStorage.getItem('plan') || '';

function displaying(nodes, obj) {
  nodes.forEach((node, index) => {
    if (!obj) {
      node.value = '';
    } else {
      node.value = getSplitObj(obj)[index];
    }
  });
}
displaying(domElements.costs, prices);
displaying(domElements.lasts, lastMonth);
domElements.plan.value = plan;

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

const fl = (arr, storage) => arr.map((value, index) => (!value ? Object.values(storage)[index] : value));

const createObj = (displayed, storage) => {
  const arrValue = [...displayed].reduce((acc, elem) => acc.concat(elem.value), []);
  if (arrValue.length === 5) {
    return new PriceData(...arrValue);
  }
  return storage ? new MouthData(...fl(arrValue, storage)) : new MouthData(...arrValue);
};

function countUp() {
  prices = createObj(domElements.costs);
  lastMonth = createObj(domElements.lasts);
  const currentMonth = createObj(domElements.currents, lastMonth);
  plan = Number(Number(domElements.plan.value).toFixed(2));

  localStorage.setItem('prices', JSON.stringify(prices));
  localStorage.setItem('lastMonth', JSON.stringify(currentMonth));
  localStorage.setItem('plan', plan);

  displaying(domElements.diffs, calcDifference(lastMonth, currentMonth));
  displaying(domElements.tariffs, calcTariff(objDiff, prices));

  const totalValue = calcTotal(objTariff);
  domElements.total.textContent = totalValue;

  domElements.result.textContent = totalValue + plan;
}
domElements.calc.addEventListener('click', countUp);
