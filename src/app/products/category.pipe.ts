import {Pipe, PipeTransform} from '@angular/core';
import {ProductsCategories} from '../homepage/classes/categories';

@Pipe({
    name:'categorytype'
})

export class CategoryPipe implements PipeTransform{
    transform(value) {
        let newValue = parseInt(value);
        let allCategories = ProductsCategories.map(product=>product.title);
        return allCategories.filter((productTitle,index)=>index == newValue)
    }
}
