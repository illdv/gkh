import input from './input';

const storage = () => {
  for (let i = 0; i < input.lastMounth.length; i += 1) {
    input.lastMounth[i].innerHTML = localStorage.preRes.split(',')[i];
    input.costRes[i].innerHTML = localStorage.costRes.split(',')[i];
  }
  console.log(input.costSink.value);
  input.costSink.innerHTML = localStorage.costSink;
  input.plan.innerHTML = localStorage.plan;
};
document.addEventListener(
  'DOMContentLoaded', storage,
  false,
);
