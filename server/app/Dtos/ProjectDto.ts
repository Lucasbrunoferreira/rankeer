export interface CreateProjectDto {
  name: string;
  eventId: number;
}

export interface UpdateProjectDto {
  name?: string;
  description?: string;
  color?: string;
  impactPhrase?: string;
  annotations?: string;
}
