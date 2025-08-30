import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Product } from "../before/product-app/src/app/models/product.model";
import { ProductService } from "../before/product-app/src/app/services/product.service";

describe("ProductService (Legacy - BEFORE)", () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], // Need HTTP testing module
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verify no outstanding requests
  });

  describe("getProducts", () => {
    it("should fetch products from API", () => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Test Product",
          price: 100,
          description: "Test Description",
          category: "Test Category",
          inStock: true,
          createdAt: new Date(),
        },
      ];

      service.getProducts().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      // Need to mock HTTP request
      const req = httpMock.expectOne("https://api.example.com/products");
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });

    it("should handle API errors", () => {
      const errorMessage = "API Error";

      service.getProducts().subscribe({
        next: () => fail("should have failed"),
        error: (error) => {
          expect(error.message).toBe(errorMessage);
        },
      });

      const req = httpMock.expectOne("https://api.example.com/products");
      req.error(new ErrorEvent("Network error", { message: errorMessage }));
    });
  });

  describe("getProductById", () => {
    it("should fetch single product by ID", () => {
      const mockProduct: Product = {
        id: 1,
        name: "Test Product",
        price: 100,
        description: "Test Description",
        category: "Test Category",
        inStock: true,
        createdAt: new Date(),
      };

      service.getProductById(1).subscribe((product) => {
        expect(product).toEqual(mockProduct);
      });

      const req = httpMock.expectOne("https://api.example.com/products/1");
      expect(req.request.method).toBe("GET");
      req.flush(mockProduct);
    });
  });

  describe("searchProducts", () => {
    it("should search products with query", () => {
      const mockProducts: Product[] = [
        {
          id: 1,
          name: "Laptop",
          price: 1000,
          description: "High performance laptop",
          category: "Electronics",
          inStock: true,
          createdAt: new Date(),
        },
      ];

      service.searchProducts("laptop").subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(
        "https://api.example.com/products/search?q=laptop"
      );
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });

    it("should search products with filters", () => {
      const mockProducts: Product[] = [];

      service
        .searchProducts("laptop", "Electronics", 500, 1500)
        .subscribe((products) => {
          expect(products).toEqual(mockProducts);
        });

      const req = httpMock.expectOne(
        "https://api.example.com/products/search?q=laptop&category=Electronics&minPrice=500&maxPrice=1500"
      );
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });
  });

  describe("getProductsByCategory", () => {
    it("should fetch products by category", () => {
      const mockProducts: Product[] = [];

      service.getProductsByCategory("Electronics").subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(
        "https://api.example.com/products?category=Electronics"
      );
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });
  });

  describe("getProductsInStock", () => {
    it("should fetch products in stock", () => {
      const mockProducts: Product[] = [];

      service.getProductsInStock().subscribe((products) => {
        expect(products).toEqual(mockProducts);
      });

      const req = httpMock.expectOne(
        "https://api.example.com/products?inStock=true"
      );
      expect(req.request.method).toBe("GET");
      req.flush(mockProducts);
    });
  });

  describe("createProduct", () => {
    it("should create new product", () => {
      const newProduct = {
        name: "New Product",
        price: 200,
        description: "New Description",
        category: "New Category",
        inStock: true,
      };

      const createdProduct: Product = {
        id: 1,
        ...newProduct,
        createdAt: new Date(),
      };

      service.createProduct(newProduct).subscribe((product) => {
        expect(product).toEqual(createdProduct);
      });

      const req = httpMock.expectOne("https://api.example.com/products");
      expect(req.request.method).toBe("POST");
      expect(req.request.body).toEqual(newProduct);
      req.flush(createdProduct);
    });
  });

  describe("updateProduct", () => {
    it("should update existing product", () => {
      const updateData = { name: "Updated Product" };
      const updatedProduct: Product = {
        id: 1,
        name: "Updated Product",
        price: 100,
        description: "Test Description",
        category: "Test Category",
        inStock: true,
        createdAt: new Date(),
      };

      service.updateProduct(1, updateData).subscribe((product) => {
        expect(product).toEqual(updatedProduct);
      });

      const req = httpMock.expectOne("https://api.example.com/products/1");
      expect(req.request.method).toBe("PUT");
      expect(req.request.body).toEqual(updateData);
      req.flush(updatedProduct);
    });
  });

  describe("deleteProduct", () => {
    it("should delete product", () => {
      service.deleteProduct(1).subscribe((result) => {
        expect(result).toBeUndefined();
      });

      const req = httpMock.expectOne("https://api.example.com/products/1");
      expect(req.request.method).toBe("DELETE");
      req.flush(null);
    });
  });
});
