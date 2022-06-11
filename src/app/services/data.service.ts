import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000'

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products`)
  }

  authenticate(data: any) {
    return this.http.post(`${this.url}/accounts/authenticate`, data)
  }
}
