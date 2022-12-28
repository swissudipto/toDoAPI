import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { task } from 'src/app/tasklist/Tasks';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.css']
})
export class TasktableComponent implements OnInit {
  
  @Input() taskliftref:task[]=[]; 
  @Output() toberemovetask= new EventEmitter<task>();

  ngOnInit(): void {
  }
  removetask(task:task)
  {
    this.toberemovetask.emit(task);
  }

}
