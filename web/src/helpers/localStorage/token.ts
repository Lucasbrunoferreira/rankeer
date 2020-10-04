const STORAGE_KEY = '@RANKEER:TOKEN'

const getToken = (): string | null => {
  const localData = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY)
  );

  return localData;
};

const setToken = (value: string) => {
  const user = JSON.stringify(value);
  window.localStorage.setItem(STORAGE_KEY, user);
};

const clearToken = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};

export { getToken, setToken, clearToken };
