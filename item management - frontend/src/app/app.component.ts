import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavItemComponent} from './nav-item/nav-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'item-app';
}
