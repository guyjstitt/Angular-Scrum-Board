import {
  Component,
  OnInit,
  Inject
} from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from 'redux';
import {
  Column
} from '../column/column.model';
import * as ColumnActions from '../column/column.actions';
import { Task } from '../task/task.model';
import { TaskService } from '../task/task.service';

import {
  AppState,
  getSelectedTask,
  getAllColumns
} from '../app.reducer';

@Component({
  selector: 'scrum-board',
  templateUrl: './scrum-board.component.html',
  styleUrls: ['./scrum-board.component.css']
})

export class ScrumBoardComponent implements OnInit {
  columns: Column[];
  selectedTaskId: string;

  constructor(@Inject(AppStore) private store: Store<AppState>, private taskService: TaskService) {
    store.subscribe(() => this.updateState());
    this.updateState();
  }

  ngOnInit() {
    this.taskService.getSelectedTask().subscribe((task: Task) => {
         console.log(task.title);
         this.handleTaskClicked(task);
     });
  }

  updateState() {
    console.log('tsrt');
    const state = this.store.getState();

    this.columns = getAllColumns(state);
    this.selectedTaskId = getSelectedTask(state);
  }

  handleTaskClicked(task: Task) {
    this.store.dispatch(ColumnActions.selectTask(task));
  }

  handleTaskCreate(task: Task) {
    this.store.dispatch(ColumnActions.addTask(task.column, task));
  }
}
