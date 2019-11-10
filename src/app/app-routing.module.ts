import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskIndexComponent } from './components/tasks/task-index/task-index.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { TaskDetailComponent } from './components/tasks/task-detail/task-detail.component';
import { TaskUpdateComponent } from './components/tasks/task-update/task-update.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'task', children:[
    { path: 'index', component: TaskIndexComponent},
    { path: 'create', component:TaskCreateComponent},
    { path: 'detail/:id', component:TaskDetailComponent},
    { path: 'update/:id', component:TaskUpdateComponent},
    { path: 'delete/:id', component:TaskDeleteComponent}
  ]},

  { path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
