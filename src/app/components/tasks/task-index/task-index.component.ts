import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../models/Task'
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.css']
})
export class TaskIndexComponent implements OnInit {

tasks: any;
dataSource: MatTableDataSource<Task>;

  constructor(private _taskService: TaskService) { }

  ngOnInit() {
    this._taskService.getTasks().subscribe(t => this.tasks = t);
  }
}
