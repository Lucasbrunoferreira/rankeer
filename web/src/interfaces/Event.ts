import { EventStatus } from 'helpers/enums/EventStatus';
import { User } from './User'

export interface Event {
  id: number;
  name: string;
  date: string;
  status: EventStatus;
  userId: number;
  user: User;
  participants: User[];
  updatedAt: string;
}
