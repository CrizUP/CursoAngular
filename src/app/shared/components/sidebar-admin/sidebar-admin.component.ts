import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: 'home-admin', title: 'Home', icon: 'house', class: '' },
  { path: 'marcas', title: 'Marcas', icon: 'dashboard', class: '' },
  { path: 'users', title: 'Usuarios', icon: 'dashboard', class: '' }
];

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.scss']
})
export class SidebarAdminComponent implements OnInit {

  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu(): boolean {
    if (window.outerWidth > 991) {
      return false;
    }
    return true;
  }

}