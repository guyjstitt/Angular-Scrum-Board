import {   
  Component,
  OnInit,
  Input
 } from '@angular/core';

 import { Task } from '../task/task.model';
 import { TaskService } from '../task/task.service';

@Component({
  selector: 'scrum-task',
  templateUrl: './scrum-task.component.html',
  styleUrls: ['./scrum-task.component.css']
})

export class ScrumTaskComponent implements OnInit {
  @Input() task: Task;
  @Input() selected: boolean;

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
  }

  clicked(event: any): void {
    this.taskService.setSelectedTask(this.task);
    event.preventDefault();
  }
}
