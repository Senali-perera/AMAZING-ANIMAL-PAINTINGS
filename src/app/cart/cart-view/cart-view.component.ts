import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Product} from "../../models/product";
import {MatCardModule} from "@angular/material/card";
import {MatList, MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {CurrencyPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [
    MatCardModule,
    MatList,
    MatListModule,
    CurrencyPipe,
    NgForOf,
    MatButtonModule
  ],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe(data=>{
      this.cartItems = data;
      this.totalPrice = this.getTotalPrice();
    })
  }

  getTotalPrice():number{
    let total = 0;
    for(let item of this.cartItems){
      total += item.price;
    }
    return total;
  }

  clearCart():void{
    this.cartService.clearCart().subscribe();
  }

  checkout():void{
    this.cartService.checkout(this.cartItems).subscribe();
  }
}
