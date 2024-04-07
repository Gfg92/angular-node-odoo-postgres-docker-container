import { Injectable } from '@angular/core';
import { ApiConnectionService } from '../api-connection.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private apiService: ApiConnectionService, private http: HttpClient) { }


  getSales(): Observable<any[]> {
    const apiUrl = this.apiService.buildUrl("/api/sales")
    return this.http.get<any[]>(apiUrl);
  }
}
