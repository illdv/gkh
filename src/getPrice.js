import getDiff from './getDiff';


export default (index) => {
  switch (index) {
    case 0: {
      const sink = getDiff(index) * 17.00;
      return [(getDiff(index) * 105.76) + sink, sink];
    }
    case 1:
      return [getDiff(index) * 33.50];
    case 2:
      return [getDiff(index) * 5.85];
    case 3:
      return [getDiff(index) * 3.74];
    default:
      return undefined;
  }
};
