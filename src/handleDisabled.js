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

  switch (this.previousElementSibling.textContent) {
    case 'План:':
      displayPlan.disabled = !displayPlan.disabled;
      break;
    case 'Цена:':
      displayCost.forEach(cost => {
        cost.disabled = !cost.disabled;
      });
      break;
    case 'Прошлый месяц:':
      displayLast.forEach(cost => {
        cost.disabled = !cost.disabled;
      });
      break;
    default:
      console.log('Error switch');
  }
}

blocks.forEach(block => block.addEventListener('click', handleDisabled));
