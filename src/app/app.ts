import { JsonPipe } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { NotFoundError } from '@angular/core/primitives/di';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
 isNewUser:boolean=false;
 userObj:User=new User();
//  userList:User=new User();
 userList:User[]=[];

 ngOnInit(): void {

     const localData =localStorage.getItem('angular19User');
     if(localData !=null){
      this.userList=JSON.parse(localData);
     }
 }

 changeview(){
  this.isNewUser=!this.isNewUser;
 }

 onEdit(data:User){
  this.isNewUser=!this.isNewUser;

 }

 onDelete(userId:number){
  const isDelete =confirm("arr u confirm delete");
  if(isDelete){
    const index=this.userList.findIndex(m=>m.userId == userId);
    this.userList.splice(index,1)
    localStorage.setItem('angular19User',JSON.stringify(this.userList))
    this.changeview()

  }

 }



 onsave(){

  this.userObj.userId=this.userList.length+1;
  // if(this.userList.length ==0){
    this.userList.push(this.userObj);
    localStorage.setItem("angular19User",JSON.stringify(this.userList))
    this.changeview();
  }
  onUpdate(){
    const record= this.userList.find(m=>m.userId==this.userObj.userId)
    if(record!=undefined){
       record.city=this.userObj.city;
    record. fname =this.userObj.fname;
      localStorage.setItem("angular19User",JSON.stringify(this.userList))
      this.changeview();

    }

  }

 }



class User{
  userId:number;
  fname:string;
  uname:string;
  lname:string;
  state:string;
  city:string;
  zipcode:string;
isAgree:boolean;

constructor(){

  this.userId = 0;
  this.city="";
  this.fname="";
  this.isAgree=false;
  this.lname="";
  this.zipcode="";
  this.state="";
  this.uname="";
}

}
