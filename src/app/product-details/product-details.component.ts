import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Injectable()
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product;

  constructor(@Inject(ActivatedRoute) private route: ActivatedRoute,
              @Inject(CartService) private cartService: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get('productId')];
    })
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
