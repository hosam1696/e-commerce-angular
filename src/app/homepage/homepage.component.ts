import { Component, OnInit } from '@angular/core';
import {Category, Categories} from './classes/categories';
import {Sliders, SliderClass} from './classes/slider';
import {Router} from '@angular/router';
import {CategoryService } from '../app-services/category.service';
import {ProductsService} from '../app-services/products.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  categories: Category[];
  sliders: SliderClass[];
  constructor(private router:Router, private categoryService:CategoryService, private productsServices: ProductsService) {
    console.log(this.categoryService.getHomeCategories());
  }

  ngOnInit() {
    this.categories = Categories;
    this.sliders = Sliders;
  }
    filterProducts(category:	Category)	{

      this.router.navigate(['/products'],	{
        queryParams:	{	category:	category.id}
      });
        window.scrollTo(0, 61)
    }

    randomProducts(number:number=4) {
        return this.productsServices.getProducts().slice(0,number);
    }
}
