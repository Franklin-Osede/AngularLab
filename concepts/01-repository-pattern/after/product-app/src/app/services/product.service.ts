import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../models/product.model';
import {
  IProductRepository,
  PRODUCT_REPOSITORY,
  SearchFilters,
} from '../repositories/product.repository.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY) private productRepository: IProductRepository,
  ) {}

  // ✨ Clean service methods - delegates to repository
  getProducts(): Observable<Product[]> {
    return this.productRepository.getAll();
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.productRepository.getById(id);
  }

  createProduct(
    product: Omit<Product, 'id' | 'createdAt'>,
  ): Observable<Product> {
    return this.productRepository.create(product);
  }

  updateProduct(
    id: number,
    product: Partial<Product>,
  ): Observable<Product | undefined> {
    return this.productRepository.update(id, product);
  }

  deleteProduct(id: number): Observable<boolean> {
    return this.productRepository.delete(id);
  }

  // Business logic methods
  getProductsByCategory(category: string): Observable<Product[]> {
    return this.productRepository.getByCategory(category);
  }

  getProductsInStock(): Observable<Product[]> {
    return this.productRepository.getInStock();
  }

  searchProducts(
    query: string,
    filters?: SearchFilters,
  ): Observable<Product[]> {
    return this.productRepository.search(query, filters);
  }

  // ✨ Additional business logic can be added here
  getExpensiveProducts(minPrice: number = 100): Observable<Product[]> {
    return this.productRepository.getAll().pipe(
      // Add business logic here
      map((products) => products.filter((p) => p.price >= minPrice)),
    );
  }

  getProductsByPriceRange(
    minPrice: number,
    maxPrice: number,
  ): Observable<Product[]> {
    return this.productRepository.search('', { minPrice, maxPrice });
  }
}
