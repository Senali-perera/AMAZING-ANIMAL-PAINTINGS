import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import {MatCardModule} from '@angular/material/card';
import {CurrencyPipe, NgForOf} from "@angular/common";
import { FlexModule} from "@angular/flex-layout";


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

  constructor(private productService:ProductService){

  }
  ngOnInit() {
    this.productService.getProducts().subscribe(data =>{
      this.products = data;
    });
  }
}
