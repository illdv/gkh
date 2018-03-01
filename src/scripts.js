const calc = document.querySelector('#calc');

const price = {
  sink: 1,
  hot: 2,
  cold: 3,
  gas: 4,
  el: 5,
};

const lastMonth = [0, 0, 0, 0];
const currentMonth = [1, 2, 3, 4];
const difference = currentMonth.map((value, index) => value - lastMonth[index]);

function countUp(e) {
  console.log(e);
}
calc.addEventListener('click', countUp);
