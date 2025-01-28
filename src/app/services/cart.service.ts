import { Injectable } from '@angular/core';
import { Product } from '../models/product.models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartItems: { product: Product, quantity: number }[] = [];

  getCartItems(){
    return this.cartItems
  }

  addToCart(product: Product){
    const existItem = this.cartItems.find(item => item.product.id === product.id) 
    if (existItem) {
      existItem.quantity+=1
    } else {
      this.cartItems.push({ product, quantity: 1})
    }
  }

  removeFromCart(product: Product) {
    const index = this.cartItems.findIndex(item => item.product.id === product.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }
  
  clearCart() {
    this.cartItems = [];
  }

}
