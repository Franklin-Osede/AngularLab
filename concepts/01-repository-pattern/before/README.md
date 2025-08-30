# 🚨 Legacy Code - Before Repository Pattern

## 📋 Overview

This is the **BEFORE** implementation showing common issues with direct service calls in Angular applications.

## 🚨 Problems with This Approach

### 1. **Tightly Coupled**

- Direct dependency on HttpClient
- Hardcoded API URLs
- Difficult to change data source

### 2. **Hard to Test**

- Need to mock HttpClient
- Complex test setup
- Business logic mixed with data access

### 3. **Poor Maintainability**

- Business logic in services
- Violates Single Responsibility Principle
- Difficult to reuse across components

### 4. **Limited Scalability**

- No abstraction layer
- Hard to switch data sources
- Complex error handling

## 🏗️ Architecture Issues

```typescript
// ❌ PROBLEM: Direct service calls
export class ProductService {
  private apiUrl = "https://api.example.com/products"; // Hardcoded

  constructor(private http: HttpClient) {} // Tightly coupled

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl); // Direct API call
  }
}
```

## 🧪 Testing Problems

```typescript
// ❌ PROBLEM: Complex test setup
describe("ProductService", () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Need to mock HTTP calls for every test
});
```

## 🚀 Running the App

```bash
cd product-app
npm install
ng serve
```

Visit `http://localhost:4200` to see the legacy implementation.

## 📊 What You'll See

- Products loaded from mock data
- Search functionality
- Loading states
- Error handling

## 🎯 Next Steps

Compare this with the **AFTER** implementation to see how Repository Pattern solves these issues.

---

_Ready to see the clean solution? Check out the `../after` folder! 🚀_
