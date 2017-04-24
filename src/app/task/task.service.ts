import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Task } from '../task/task.model';

@Injectable()
export class TaskService {
  private task: Task;
  private subject: Subject<Task> = new Subject<Task>();

  setSelectedTask(task: Task): void {
    this.task = task;
    this.subject.next(this.task);
  }
  
  getSelectedTask(): Observable<Task> {
    return this.subject.asObservable();
  }
}