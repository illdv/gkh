export default (prop, value = true) => {
  if (!value) {
    return Object.keys(prop);
  }
  return Object.values(prop);
};
