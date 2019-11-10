import { Component, OnInit, Inject } from '@angular/core';
import { Task } from 'src/app/models/Task';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {

  task : Task

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _taskService : TaskService,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  { }

  closeDialogue(){
    this._dialog.closeAll();
  }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(p => { 
      this._taskService.getTaskById(this.data.id).subscribe((singleTask: Task) => {
        this.task = singleTask;
      });
    });
  }

}
