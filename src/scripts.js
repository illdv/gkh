const calc = document.querySelector('#calc');
const displayCost = document.querySelectorAll('.costRes');
const displayLast = document.querySelectorAll('.lastMounth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');
const displayAll = document.querySelectorAll('.allRes');
const plan = document.querySelector('#plan');
const total = document.querySelector('#total');
const result = document.querySelector('#result');

const planValue = 100;

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

function getSplitObj(prop, value = true) {
  if (!value) {
    return Object.keys(prop);
  }
  return Object.values(prop);
}

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

plan.textContent = planValue;

const calcTotal = tariff => getSplitObj(tariff).reduce((sum, value) => sum + value, 0);

const totalValue = calcTotal(objTariff);

total.textContent = totalValue;

result.textContent = totalValue + planValue;

function countUp(e) {
  console.log('!!!');
}
calc.addEventListener('click', countUp);
