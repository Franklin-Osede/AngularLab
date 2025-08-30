import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { Product } from '../models/product.model';
import {
  IProductRepository,
  SearchFilters,
} from './product.repository.interface';

@Injectable({
  providedIn: 'root',
})
export class MockProductRepository implements IProductRepository {
  private products: Product[] = [...MOCK_PRODUCTS];

  getAll(): Observable<Product[]> {
    return of([...this.products]).pipe(delay(500));
  }

  getById(id: number): Observable<Product | undefined> {
    const product = this.products.find((p) => p.id === id);
    return of(product).pipe(delay(300));
  }

  create(product: Omit<Product, 'id' | 'createdAt'>): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: Math.max(...this.products.map((p) => p.id)) + 1,
      createdAt: new Date(),
    };
    this.products.push(newProduct);
    return of(newProduct).pipe(delay(400));
  }

  update(
    id: number,
    product: Partial<Product>,
  ): Observable<Product | undefined> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...product };
      return of(this.products[index]).pipe(delay(400));
    }
    return of(undefined).pipe(delay(400));
  }

  delete(id: number): Observable<boolean> {
    const index = this.products.findIndex((p) => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(true).pipe(delay(300));
    }
    return of(false).pipe(delay(300));
  }

  getByCategory(category: string): Observable<Product[]> {
    const filtered = this.products.filter((p) => p.category === category);
    return of(filtered).pipe(delay(300));
  }

  getInStock(): Observable<Product[]> {
    const filtered = this.products.filter((p) => p.inStock);
    return of(filtered).pipe(delay(300));
  }

  search(query: string, filters?: SearchFilters): Observable<Product[]> {
    let filtered = this.products.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()),
    );

    if (filters?.category) {
      filtered = filtered.filter((p) => p.category === filters.category);
    }

    if (filters?.minPrice) {
      filtered = filtered.filter((p) => p.price >= filters.minPrice!);
    }

    if (filters?.maxPrice) {
      filtered = filtered.filter((p) => p.price <= filters.maxPrice!);
    }

    if (filters?.inStock !== undefined) {
      filtered = filtered.filter((p) => p.inStock === filters.inStock);
    }

    return of(filtered).pipe(delay(400));
  }
}
