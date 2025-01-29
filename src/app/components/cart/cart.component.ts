import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule, FormsModule]  
})
export class CartComponent implements OnInit {
  cartItems: { product: any, quantity: number }[] = [];
  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.calculateTotal();
  }

  updateQuantity(product: any, quantity: number): void {
    if (quantity < 1) {
      this.removeFromCart(product);
    } else {
      this.cartService.addToCart(product); 
    }
    this.calculateTotal();
  }

  removeFromCart(product: any): void {
    this.cartService.removeFromCart(product);
    this.calculateTotal();
  }

  calculateTotal(): void {
    this.totalQuantity = this.cartItems.reduce((total, item) => total + item.quantity, 0);
    this.totalPrice = this.cartItems.reduce((total, item) => total + (item.product.newPrice * item.quantity), 0);
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
    this.calculateTotal();
  }
}
