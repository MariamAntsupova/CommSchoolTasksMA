import { Component ,Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = [];
  newTask: string = '';
  @Output() taskAdded: EventEmitter<string> = new EventEmitter<string>();
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.taskAdded.emit(this.newTask)
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
