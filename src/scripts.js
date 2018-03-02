const calc = document.querySelector('#calc');
const displayCost = document.querySelectorAll('.costRes');
const displayLast = document.querySelectorAll('.lastMounth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');
const displayAll = document.querySelectorAll('.allRes');

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
    span.innerHTML = Object.values(objValue)[index];
    node.appendChild(span);
  });
}
displaying(displayCost, prices);

displaying(displayLast, lastMonth);

displaying(displayCurrent, currentMonth);

const objDiff = {};
function calcDifference(last, current) {
  const d = Object.values(last).reduce((acc, lastValue, index) => {
    const currentValue = Object.values(current)[index];
    const currentKeys = Object.keys(current)[index];
    const diff = currentValue - lastValue;
    acc[currentKeys] = diff;
    return acc;
  }, objDiff);

  return d;
}

displaying(displayDiff, calcDifference(lastMonth, currentMonth));

function tariff(diff, price) {
  Object.values(price).reduce((acc, diffValue, index) => {
    const priceValue = Object.values(price)[index];
    const priceKey = Object.keys(price)[index];
    let forTariff;
    if (priceKey !== 'sink') {
      forTariff = priceValue * diffValue;
    } else {
      forTariff = priceValue[0] * diffValue;
    }
    console.log(forTariff);
  }, {});
}

tariff(objDiff, prices);

function countUp(e) {
  console.log('!!');
}
calc.addEventListener('click', countUp);
