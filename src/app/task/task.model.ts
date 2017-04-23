import { Column } from '../column/column.model';

export interface Task {
    id: string;
    title: string;
    description: string;
    column?: Column;
}