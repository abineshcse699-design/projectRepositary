import { AngularJSUrlCodec } from '@angular/common/upgrade';
import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  imports: [],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {


  courseName:String="Angular full course";
courseDuration: String="2 hrs";
isActive: boolean=false;
myclassName:String="sucess";

myInputType="check box";

 showAlert(){
  alert('welcome to angular')
 }

changeCourseName( name:String){

 this.courseName=name;
}

}
