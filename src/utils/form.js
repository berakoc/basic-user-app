export const createFormBinder = (register, name) => () => register(name) || {};
