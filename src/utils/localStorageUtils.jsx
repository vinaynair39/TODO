export const getFromLocalStorage = (name = "") => {
  return JSON.parse(localStorage.getItem(name)) || {};
};

export const setToLocalStorage = (name = "", items) => {
  localStorage.setItem(name, JSON.stringify(items));
};
