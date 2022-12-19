import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';
import { task } from './Tasks';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  constructor(private appservice:DataService) { }

  tasklist:task[]=[];
   /* {
      taskname:'Learn Data Structure',
    taskstartdate:new Date('10/03/1997'),
    taskenddate:new Date('10/03/1997'),
    taskstatus:'Completed'
    },
    {
    taskname:'Learn System Design',
    taskstartdate:new Date('10/03/1997'),
    taskenddate:new Date('10/03/1997'),
    taskstatus:'Completed'
    }
  ];*/

  ngOnInit(): void {
    this.appservice.getalltask().subscribe(data=>{
      this.tasklist=data;
    });
  }

}
