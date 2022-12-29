import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { task } from '../tasklist/Tasks';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getalltask():Observable<any>
  {
    return this.http.get('https://localhost:7008/task');
  }
  createnewtask(tasktobecreate:task ):Observable<any>
  {
   return this.http.post('https://localhost:7008/task',tasktobecreate);
  }
  deletetask(tasktobedeleted:task):Observable<any>
  {
    return this.http.post('https://localhost:7008/task/deletetask',tasktobedeleted);
  }
}
