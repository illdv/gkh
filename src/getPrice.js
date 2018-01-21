import getDiff from './getDiff';
import cost from './cost';

export default (index) => {
  switch (index) {
    case 0: {
      const sink = getDiff(index) * cost.sink;
      return [(getDiff(index) * cost.res[index]) + sink, sink];
    }
    case 1:
      return [getDiff(index) * cost.res[index]];
    case 2:
      return [getDiff(index) * cost.res[index]];
    case 3:
      return [getDiff(index) * cost.res[index]];
    default:
      return undefined;
  }
};
