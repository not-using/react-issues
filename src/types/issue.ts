import { User } from './user';

export interface Issue {
  id: number;
  number: number;
  title: string;
  user: User;
  created_at: string;
  comments: number;
}
