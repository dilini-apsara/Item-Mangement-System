import { Component } from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './nav-item.component.html',
  styleUrl: './nav-item.component.css'
})
export class NavItemComponent {

}
