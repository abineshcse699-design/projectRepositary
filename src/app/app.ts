import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { User } from './user/user';
import { Databinding } from './databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, User, Databinding, RouterLinkWithHref],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('project');
}
