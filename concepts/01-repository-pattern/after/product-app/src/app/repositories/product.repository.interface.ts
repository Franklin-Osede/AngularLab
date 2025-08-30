import { Observable } from 'rxjs';
import { Product } from '../models/product.model';
import { InjectionToken } from '@angular/core';

// ✨ Repository Interface - Clean abstraction
export interface IProductRepository {
  getAll(): Observable<Product[]>;
  getById(id: number): Observable<Product | undefined>;
  create(product: Omit<Product, 'id' | 'createdAt'>): Observable<Product>;
  update(
    id: number,
    product: Partial<Product>,
  ): Observable<Product | undefined>;
  delete(id: number): Observable<boolean>;

  // Business logic methods
  getByCategory(category: string): Observable<Product[]>;
  getInStock(): Observable<Product[]>;
  search(query: string, filters?: SearchFilters): Observable<Product[]>;
}

// Search filters interface
export interface SearchFilters {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
}

// ✨ Injection Token for Repository
export const PRODUCT_REPOSITORY = new InjectionToken<IProductRepository>('ProductRepository');
