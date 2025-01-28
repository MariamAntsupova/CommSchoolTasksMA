import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from '../../services/products-data.service';
import { Product } from '../../models/product.models/product.model';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service'; 

@Component({
  selector: 'app-products-list',
  standalone: false,
  
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  selectedCategory: string = '';

  constructor(
    private productsDataService: ProductsDataService,
    private cartService: CartService, 
    private router: Router
  ) {}

  getProducts(): void {
    this.products = this.productsDataService.getProducts();
    this.filteredProducts = this.products;
  }

  ngOnInit(): void {
    this.getProducts();
  }

  filterProducts(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product => product.category === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
    }
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);  
    alert(`${product.name} has been added to your cart!`);
  }

  goToProductDetail(product: Product): void {
    this.router.navigate(['/product-detail', product.id]);
  }
}
