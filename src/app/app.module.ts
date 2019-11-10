import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule,
         MatButtonModule,
         MatIconModule,
         MatGridListModule,
         MatDialogModule,
         MatFormFieldModule,
         MatInputModule,
         MatOptionModule,
         MatSelectModule,
         MatCheckboxModule,
} from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { TaskService } from './services/task.service';
import { TaskIndexComponent } from './components/tasks/task-index/task-index.component';
import { TaskCreateComponent } from './components/tasks/task-create/task-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskUpdateComponent } from './components/tasks/task-update/task-update.component';
import { TaskDeleteComponent } from './components/tasks/task-delete/task-delete.component';
import { TaskDetailComponent } from './components/tasks/task-detail/task-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TaskIndexComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskDeleteComponent,
    TaskDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatGridListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
