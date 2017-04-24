import {
  Action,
  ActionCreator
} from 'redux';

import { Column } from '../column/column.model';
import { Task } from '../task/task.model';
import { uuid } from '../util/uuid';

export const ADD_COLUMN = '[Column] Add';
export interface AddColumnAction extends Action {
    column: Column;
}
export const addColumn: ActionCreator<AddColumnAction> =
    (column) => ({
        type: ADD_COLUMN,
        column: column
    });

export const ADD_TASK = '[Column] Add Task';
export interface AddTaskAction extends Action {
    column: Column;
    task: Task;
}
export const addTask: ActionCreator<AddTaskAction> =
    (column: Column, taskArgs: Task): AddTaskAction => {
        const defaults = {
            id: uuid(),
            title: "No Title",
            description: "No Description",
            column: column
        }

        const task: Task = Object.assign({}, defaults, taskArgs);

        return {
            type: ADD_TASK,
            column: column,
            task: task
        };
    }

export const SELECT_TASK = '[Column] Select Task';
export interface SelectTaskAction extends Action {
    column: Column;
    task: Task;
}

export const selectTask: ActionCreator<SelectTaskAction> =
  (task: Task) => ({
    type: SELECT_TASK,
    column: task.column,
    task: task
  });