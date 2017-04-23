import { Task } from '../task/task.model';

export interface Column {
    id: string;
    title: string;
    tasks: Task[];
}