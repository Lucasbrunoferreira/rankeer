import { User } from './User'

interface Info {
  office: string;
  skill: string;
}

export interface Member extends User {
  participantInfo: Info
}
