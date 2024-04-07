import { Component } from '@angular/core';
import { SalesService } from './sales.service';

@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {
  allSales: any[] = [];

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(data => {
      console.log(data)
      this.allSales = data;
    });
  }

}
