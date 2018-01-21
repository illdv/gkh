import getCalc from './getCalc';

const output = () => {
  const out = getCalc();
  const diffRes = document.getElementsByClassName('diffRes');
  const allRes = document.getElementsByClassName('allRes');

  for (let i = 0; i < diffRes.length; i += 1) {
    diffRes[i].innerHTML = out.diff[i];
    allRes[i].innerHTML = out.all[i];
  }
  document.getElementById('sinkHot').innerHTML = out.sink;
  document.getElementById('total').innerHTML = out.total;
  document.getElementById('result').innerHTML = out.result;
};
document.getElementById('calc').addEventListener('click', output, true);
