export interface Icategories {
  id: number;
  title: string;
  desc: string;
  image: string;

  link: string
}
export interface IproductCategories {
    categoryId: string;
    title: string;

}
export class Category {

  constructor(public id: number, public title: string, public desc: string, public image: string,public link: string) {
  }


}
export let ProductsCategories: IproductCategories[] = [
    {categoryId: '0', title:'All'},
    {categoryId: '1', title:'Meat'},
    {categoryId: '2', title:'SeaFood'},
    {categoryId: '3', title:'Diary'},
    {categoryId: '4', title:'Bakery'},
    {categoryId: '5', title:'Fruit'}
];
export let Categories:Category[] = [
  new Category(1, "Meat", "find the new models of your future car", "http://www.asianfoodchannel.com/application/files/thumbnails/sidebar_feature_small/6114/9084/9271/tn-shows-comfort-food.jpg","#"),
  new Category(2, "SeaFood", "new mobiles are shipped every day", "http://assets.epicurious.com/photos/5764583142e4a5ed66d1df6c/2:1/w_400%2Ch_200/seafood-paella.jpg", "#"),
  new Category(3, "Dairy", "choose your favourite labtop manifacturer", "http://cf.nearsay.com/sites/default/files/styles/400x200/public/content_images/bread_rolls_baked_goods.18339921.jpg?itok=phAdHmlb", "#"),
  new Category(4, "Bakery", "customise your own device with different styles and colors", "http://www.healthyfoodhouse.com/wp-content/uploads/2012/12/foods-to-boost-your-immune-system2.jpg","#")
];
