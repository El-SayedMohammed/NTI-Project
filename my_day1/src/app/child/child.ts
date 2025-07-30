import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.html',
  styleUrl: './child.css'
})
export class Child {
 @Input()username:string="";
 id:number=5;
 @Output() idevent:EventEmitter<number>=new EventEmitter<number>();
 setid(){
  this.idevent.emit(this.id)
 }

}
