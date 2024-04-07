import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiConnectionService {
  private baseUrl = 'http://localhost:3000';

  buildUrl(endpoint: string): string {
    return `${this.baseUrl}${endpoint}`
  }

}