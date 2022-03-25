export const tap = (fn) => (val) => {
  fn(val);
  return val;
};
