import { User } from "./User"

export interface Event {
  id: number;
  name: string;
  date: string;
  userId: number;
  user: User;
  participants: User[];
  updatedAt: string;
}
