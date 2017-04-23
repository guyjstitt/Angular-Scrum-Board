import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Column } from '../column/column.model';

@Component({
  selector: 'scrum-column',
  templateUrl: './scrum-column.component.html',
  styleUrls: ['./scrum-column.component.css']
})
export class ScrumColumnComponent implements OnInit {
  @Input() column: Column;
  @Input() selectedTask: string;

  constructor() {
  }

  ngOnInit() { }
}



