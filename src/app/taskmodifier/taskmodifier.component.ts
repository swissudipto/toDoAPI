import { Component, OnInit, NgModule, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataService } from '../Services/data.service';
import { task } from '../tasklist/Tasks';

@Component({
  selector: 'app-taskmodifier',
  templateUrl: './taskmodifier.component.html',
  styleUrls: ['./taskmodifier.component.css'],
  providers: [DataService]

})
export class TaskmodifierComponent implements OnInit {

  newtaskname: string = '';
  newtaskStartdate: string = '';
  newtaskEnddate: string = '';
  tasklist: task[] = [];
  tasklistfromApii: any;
  newtask: task = {
    tasknumber: 0,
    taskstartdate: '',
    taskenddate: '',
    taskname: '',
    taskstatus: ''
  };
  response: any;

  constructor(private taskapi: DataService) { }


  ngOnInit(): void {
    this.taskapi.getalltask().subscribe((data) => {
      this.tasklistfromApii = data;
      this.tasklist = this.tasklistfromApii;
    });





  }
  addnewtask() {
    if (this.newtaskname == '') {
      alert('Please Enter Task name');
      return;
    }
    if (this.newtaskStartdate == '') {
      alert('Please Enter Task Start date');
      return;
    }
    if (this.newtaskEnddate == '') {
      alert('Please Enter Task End date');
      return;
    }

    this.newtask.tasknumber = this.tasklist.length;
    this.newtask.taskname = this.newtaskname;
    this.newtask.taskstartdate = this.newtaskStartdate;
    this.newtask.taskenddate = this.newtaskEnddate;
    this.newtask.taskstatus = '';

    this.taskapi.createnewtask(this.newtask).subscribe((data) => 
    { 
      this.response = data;
      this.taskapi.getalltask().subscribe((data) => {
        this.tasklistfromApii = data;
        this.tasklist = this.tasklistfromApii;
      });
     });
    
    

    /*this.tasklist.push({
      tasknumber: this.tasklist.length,
      taskname: this.newtaskname,
      taskstartdate: this.newtaskStartdate,
      taskenddate: this.newtaskEnddate,
      taskstatus: ''
    }); */

    this.newtaskname = '';
    this.newtaskStartdate = '';
    this.newtaskEnddate = '';
  }
  removetask(task: task) {

    this.taskapi.deletetask(task).subscribe((data)=>{
      this.response=data;
      this.taskapi.getalltask().subscribe((data) => {
        this.tasklistfromApii = data;
        this.tasklist = this.tasklistfromApii;
      });
    });

    console.log(task);
    this.tasklist.splice(task.tasknumber, 1);
    this.rearrangetasklist(task.tasknumber);

  }
  rearrangetasklist(removetasknumber: number) {

    for (let i = 0; i < this.tasklist.length; i++) {
      this.tasklist[i].tasknumber = i;
    }

  }

}
