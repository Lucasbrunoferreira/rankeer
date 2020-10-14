export interface CreateUserDto {
  id?: number;
  name: string;
  email: string;
  password?: string;
  skill?: string;
  office?: string;
}
