import { DateTime } from 'luxon'

export interface EventDto {
  name: string;
  date: DateTime;
  userId?: number;
}
