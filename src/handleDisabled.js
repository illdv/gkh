import { plan, costs, lasts } from './domElements';

const blocks = document.querySelectorAll('[data-toggle]');

function handleDisabled() {
  if (this.dataset.toggle === 'true') {
    this.dataset.toggle = false;
    this.innerHTML = '<use class  xlink:href="#unlock"/>'
  } else {
    this.dataset.toggle = true;
    this.innerHTML = '<use class  xlink:href="#lock"/>';
  }

  switch (this.nextElementSibling.textContent) {
    case 'План':
      plan.disabled = !plan.disabled;
      break;
    case 'Цена':
      costs.forEach(cost => {
        cost.disabled = !cost.disabled;
      });
      break;
    case 'Прошлый':
      lasts.forEach(cost => {
        cost.disabled = !cost.disabled;
      });
      break;
    default:
      console.log('Error switch');
  }
}

blocks.forEach(block => block.addEventListener('click', handleDisabled));
