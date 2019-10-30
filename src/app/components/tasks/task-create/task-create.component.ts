import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {

  taskForm: FormGroup;

  constructor(private _taskService: TaskService, 
              private _form: FormBuilder, 
              private _router: Router, 
              private dialogRef: MatDialogRef<TaskCreateComponent>
              )             
              { 
                this.createForm();
              }

  ngOnInit() {
  }

  createForm(){
    this.taskForm = this._form.group({
      TaskName: new FormControl(),
      TaskDescription: new FormControl(),
    });
  }

  onSubmit(){
    this._taskService.createTask(this.taskForm.value).subscribe(data => {
      this.dialogRef.close();
      this._router.navigate(['/task/index'])
    })
  }

}
