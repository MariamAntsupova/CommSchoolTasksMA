import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() sendListEvent=new EventEmitter<string>();
  sendList:string=""
  sendListToParent(){
    this.sendListEvent.emit(this.sendList);
    this.sendList="";

  }
}
