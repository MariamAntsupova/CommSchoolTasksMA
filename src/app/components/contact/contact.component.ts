import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  message: string = '';

  onSubmit(){
    if (this.name&& this.message){
      alert('Message Sent!');
      this.clearForm();
    }
  }

  clearForm(){
    this.name='';
    this.message='';
  }
}
