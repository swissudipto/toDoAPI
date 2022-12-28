import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../Services/data.service';
import { task } from './Tasks';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {


  constructor(private appservice:DataService) { }
  
  @Input() newaddedtask!:task;
  public tasklist:task[]=[];



  ngOnInit(): void {
    this.appservice.getalltask().subscribe(data=>{
      this.tasklist=data;
    });
  }

}
