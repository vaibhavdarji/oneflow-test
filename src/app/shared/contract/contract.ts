import { LinkedUsers } from './users';
export class Contract {
  id: number;
  title: string;
  description: string;
  users: LinkedUsers[];

  constructor(id: number, title: string, description: string, users: LinkedUsers[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.users = users;
  }
}
