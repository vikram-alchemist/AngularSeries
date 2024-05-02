import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  outputs:['childEevent']
})
export class ChildComponent {
  childEevent=new EventEmitter()
  constructor(){}
  onChange(val:any){
    console.log("Output",val);
    this.childEevent.emit(val);
  }
}
