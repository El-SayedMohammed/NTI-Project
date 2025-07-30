import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-server',
  standalone: false,
  templateUrl: './server.html',
  styleUrl: './server.css'
})
export class Server {
  message:string ="hamde";
     ishidden =true;
  getnum(x:number,y:number):number{
    return x+y
  }
  imageurl:string = 'http//assets/img/logo';
  colspan:number = 2;
isactive=true;
iserror= true;
username="mostafa";
hello(){
  console.log("hello from event")
}
changevalue(event:any){
  console.log(event.target.value);
}
ishere= false;
users=["ali","mostafa","eman"];

parntusername:string="eman";
  childid!: number;
result(id:number){
  this.childid=id;
}

}

