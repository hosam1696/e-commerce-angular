import { Component, OnInit } from '@angular/core';
// import {Product, getProducts, getProduct} from './products';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductsCategories, IproductCategories} from '../homepage/classes/categories';
import { ProductsService, Product} from '../app-services/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:Product[];
  productsCat: IproductCategories[] = ProductsCategories;
  productsLabel: string = 'all';

  constructor(private router:ActivatedRoute, private route:Router, private productsService: ProductsService) {

  }
    ngOnInit() {
        this.router.queryParams.subscribe(
            qString=>{
                    let category = qString['category'];
                    let filteredCategories = this.productsService.getProducts().filter((item:Product)=> item.categoryId== category);
                    console.log(qString, category);
                    if (category == 0 || category == undefined) {
                        this.products = this.productsService.getProducts();
                        this.productsLabel = '0';
                    } else {
                        this.products = filteredCategories;
                        this.productsLabel = filteredCategories[0].categoryId;
                    }
            }
        );


    }
    searchProducts(value) {
        this.products = this.productsService.getProducts().filter((item)=>item.title.toLowerCase().search(value) != -1);
        window.scrollTo(0, document.getElementById('full-shop').offsetTop)
    }
/*    showProducts(category, title): void	{
      this.scrollToTop(10);
      if (category == 'all') {
          this.products = this.productsService.getProducts();
      } else {
          this.products = this.productsService.getProducts().filter((item:Product)=> item.categoryId == category);
      }
        this.productsLabel = title
    }
*/
    filterProducts(category, event)	{
        let target = event.target;
        let targetClass = target.classList[0];

        let allLists = document.querySelectorAll("."+targetClass);

        for (let i=0;i<allLists.length;i++)
            allLists[i].classList.remove('active');
        target.classList.add('active');

        this.route.navigate(['/products'],	{
            queryParams:	{	category:	category.categoryId}
        });
        window.scrollTo(0, 61)
    }


    scrollToTop(subtract:number = 1){

      let scrollInterval= setInterval(function(){
               let windowScroll = window.scrollY;

               if (windowScroll > 0) {
                   windowScroll -= subtract;
               window.scrollTo(0, windowScroll);
               } else {
                   clearInterval(scrollInterval);
               }
           },5)

    }
}
