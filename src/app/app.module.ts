import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RepeatPipe } from './navbar/repeat.pipe';
import { CategoryPipe } from './products/category.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { ProductpageComponent } from './products/productpage/productpage.component';
import { SignoutComponent } from './signout/signout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { ProductComponent } from './products/products-list/product/product.component';
import { CategoryService } from './app-services/category.service';
import { ProductsService } from './app-services/products.service';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RepeatPipe,
    CategoryPipe,
    HomepageComponent,
    ProductsComponent,
    ProductpageComponent,
    SignoutComponent,
    CheckoutComponent,
    ProductsListComponent,
    ProductComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'', redirectTo:'home', pathMatch:'full'},
      {path:'home', component: HomepageComponent},
      {path:'products', component: ProductsComponent},
      {path:'products/:id', component: ProductsComponent},
        {path: 'products/product/:id', component:ProductpageComponent},
        {path: 'signout', component: SignoutComponent},
        {path: 'checkout', component: CheckoutComponent},
        {path:'cart', component: CartComponent}
    ])
  ],
  providers: [CategoryService, ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
