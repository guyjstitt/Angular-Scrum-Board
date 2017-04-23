import { Action } from 'redux';
import { createSelector } from 'reselect';

import { Column } from './column.model';
import { Task } from '../task/task.model';
import * as ColumnActions from './column.actions';

export interface ColumnsEntities {
    [id: string]: Column;
}

export interface ColumnsState {
    ids: string[];
    entities: ColumnsEntities,
    selectedTaskId?: string
}

const initialState: ColumnsState = {
    ids: [],
    entities: {},
    selectedTaskId: null
}

export const ColumnReducer = 
    function(state: ColumnsState = initialState, action: Action): ColumnsState {
        switch(action.type) {
            case ColumnActions.ADD_COLUMN: {
                const column = (<ColumnActions.AddColumnAction>action).column;

                if (state.ids.includes(column.id)) {
                    return state;
                }

                return {
                    ids: [ ...state.ids, column.id ],
                    selectedTaskId: state.selectedTaskId,
                    entities: Object.assign({}, state.entities, {
                    [column.id]: column
                    })
                };
            }

            case ColumnActions.ADD_TASK: {
                const column = (<ColumnActions.AddTaskAction>action).column;
                const task = (<ColumnActions.AddTaskAction>action).task;

                const newTask = Object.assign({}, task, { title: task.title, description: task.description });

                const oldColumn = state.entities[column.id];

                const newColumn = Object.assign({}, oldColumn, {
                    tasks: [...oldColumn.tasks, newTask]
                });

                return {
                    ids: state.ids,
                    selectedTaskId: state.selectedTaskId,
                    entities: Object.assign({}, state.entities, {
                        [column.id]: newColumn
                    })
                };
            }

            case ColumnActions.SELECT_TASK: {
                const task = (<ColumnActions.SelectTaskAction>action).task
             
                return {
                    ids: state.ids,
                    selectedTaskId: task.id,
                    entities: state.entities
                };
            }
        
            default:
                return state;
        }
    }

export const getColumnsState = (state): ColumnsState => state.columns;

export const getColumnsEntities = createSelector(
  getColumnsState,
  ( state: ColumnsState ) => state.entities );

export const getAllColumns = createSelector(
  getColumnsEntities,
  ( entities: ColumnsEntities ) => Object.keys(entities)
                        .map((columnId) => entities[columnId]));

export const getSelectedTask = createSelector(
  getColumnsState,
  ( state: ColumnsState ) =>
    state.selectedTaskId );