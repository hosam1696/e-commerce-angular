import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../app-services/products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
    product: Product ;
  constructor(private pageLink:ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit() {
    this.pageLink.params.subscribe((params)=>{this.product = this.productsService.getProduct(params['id'].toString())});

    // print the path of the page relative to the absolute home path
     this.pageLink.url.subscribe((url)=>{let myUrl = url.map(x=>x.path); console.log(myUrl.toString().replace(/,/g,'/'))});
  }

}
