import {Injectable } from '@angular/core';
export interface Product {
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
@Injectable()

export class ProductsService {


 products: Product[] = [
    {
        id: '1',
        categoryId: '1',
        title: 'Croissants',
        price: 0.5,
        isSpecial: true,
        imageL: 'http://www.wallpapermaiden.com/image/2016/12/23/lasagna-tomatoe-cheese-food-11072-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2016/12/23/lasagna-tomatoe-cheese-food-11072-thumb.jpg',
        desc: 'A	croissant	is	a	buttery,	flaky,	viennoiserie-pastry	named	for	its	well-known	crescent	shape.'
    },
    {
        id: '2',
        categoryId: '2',
        title: 'Pizza',
        price: 1.2,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/03/17/pizza-olive-tomato-sauce-vegetables-fast-food-food-14443-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/03/17/pizza-olive-tomato-sauce-vegetables-fast-food-food-14443-thumb.jpg',
        desc: 'Pizza	is	a	flatbread	generally	topped	with	tomato	sauce	and	cheese	and	baked	in	an	oven.'
    },
    {
        id: '3',
        categoryId: '3',
        title: 'Milk',
        price: 1.7,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/03/22/cake-desserts-food-14585-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/03/22/cake-desserts-food-14585-thumb.jpg',
        desc: 'Milk	is	a	pale	liquid	produced	by	the	mammary	glands	of	mammals'
    },
    {
        id: '4',
        categoryId: '1',
        title: 'Baguette/French	Bread',
        price: 1.5,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/03/27/meat-lemon-vegetables-food-14751-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/03/27/meat-lemon-vegetables-food-14751-thumb.jpg',
        desc: 'Great	eaten	fresh	from	oven.	Used	to	make	sub	sandwiches,	etc.'
    },
    {
        id: '5',
        categoryId: '3',
        title: 'Cream	Cheese',
        price: 2.35,
        isSpecial: false,
        imageL: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
        imageS: 'https://i1.wp.com/understandrussia.com/wp-content/uploads/2014/01/Kroshka-kartoshka.gif',
        desc: 'Cream	cheese	is	a	soft,	mild-tasting	fresh	cheese	with	a	high	fat	content.'
    },
    {
        id: '6',
        categoryId: '4',
        title: 'Pork	Tenderloin',
        price: 5.60,
        isSpecial: false,
        imageL: 'http://www.bellybytes.com/foodfacts/images/beet-greens.png',
        imageS: 'http://www.bellybytes.com/foodfacts/images/beet-greens.png',
        desc: 'The	pork	tenderloin,	in	some	countries	called	pork	fillet,	is	a	cut	of	pork.	'
    },
    {
        id: '7',
        categoryId: '4',
        title: 'Ribs,	Baby	Back',
        price: 4.85,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/01/24/cookies-chocolate-dessert-food-12468-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/01/24/cookies-chocolate-dessert-food-12468-thumb.jpg',
        desc: 'Pork	ribs	are	a	cut	of	pork	popular	in	North	American	and	Asian	cuisines.	'
    },
    {
        id: '8',
        categoryId: '4',
        title: 'Ground	Beef',
        price: 9.20,
        isSpecial: false,
        imageL: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
        imageS: 'http://www.bhmpics.com/thumbs/plum_fruit_4k-t2.jpg',
        desc: 'Ground	beef,	beef	mince,	minced	beef,	minced	meat	is	a	ground	meat	made	of	beef	that	has	been	finely	chopped	with	a	large	knife	or	a	meat	grinder.'
    },
    {
        id: '9',
        categoryId: '5',
        title: 'Tuna',
        price: 3.45,
        isSpecial: false,
        imageL: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
        imageS: 'http://www.bhmpics.com/thumbs/pear_fruits-t2.jpg',
        desc: 'A	tuna	is	a	saltwater	finfish	that	belongs	to	the	tribe	Thunnini,	a	sub-grouping	of	the	mackerel	family	-	which	together	with	the	tunas,	also	includes	the	bonitos,	ackerels,	and	Spanish	mackerels.'
    }, {
        id: '10',
        categoryId: '5',
        title: 'Salmon',
        price: 4.55,
        isSpecial: false,
        imageL: 'http://placehold.it/1110x480',
        imageS: 'http://placehold.it/270x171',
        desc: 'Salmon	is	the	common	name	for	several	species	of	ray-finned	fish	in	the	family	Salmonidae.'
    },
    {
        id: '11',
        categoryId: '5',
        title: 'Oysters',
        price: 7.80,
        isSpecial: false,
        imageL: 'http://www.aqmeal.com/images/about/diet-food.jpg',
        imageS: 'http://www.aqmeal.com/images/about/diet-food.jpg',
        desc: 'The	word	oyster	is	used	as	a	common	name	for	a	number	of	different	families	of	saltwater	clams,	bivalve	molluscs	that	live	in	marine	or	brackish	habitats.'
    }, {
        id: '12',
        categoryId: '5',
        title: 'Scalops',
        price: 2.70,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/02/15/egg-breakfast-vegetable-bagel-food-13360-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/02/15/egg-breakfast-vegetable-bagel-food-13360-thumb.jpg',
        desc: 'Scallop	is	a	common	name	that	is	primarily	applied	to	any	one	of	numerous	species	of	saltwater	clams	or	marine	bivalve	mollusks	in	the	taxonomic	family	Pectinidae,	the	scallops.'
    },
    {
        id: '13',
        categoryId: '6',
        title: 'Banana',
        price: 1.55,
        isSpecial: false,
        imageL: 'http://www.hdfinewallpapers.com/HDWallpapers/Thumb/Food-and-Drinks/Foods_Wallpaper_Download.jpg',
        imageS: 'http://www.hdfinewallpapers.com/HDWallpapers/Thumb/Food-and-Drinks/Foods_Wallpaper_Download.jpg',
        desc: 'The	banana	is	an	edible	fruit,	botanically	a	berry,	produced	by	several	kinds	of	large	herbaceous	flowering	plants	in	the	genus	Musa.'
    },
    {
        id: '14',
        categoryId: '6',
        title: 'Cucumber',
        price: 1.05,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2016/12/24/strawberries-fruits-close-up-food-11138-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2016/12/24/strawberries-fruits-close-up-food-11138-thumb.jpg',
        desc: 'Cucumber	is	a	widely	cultivated	plant	in	the	gourd	family,	Cucurbitaceae.	'
    },
    {
        id: '15',
        categoryId: '6',
        title: 'Apple',
        price: 0.80,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/01/27/sushi-rice-japanese-food-sesame-seeds-food-12573-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/01/27/sushi-rice-japanese-food-sesame-seeds-food-12573-thumb.jpg',
        desc: 'The	apple	tree	is	a	deciduous	tree	in	the	rose	family	best	known	for	its	sweet,	pomaceous	fruit,	the	apple.'
    },
    {
        id: '16',
        categoryId: '6',
        title: 'Lemon',
        price: 3.20,
        isSpecial: false,
        imageL: 'http://www.wallpapermaiden.com/image/2017/02/03/sandwich-cheese-vegetables-meat-bread-lunch-food-12878-thumb.jpg',
        imageS: 'http://www.wallpapermaiden.com/image/2017/02/03/sandwich-cheese-vegetables-meat-bread-lunch-food-12878-thumb.jpg',
        desc: 'The	lemon	is	a	species	of	small	evergreen	tree	native	to	Asia.'
    },
    {
        id: '17',
        categoryId: '6',
        title: 'Pear',
        price: 4.25,
        isSpecial: false,
        imageL: 'http://www.greekonthestreetbaltimore.com/wp-content/uploads/2017/01/slider6-270x170.jpg',
        imageS: 'http://www.greekonthestreetbaltimore.com/wp-content/uploads/2017/01/slider6-270x170.jpg',
        desc: 'The	pear	is	any	of	several	tree	and	shrub	species	of	genus	Pyrus,	in	the	family	Rosaceae.'
    }];

    getProducts() {
        return this.products;
    }

    getProduct(id: string): Product {

       return this.products.filter((product:Product)=> { return product.id == id})[0]
    }

}
