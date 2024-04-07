import { Component } from '@angular/core';
import { SalesComponent } from './sales/sales.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular 17';

  users = [
    "Juan",
    "Mario",
    "Alberto"
  ];




}
