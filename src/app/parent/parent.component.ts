import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  lists:string[]=[];
  receivedList(childList:string){
    this.lists.push(childList);
  }

  delete(index: number){
    this.lists.splice(index, 1);
  }
}
