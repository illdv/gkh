import { d, out } from './output';

export default (index) => {
  switch (index) {
    case 0: {
      const sink = d[index] * 17.00;
      out.sink = sink;
      return (d[index] * 105.76) + sink;
    }
    case 1:
      return d[index] * 33.50;
    case 2:
      return d[index] * 5.85;
    case 3:
      return d[index] * 3.74;
    default:
      return alert('incorrect value');
  }
};
