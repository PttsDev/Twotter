export interface User {
  id?: string;
  name: string;
  username: string;
  password: string;
  repeatPassword?: string;
  email: string;
  profileImage?: string;
}
