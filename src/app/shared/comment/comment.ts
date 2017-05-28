export class Comment {
  id: number;
  subject: string;
  hours: number;
  description: string;
  from: string;
  to: string;

  constructor(id: number, subject: string, hours: number, description: string, from: string, to: string) {
    this.id = id;
    this.subject = subject || '';
    this.hours = hours || 0;
    this.description = description;
    this.from = from || 'Pradip Caulagi';
    this.to = to;
  }
}
