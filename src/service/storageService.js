const key = "estacionamento";

const save = (data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const get = () => {
  const data = sessionStorage.getItem(key);
  if (data) return JSON.parse(data);
  return null;
};

const clear = (resource) => {
  sessionStorage.removeItem(key.concat(resource));
};

const clearAll = () => {
  sessionStorage.clear();
};

export const storageService = {
  save,
  get,
  clear,
  clearAll,
};