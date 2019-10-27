import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TaskIndexComponent } from './components/tasks/task-index/task-index.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'task', component: TaskIndexComponent},
  { path: '**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
