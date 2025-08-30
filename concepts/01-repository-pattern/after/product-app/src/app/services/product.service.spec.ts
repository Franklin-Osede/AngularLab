import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { Product } from '../models/product.model';
import {
  IProductRepository,
  PRODUCT_REPOSITORY,
} from '../repositories/product.repository.interface';
import { ProductService } from './product.service';

describe('ProductService (Repository Pattern - AFTER)', () => {
  let service: ProductService;
  let mockRepository: jasmine.SpyObj<IProductRepository>;

  beforeEach(() => {
    // Create spy object for repository interface
    mockRepository = jasmine.createSpyObj('IProductRepository', [
      'getAll',
      'getById',
      'create',
      'update',
      'delete',
      'getByCategory',
      'getInStock',
      'search',
    ]);

    TestBed.configureTestingModule({
      providers: [
        ProductService,
        { provide: PRODUCT_REPOSITORY, useValue: mockRepository },
        provideZonelessChangeDetection(),
      ],
    });
    service = TestBed.inject(ProductService);
  });

  describe('getProducts', () => {
    it('should get products from repository', () => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: 'Test Product',
          price: 100,
          description: 'Test Description',
          category: 'Test Category',
          inStock: true,
          createdAt: new Date(),
        },
      ];

      mockRepository.getAll.and.returnValue(of(mockProducts));

      service.getProducts().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      expect(mockRepository.getAll).toHaveBeenCalled();
    });
  });

  describe('getProductById', () => {
    it('should get product by ID from repository', () => {
      const mockProduct: Product = {
        id: 1,
        name: 'Test Product',
        price: 100,
        description: 'Test Description',
        category: 'Test Category',
        inStock: true,
        createdAt: new Date(),
      };

      mockRepository.getById.and.returnValue(of(mockProduct));

      service.getProductById(1).subscribe((product) => {
        expect(product).toEqual(mockProduct);
      });

      expect(mockRepository.getById).toHaveBeenCalledWith(1);
    });
  });

  describe('getExpensiveProducts', () => {
    it('should filter expensive products from all products', () => {
      const allProducts: Product[] = [
        {
          id: 1,
          name: 'Cheap Product',
          price: 50,
          description: 'Cheap',
          category: 'Test',
          inStock: true,
          createdAt: new Date(),
        },
        {
          id: 2,
          name: 'Expensive Product',
          price: 200,
          description: 'Expensive',
          category: 'Test',
          inStock: true,
          createdAt: new Date(),
        },
      ];

      mockRepository.getAll.and.returnValue(of(allProducts));

      service.getExpensiveProducts(100).subscribe((products) => {
        expect(products.length).toBe(1);
        expect(products[0].name).toBe('Expensive Product');
      });

      expect(mockRepository.getAll).toHaveBeenCalled();
    });
  });

  describe('searchProducts', () => {
    it('should search products via repository', () => {
      const mockProducts: Product[] = [];
      const searchQuery = 'laptop';
      const filters = { category: 'Electronics', minPrice: 500 };

      mockRepository.search.and.returnValue(of(mockProducts));

      service.searchProducts(searchQuery, filters).subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      expect(mockRepository.search).toHaveBeenCalledWith(searchQuery, filters);
    });
  });

  describe('createProduct', () => {
    it('should create product via repository', () => {
      const newProduct = {
        name: 'New Product',
        price: 200,
        description: 'New Description',
        category: 'New Category',
        inStock: true,
      };

      const createdProduct: Product = {
        id: 1,
        ...newProduct,
        createdAt: new Date(),
      };

      mockRepository.create.and.returnValue(of(createdProduct));

      service.createProduct(newProduct).subscribe((product) => {
        expect(product).toEqual(createdProduct);
      });

      expect(mockRepository.create).toHaveBeenCalledWith(newProduct);
    });
  });

  describe('updateProduct', () => {
    it('should update product via repository', () => {
      const updateData = { name: 'Updated Product' };
      const updatedProduct: Product = {
        id: 1,
        name: 'Updated Product',
        price: 100,
        description: 'Test Description',
        category: 'Test Category',
        inStock: true,
        createdAt: new Date(),
      };

      mockRepository.update.and.returnValue(of(updatedProduct));

      service.updateProduct(1, updateData).subscribe((product) => {
        expect(product).toEqual(updatedProduct);
      });

      expect(mockRepository.update).toHaveBeenCalledWith(1, updateData);
    });
  });

  describe('deleteProduct', () => {
    it('should delete product via repository', () => {
      mockRepository.delete.and.returnValue(of(true));

      service.deleteProduct(1).subscribe((result) => {
        expect(result).toBe(true);
      });

      expect(mockRepository.delete).toHaveBeenCalledWith(1);
    });
  });
});
