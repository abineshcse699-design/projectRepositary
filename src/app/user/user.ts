import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { popResultSelector } from 'rxjs/internal/util/args';
import { NgClass } from "../../../node_modules/@angular/common/";

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

   http = inject(HttpClient);
   userList:any[]=[];
   departmentArray:[]=[];

  ngOnInit(): void {
    this.getUsers();
    // this.getDept();

  }
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any)=>{
      this.userList=result;


    })
  }
  // getDept(){
  //   this.http.get("https://api.freeprojectapi.com/api/EmployeeApp/GetDepartments").subscribe((result:any)=>{

  //     this.departmentArray= result ;

  //   })

  // }


  }

