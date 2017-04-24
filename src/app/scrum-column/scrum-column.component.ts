import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Column } from '../column/column.model';
import { Task } from '../task/task.model';

@Component({
  selector: 'scrum-column',
  templateUrl: './scrum-column.component.html',
  styleUrls: ['./scrum-column.component.css']
})
export class ScrumColumnComponent implements OnInit {
  @Input() column: Column;
  @Input() selectedTaskId: string;

  @Output() onTaskCreate: EventEmitter<Task>;

  newTask: {
    id: string;
    title: string;
    description: string;
    column: {
      id: string,
      title: string,
      tasks: Task[]
    }
  };

  constructor() {
    this.onTaskCreate = new EventEmitter();
    this.newTask = { 
      id: "test",
      title: "",
      description: "",
      column: {
        id: "",
        title: "",
        tasks: []
      }
    };
  }

  ngOnInit() { }

  addTask(column: Column): void {
    this.newTask.column = column;
    this.onTaskCreate.emit(this.newTask);
  }
}



