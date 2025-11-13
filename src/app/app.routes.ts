import { Routes } from '@angular/router';
import { User } from './user/user';
import { Databinding } from './databinding/databinding';
import { Component } from '@angular/core';
import { ControlFlow } from './control-flow/control-flow';
import { Dynamic } from './dynamic/dynamic';

export const routes: Routes = [
  {
    path:'',
    redirectTo:"databinding",
    pathMatch:'full'

  },
  {
    path:"user",
    component:User
  },
  {
   path:"databinding",
   component:Databinding,
  },
  {
    path:"controlflow",
    component:ControlFlow
  },
  {

    path:"dynamic",
    component:Dynamic
  },
  {
    path:"user",
    component:User
  }

];
