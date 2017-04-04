import { Component, OnInit } from '@angular/core';
import {Product } from '../app-services/products.service';
export	interface	CartItem	{
    product:	Product;
    count:		number;
    amount:	number;
}
export	class	Cart	{
    count:	number	=	0;
    amount:	number	=	0;
    items:	CartItem[]	=	[];
}
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    cart: Cart;

    constructor() {
    }

    ngOnInit() {
    }

    findItem(id: string): CartItem {
        for (let i = 0; i < this.cart.items.length; i++) {
            if (this.cart.items[i].product.id === id) {
                return this.cart.items[i];
            }
        }
        return null;
    }

    addProduct(product: Product) {
        //	Find	CartItem	in	items
        let item: CartItem = this.findItem( product.id );
        //	Check	was	it	found?
        if (item) {
            //	Item	was	found.
            //	Increase	the	count	of	the	same	products
            item.count++;
            //	Increase	amount	of	the	same	products
            item.amount += product.price;
        } else {
            //	Item	was	not	found.
            // 	Create	the	cart	item
            item = {
                product: product,
                count: 1,
                amount: product.price
            };									//	Add	item	to	items
            this.cart.items.push( item );
        }
        //	Increase	count	in	the	cart
        this.cart.count++;
        //  	Increase	amount	in	the	cart
        this.cart.amount += product.price;
    }

    remove(item:any) {

    }
    removeProduct(product: Product) {
        //	Find	CartItem	in	items
        let item: CartItem = this.findItem( product.id );
        //	Check	is	item	found?
        if (item) {
            //	Decrease	the	count
            item.count--;
        }

        //	Check	was	that	the	last	product?
        if (!item.count) {
            //	It	was	last	product
            // 	Delete	item	from	items
            this.remove( item );
        }
        //	Decrease	count	in	the	cart
        this.cart.count--;
        //	Decrease	amount	in	the	cart
        this.cart.amount -= product.price;
    }
    removeItem(item:	CartItem)	{
        //	Delete	item	from	items
        this.remove(item);
        //	Decrease	count	in	the	cart
        this.cart.count	-=	item.count;
        //	Decrease	amount	in	the	cart
        this.cart.amount	-=	item.amount;
    }


}


