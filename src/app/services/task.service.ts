import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { Task } from '../models/Task';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient, private _router: Router) { }

  private _refreshNeeded = new Subject<void>();

  get refreshNeeded(){
    return this._refreshNeeded;
  }

  getTasks(){
    return this._http.get(`${environment.Api_Url}api/task`);
  }

  getTaskById(id : string){
    return this._http.get(`${environment.Api_Url}api/task/${id}`)
  }

  createTask(task: Task){
    return this._http.post(`${environment.Api_Url}api/task`, task)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  updateTask(task: Task) {
    return this._http.put(`${environment.Api_Url}api/task`, task)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
      );
  }

  deleteTask(id : number){
    return this._http.delete(`${environment.Api_Url}api/task/${id}`)
      .pipe(
        tap(() => {
          this._refreshNeeded.next();
        })
    );
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }


}
