import { displayPlan, displayCost, displayLast } from './scripts';

const blocks = document.querySelectorAll('[data-toggle]');

function handleDisabled() {
  if (this.dataset.toggle === 'true') {
    this.dataset.toggle = false;
    this.textContent = 'Блокировать';
  } else {
    this.dataset.toggle = true;
    this.textContent = 'Разблокировать';
  }

  if (this.previousElementSibling === displayPlan) {
    displayPlan.disabled = !displayPlan.disabled;
  } else if (this.previousElementSibling.textContent === 'Цена') {
    displayCost.forEach(cost => {
      cost.disabled = !cost.disabled;
    });
  } else if (this.previousElementSibling.textContent === 'Прошлый месяц') {
    displayLast.forEach(cost => {
      cost.disabled = !cost.disabled;
    });
  }
}

blocks.forEach(block => block.addEventListener('click', handleDisabled));
