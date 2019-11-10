import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../../models/Task'
import { MatTableDataSource, MatDialog } from '@angular/material';
import { TaskCreateComponent } from '../task-create/task-create.component';
import { TaskDetailComponent } from '../task-detail/task-detail.component';
import { TaskUpdateComponent } from '../task-update/task-update.component';

@Component({
  selector: 'app-task-index',
  templateUrl: './task-index.component.html',
  styleUrls: ['./task-index.component.css']
})
export class TaskIndexComponent implements OnInit {

tasks: any;
dataSource: MatTableDataSource<Task>;

  constructor(private _taskService: TaskService,
              private _dialog: MatDialog) { }

  ngOnInit() {
    this._taskService.getTasks().subscribe(t => this.tasks = t);
  }

  openTaskCreate(){
    const dialogRef = this._dialog.open(TaskCreateComponent)
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openTaskDetail(id){
    const dialogRef = this._dialog.open(TaskDetailComponent, {
      data: {
        id
      }
    })
  }

  openTaskUpdate(id){
    const dialogRef = this._dialog.open(TaskUpdateComponent, {
      data: {
        id
      }
    })
  }
}
