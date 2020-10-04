import { User } from 'interfaces/User';

const STORAGE_KEY = '@RANKEER:USER'

const getCurrentUser = (): User | null => {
  const localData: User = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY)
  );

  return localData;
};

const setCurrentUser = (value: User) => {
  const user = JSON.stringify(value);
  window.localStorage.setItem(STORAGE_KEY, user);
};

const clearCurrentUser = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};

export { getCurrentUser, setCurrentUser, clearCurrentUser };
