import {Component} from '@angular/core';

@Component({
  selector: 'app-inventory',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `
})
export class InventoryAppComponent {
  title = 'app';
}
