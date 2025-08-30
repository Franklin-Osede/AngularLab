import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { MOCK_PRODUCTS } from '../data/mock-products';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // Hardcoded API URL - tightly coupled
  private apiUrl = 'https://api.example.com/products';

  constructor(private http: HttpClient) {}

  // Direct API calls - hard to test and maintain
  getProducts(): Observable<Product[]> {
    // Simulate API call with delay
    return of(MOCK_PRODUCTS).pipe(delay(500));
  }

  getProductById(id: number): Observable<Product> {
    const product = MOCK_PRODUCTS.find((p) => p.id === id);
    return of(product!).pipe(delay(300));
  }

  createProduct(
    product: Omit<Product, 'id' | 'createdAt'>,
  ): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: Math.max(...MOCK_PRODUCTS.map((p) => p.id)) + 1,
      createdAt: new Date(),
    };
    return of(newProduct).pipe(delay(400));
  }

  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    const index = MOCK_PRODUCTS.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PRODUCTS[index] = { ...MOCK_PRODUCTS[index], ...product };
    }
    return of(MOCK_PRODUCTS[index]).pipe(delay(400));
  }

  deleteProduct(id: number): Observable<void> {
    const index = MOCK_PRODUCTS.findIndex((p) => p.id === id);
    if (index !== -1) {
      MOCK_PRODUCTS.splice(index, 1);
    }
    return of(void 0).pipe(delay(300));
  }

  // Business logic mixed with data access - violates Single Responsibility
  getProductsByCategory(category: string): Observable<Product[]> {
    const filtered = MOCK_PRODUCTS.filter((p) => p.category === category);
    return of(filtered).pipe(delay(300));
  }

  getProductsInStock(): Observable<Product[]> {
    const filtered = MOCK_PRODUCTS.filter((p) => p.inStock);
    return of(filtered).pipe(delay(300));
  }

  // Complex query with multiple parameters - hard to maintain
  searchProducts(
    query: string,
    category?: string,
    minPrice?: number,
    maxPrice?: number,
  ): Observable<Product[]> {
    let filtered = MOCK_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase()),
    );

    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= minPrice);
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= maxPrice);
    }

    return of(filtered).pipe(delay(400));
  }
}
