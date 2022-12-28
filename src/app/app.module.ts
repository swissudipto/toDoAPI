import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { TaskmodifierComponent } from './taskmodifier/taskmodifier.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { TasktableComponent } from './taskmodifier/tasktable/tasktable.component';
@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent,
    TaskmodifierComponent,
    TasktableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
