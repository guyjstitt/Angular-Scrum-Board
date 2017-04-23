import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  AppState,
  default as reducer
} from './app.reducer';

import { AppComponent } from './app.component';
import { ScrumNavComponent } from './scrum-nav/scrum-nav.component';
import { ScrumBoardComponent } from './scrum-board/scrum-board.component';
import { ScrumColumnComponent } from './scrum-column/scrum-column.component';
import { ScrumTaskComponent } from './scrum-task/scrum-task.component';
import { ScrumNavItemComponent } from './scrum-nav-item/scrum-nav-item.component';

import { TaskService } from './task/task.service';

import {
  AppStore,
  appStoreProviders
} from './app.store';

@NgModule({
  declarations: [
    AppComponent,
    ScrumNavComponent,
    ScrumBoardComponent,
    ScrumColumnComponent,
    ScrumTaskComponent,
    ScrumNavItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    appStoreProviders, 
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
