import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/Task';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-task-update',
  templateUrl: './task-update.component.html',
  styleUrls: ['./task-update.component.css']
})
export class TaskUpdateComponent implements OnInit {

  task : Task;
  taskId : number;
  updateTaskForm : FormGroup;
  isChecked : boolean;

  constructor(
    private _activatedRoute : ActivatedRoute,
    private _form : FormBuilder,
    private _taskService : TaskService,
    private _router : Router,
    private _dialogRef: MatDialogRef<TaskUpdateComponent>,
    private _dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) 
  { 
    this._activatedRoute.paramMap.subscribe(p => { 
      this.taskId = this.data.id
      this._taskService.getTaskById(this.data.id).subscribe((singleTask: Task) => {
        this.task = singleTask;
        this.createForm(this.task)
      });
    });
  }

  createForm(task: any){
    this.updateTaskForm = this._form.group({
      TaskId: new FormControl(this.task.TaskId),
      TaskName: new FormControl(this.task.TaskName),
      TaskDescription: new FormControl(this.task.TaskDescription),
      IsNotStarted: new FormControl(this.task.IsNotStarted),
      IsInProgress: new FormControl(this.task.IsInProgress),
      IsCompleted: new FormControl(this.task.IsCompleted)
    })
  }

  closeDialogue(){
    this._dialog.closeAll();
  }
  
  ngOnInit() {
  }

  onSubmit(form){

    const editTaskForm : Task = {
      TaskId: this.taskId,
      TaskName: form.value.TaskName,
      TaskDescription: form.value.TaskDescription,
      IsNotStarted: form.value.IsNotStarted,
      IsInProgress: form.value.IsInProgress,
      IsCompleted: form.value.IsCompleted
    }

    this._taskService.updateTask(editTaskForm).subscribe(data => {
      this._dialogRef.close();
      this._router.navigate(['/task/index']);
    });
      console.log(editTaskForm)
  }
}
