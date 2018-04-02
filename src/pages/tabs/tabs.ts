import { Component } from '@angular/core';

import { MyOrderPage } from '../my-order/my-order';
import { MenuPage } from '../menu/menu';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MenuPage;
  tab2Root = MyOrderPage;

  constructor() {

  }
}
