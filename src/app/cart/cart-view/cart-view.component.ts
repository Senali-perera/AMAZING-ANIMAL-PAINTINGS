import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../../models/product";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems = data
    })
  }
}
