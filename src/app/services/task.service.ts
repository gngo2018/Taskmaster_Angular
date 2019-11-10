import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment'
import { Task } from '../models/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private _http: HttpClient, private _router: Router) { }

  getTasks(){
    return this._http.get(`${environment.Api_Url}api/task`);
  }

  getTaskById(id : string){
    return this._http.get(`${environment.Api_Url}api/task/${id}`)
  }

  createTask(task: Task){
    return this._http.post(`${environment.Api_Url}api/task`, task);
  }

  updateTask(task : Task){
    return this._http.put(`${environment.Api_Url}api/task`, task);
  }

  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('token')}`);
  }


}
