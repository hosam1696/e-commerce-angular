import { Component, OnInit } from '@angular/core';

interface InavbarLink {
  title: string;
  href: string;
  active?: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navItems: InavbarLink[];
  constructor() { }

  ngOnInit() {
    this.navItems = [
      {'title': 'Home', 'href': 'home', 'active': false},
      {'title': 'Products', 'href': 'products', 'active': false},
      {'title': 'CheckOut', 'href': 'checkout', 'active': false},
      {'title': 'SignOut', 'href': 'signout', 'active': false}
    ];
  }

}
