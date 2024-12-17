import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ReversedTextInputComponent } from './reversed-text-input/reversed-text-input.component';  
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TodoListComponent ,
    ReversedTextInputComponent  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
