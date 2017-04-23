import { Store } from 'redux';
import {
  AppState
} from '../app.reducer';
import { uuid } from '../util/uuid';
import { Column } from '../column/column.model';
import * as ColumnActions from '../column/column.actions';

/**
 * ScrumTestData sets up the initial data for our scrum board
 */

const selectedTaskId = "1234";

const toDo: Column = {
  id: 'to-do',
  title: 'To Do',
  tasks: []
};

const inProgress: Column = {
  id: 'in-progress',
  title: 'In Progress',
  tasks: []
};

const done: Column = {
  id: 'done',
  title: 'Done',
  tasks: []
};

export function ScrumTestData(store: Store<AppState>) {
  // create columns and add tasks
  store.dispatch(ColumnActions.addColumn(toDo));
  store.dispatch(ColumnActions.addTask(toDo, {
    title: 'new task',
    description: 'new description'
  }));

  store.dispatch(ColumnActions.addColumn(inProgress));


  store.dispatch(ColumnActions.addColumn(done));
}
