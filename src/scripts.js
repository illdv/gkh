const calc = document.querySelector('#calc');
const displayCost = document.querySelectorAll('.costRes');
const displayLast = document.querySelectorAll('.lastMounth');
const displayCurrent = document.querySelectorAll('.currentMonth');
const displayDiff = document.querySelectorAll('.diffRes');

const price = {
  sink: 4,
  hot: 5,
  cold: 6,
  gas: 7,
  el: 8,
};

function displaying(nodes, objValue) {
  nodes.forEach((node, index) => {
    const firstChild = node.firstChild;
    node.insertBefore(`<span>${Object.values(objValue)[index]}</span>`, firstChild);
  });
}
displaying(displayCost, price);

const lastMonth = {
  hot: 1,
  cold: 2,
  gas: 3,
  el: 4,
};

displaying(displayLast, lastMonth);

const currentMonth = {
  hot: 8,
  cold: 7,
  gas: 6,
  el: 5,
};
displaying(displayCurrent, currentMonth);

function calcDifference(last, current) {
  const objDiff = Object.values(last).reduce((acc, lastValue, index) => {
    const currentValue = Object.values(current)[index];
    const currentKeys = Object.keys(current)[index];
    const diff = currentValue - lastValue;
    acc[currentKeys] = diff;
    return acc;
  }, {});

  return objDiff;
}

displaying(displayDiff, calcDifference(lastMonth, currentMonth));

function countUp(e) {
  console.log('!!');
}
calc.addEventListener('click', countUp);
