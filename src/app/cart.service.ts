import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }
  
  // array of Product items
  items: Product[] = [];

  /**
   * Appends a product {@link items}.
   * @param product product to append
   */
  addToCart(product: Product) {
    this.items.push(product);
  }

  /**
   * Collects the items users add to the cart.
   * @returns each items with its associated quantity
   */
  getItems() {
    return this.items;
  }

  /**
   * Empties the array {@link items}.
   * @returns the emptied array
   */
  clearCart() {
    this.items = [];
    return this.items;
  }

  /**
   * 
   * @returns shipping prices of items in the cart
   */
  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
