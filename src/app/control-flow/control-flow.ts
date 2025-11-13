import { Component, signal } from '@angular/core';
import { NgIf, NgForOf } from "../../../node_modules/@angular/common";

@Component({
  selector: 'app-control-flow',
  imports: [NgIf, NgForOf],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {

  isText:boolean=true;
  isTextVisible=signal<boolean>(false);

  citylist:string[]=["pune","nagpur","mumbai","chennai"]


  hideText(){
    this.isTextVisible.set(false)
  }
  showText(){
    this.isTextVisible.set(true)
  }
  constructor(){


    for(let item of this.citylist){

  }
  }


}
