import { Event } from 'interfaces/Event';

const STORAGE_KEY = '@RANKEER:EVENT'

interface CurrentEvent {
  id: number;
  name: string;
  role: 'owner' | 'participant' | 'evalutor';
  isAdmin: boolean;
}

const getCurrentEvent = (): CurrentEvent | null => {
  const localData: CurrentEvent = JSON.parse(
    window.localStorage.getItem(STORAGE_KEY)
  );

  return localData;
};

const setCurrentEvent = (event: Event) => {
  const currentEvent: CurrentEvent = { name: event.name, id: event.id, role: event.role, isAdmin: event.role === 'owner' }
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
