import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic',
  imports: [FormsModule, NgClass,NgStyle],
  templateUrl: './dynamic.html',
  styleUrl: './dynamic.css',
})
export class Dynamic {

  divClassName:string='';

}
