import { Component, forwardRef, Inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingCosts;

  constructor(
    @Inject(forwardRef(() => CartService)) private cartService: CartService
  ) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}
