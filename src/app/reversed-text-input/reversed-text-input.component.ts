import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-reversed-text-input',
  standalone: true,  
  imports: [FormsModule],  
  template: `
    <div>
      <input [(ngModel)]="userInput" placeholder="Enter task" (input)="reverseText()" />
      <p>Reversed Task: {{ reversedText }}</p>
    </div>
  `,
  styleUrls: ['./reversed-text-input.component.css']
})
export class ReversedTextInputComponent {
  userInput: string = '';
  reversedText: string = '';

  reverseText() {
    this.reversedText = this.userInput.split('').reverse().join('');
  }
}
