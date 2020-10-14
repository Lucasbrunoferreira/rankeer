import { EventStatus } from 'helpers/enums/EventStatus';
import { Member } from './Member';
import { User } from './User'

export interface Event {
  id: number;
  name: string;
  date: string;
  status: EventStatus;
  userId: number;
  user: User;
  members: Member[];
  updatedAt: string;
}
