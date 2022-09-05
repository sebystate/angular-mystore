import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }


  ngOnInit(): void {
    // Current route.
    const routeParams = this.route.snapshot.paramMap;
    // Product id from the current route.
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that corresponds with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  /**
   * Adds the given product to the cart and notifies the user of the operation.
   * @param product current product to add to the cart.
   */
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }


}
