import { Component, OnInit, Input } from '@angular/core';
import {Product } from '../products';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
    @Input() products:Product[];
    @Input() productsLabel:string;
  constructor() { }

  ngOnInit() {
  }

}
