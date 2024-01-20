import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {Product} from "../../models/product";
import {MatCardModule} from '@angular/material/card';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports:[
    MatCardModule,
    NgForOf
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
