import { SubTask } from './SubTask';

export class Task {
  id: number;
  titls: string;
  subTasks: SubTask[];
  subtaskHeaderId: number;
}
