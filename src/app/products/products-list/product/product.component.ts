import { Component, OnInit, Input } from '@angular/core';
interface Product {
    id: string;					//	Ref	on	category	belongs	to
    categoryId: string;
    //	The	title
    title: string;
    //	Price
    price: number;
    //	Mark	product	with	specialproce
    isSpecial: boolean;
    //	Description
    desc: string;
    //	Path	to	small	image
    imageS: string;
    //	Path	to	large	image;
    imageL: string;
}
@Component({
  selector: 'app-single-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
    @Input() product:Product;

  constructor() { }

  ngOnInit() {
  }

}
