import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styles: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  task: Task;
  taskId : any;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _taskService: TaskService,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  { 
    this._activatedRoute.paramMap.subscribe(p => {
      this.taskId = this.data.id
      this._taskService.getTaskById(this.data.id).subscribe((singleTask: Task) => {
        this.task = singleTask;
      });
    });
  }

  onDelete()
  {
    this._taskService.deleteTask(this.taskId).subscribe(() => {
      this._router.navigate(['/task/index']);
    });
  }

  ngOnInit() {
  }

}
