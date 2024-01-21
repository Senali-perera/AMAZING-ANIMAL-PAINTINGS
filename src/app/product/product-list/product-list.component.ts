import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import {MatCardModule} from '@angular/material/card';
import {CurrencyPipe, NgForOf} from "@angular/common";
import { FlexModule } from "@angular/flex-layout";
import {CartService} from "../../cart/cart.service";
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    CurrencyPipe,
    FlexModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = []

  constructor(private productService:ProductService,
              private cartService: CartService,
              private snackBar: MatSnackBar){

  }
  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });
  }

  addToCart(product:Product): void{
    this.cartService.addToCart(product).subscribe({
      next: ()=>{
        this.snackBar.open("Product Added to Cart!", "",{
          duration:2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'
        });
      }
    });
  }
}
