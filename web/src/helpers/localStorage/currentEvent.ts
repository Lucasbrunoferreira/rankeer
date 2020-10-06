import { Event } from 'interfaces/Event';
import { getCurrentUser } from './currentUser';

const STORAGE_KEY = '@RANKEER:EVENT'

interface CurrentEvent {
  id: number;
  name: string;
  isAdmin: boolean;
}

const getCurrentEvent = (): CurrentEvent | null => {
  const localData: CurrentEvent = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY)
  );

  return localData;
};

const setCurrentEvent = (event: Event) => {
  const currentUser = getCurrentUser();
  const currentEvent: CurrentEvent = { name: event.name, id: event.id, isAdmin: currentUser.id === event.userId }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(currentEvent));
};

const clearCurrentEvent = () => {
  window.localStorage.removeItem(STORAGE_KEY);
};

const hasCurrentEvent = () => {
  const currentEvent = getCurrentEvent();
  return currentEvent ? currentEvent.hasOwnProperty('id') : false
};

export { getCurrentEvent, setCurrentEvent, clearCurrentEvent, hasCurrentEvent };
