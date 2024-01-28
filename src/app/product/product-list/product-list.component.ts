import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import {MatCardModule} from '@angular/material/card';
import {CurrencyPipe, NgForOf} from "@angular/common";
import { FlexModule } from "@angular/flex-layout";
import {CartService} from "../../cart/cart.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf,
    CurrencyPipe,
    FlexModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products: Product[] = []
  filteredProducts: Product[] = [];
  sortOrder: string = ""

  constructor(private productService:ProductService,
              private cartService: CartService,
              private snackBar: MatSnackBar){

  }
  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
      this.filteredProducts = data;
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

  applyFilter(event: Event): void{
    let searchTerm = (event.target as HTMLInputElement).value;
    searchTerm = searchTerm.toLowerCase();

    this.filteredProducts = this.products.filter(product => product.name.toLowerCase().includes(searchTerm));

    this.sortProducts(this.sortOrder);
  }
  sortProducts(sortValue:string){
    this.sortOrder = sortValue;

    if(this.sortOrder === "priceLowHigh"){
      this.filteredProducts.sort((a,b) => a.price - b.price)
    }else if(this.sortOrder === "priceHighLow"){
      this.filteredProducts.sort((a,b) => b.price - a.price)
    }
  }
}
