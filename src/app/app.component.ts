import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-classwork';
  newTask: string = '';

  onTaskAdded(task: string) {
    this.newTask = task;  
  }
  
}
