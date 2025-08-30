import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  loading = false;
  error: string | null = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.loading = true;
    this.error = null;

    // Direct service call - tightly coupled
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.loading = false;
      },
      error: (error) => {
        this.error = error.message;
        this.loading = false;
      },
    });
  }

  onSearch(event: Event): void {
    const query = (event.target as HTMLInputElement).value;

    if (query.trim()) {
      // Direct service call with complex parameters
      this.productService.searchProducts(query).subscribe({
        next: (products) => {
          this.products = products;
        },
        error: (error) => {
          this.error = error.message;
        },
      });
    } else {
      this.loadProducts();
    }
  }
}
