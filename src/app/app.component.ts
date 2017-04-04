import {Component, ViewChild, OnInit, AfterViewInit} from '@angular/core';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//TODO: 1: (DONE) make the products list in row card desc
//TODO: 2: (DONE) inject service to entire app
//TODO: 3: (DONE) fix category router by using query string routing
//TODO: 4: (DONE) fetch a real photos of products
//TODO: 5: fix bugs in styles in navbar and so on
export class AppComponent implements OnInit, AfterViewInit {
  title = 'let\'s start templating the e-commerce app';
  hideAnchor:boolean = true;

  @ViewChild(NavbarComponent)
      ChildProducts: NavbarComponent ;

  constructor() {

  }
  ngOnInit() {
  }
  ngAfterViewInit() {
    //console.log(this.ChildNavbar.navItems);
      console.log("After view init", this.ChildProducts.navItems)
  }


    toTop(subtract:number):void {
        subtract = window.scrollY / 40;
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
