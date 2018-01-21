import input from './input';

const storage = () => {
  for (let i = 0; i < input.preDate.length; i += 1) {
    input.preDate[i].innerHTML = localStorage.preRes.split(',')[i];
    input.costRes[i].innerHTML = localStorage.costRes.split(',')[i];
  }
  input.costSink.innerHTML = localStorage.costSink;
  input.plan.innerHTML = localStorage.plan;
};
document.addEventListener(
  'DOMContentLoaded', storage,
  false,
);
