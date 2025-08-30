import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../models/product.model';
import {
  IProductRepository,
  SearchFilters,
} from './product.repository.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpProductRepository implements IProductRepository {
  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getById(id: number): Observable<Product | undefined> {
    return this.http
      .get<Product>(`${this.apiUrl}/${id}`)
      .pipe(map((product) => product || undefined));
  }

  create(product: Omit<Product, 'id' | 'createdAt'>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  update(
    id: number,
    product: Partial<Product>,
  ): Observable<Product | undefined> {
    return this.http
      .put<Product>(`${this.apiUrl}/${id}`, product)
      .pipe(map((product) => product || undefined));
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(map(() => true));
  }

  getByCategory(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?category=${category}`);
  }

  getInStock(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}?inStock=true`);
  }

  search(query: string, filters?: SearchFilters): Observable<Product[]> {
    let url = `${this.apiUrl}/search?q=${query}`;

    if (filters?.category) {
      url += `&category=${filters.category}`;
    }

    if (filters?.minPrice) {
      url += `&minPrice=${filters.minPrice}`;
    }

    if (filters?.maxPrice) {
      url += `&maxPrice=${filters.maxPrice}`;
    }

    if (filters?.inStock !== undefined) {
      url += `&inStock=${filters.inStock}`;
    }

    return this.http.get<Product[]>(url);
  }
}
