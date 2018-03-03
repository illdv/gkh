import getSplitObj from './getSplitObj';

const calc = document.querySelector('#calc');
const displayCost = document.querySelectorAll('.costRes');
const displayLast = document.querySelectorAll('.lastMonth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');
const displayAll = document.querySelectorAll('.allRes');
const plan = document.querySelector('#plan');
const total = document.querySelector('#total');
const result = document.querySelector('#result');

const prices = {
  sink: 4,
  hot: 5,
  cold: 6,
  gas: 7,
  el: 8,
};

const lastMonth = {
  hot: 1,
  cold: 2,
  gas: 3,
  el: 4,
};

const currentMonth = {
  hot: 8,
  cold: 7,
  gas: 6,
  el: 5,
};

function displaying(nodes, objValue) {
  nodes.forEach((node, index) => {
    const span = document.createElement('span');
    span.textContent = getSplitObj(objValue)[index];
    node.appendChild(span);
  });
}
displaying(displayCost, prices);

displaying(displayLast, lastMonth);

displaying(displayCurrent, currentMonth);

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

displaying(displayDiff, calcDifference(lastMonth, currentMonth));

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
displaying(displayAll, calcTariff(objDiff, prices));

const calcTotal = tariff => getSplitObj(tariff).reduce((sum, value) => sum + value, 0);

const totalValue = calcTotal(objTariff);

total.textContent = totalValue;

plan.value = localStorage.plan;

class Data {
  constructor(hot, cold, gas, el, sink) {
    this.hot = hot;
    this.cold = cold;
    this.gas = gas;
    this.el = el;
    this.sink = sink;
  }
  createPrice() {
    const obj = {};
    obj.sink = this.sink;

    obj.hot = this.hot;
    obj.cold = this.cold;
    obj.gas = this.gas;
    obj.el = this.el;
    return obj;
  }
  create() {
    const obj = {};
    obj.hot = this.hot;
    obj.cold = this.cold;
    obj.gas = this.gas;
    obj.el = this.el;
    return obj;
  }
}
const arr = [];
const getDisplayCost = displayCost.forEach(cost => {
  arr.push(parseInt(cost.value, 10));
});

const price = new Data(...arr);
console.log(price.createPrice());

function countUp() {
  const planValue = parseInt(plan.value, 10);
  localStorage.setItem('plan', planValue);
  result.textContent = totalValue + planValue;
}
calc.addEventListener('click', countUp);
