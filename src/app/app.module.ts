import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { IonicStorageModule } from '@ionic/storage';


import { MyOrderPage } from '../pages/my-order/my-order';
import { OrderDetailPage } from '../pages/order-detail/order-detail';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { AddItemPage } from '../pages/add-item/add-item';
import { EditItemPage } from '../pages/edit-item/edit-item';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Data } from '../providers/data';

@NgModule({
  declarations: [
    MyApp,
    MyOrderPage,
    OrderDetailPage,
    MenuPage,
    TabsPage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage,
    SigninPage,
    SignupPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyOrderPage,
    OrderDetailPage,
    MenuPage,
    TabsPage,
    AddItemPage,
    EditItemPage,
    ItemDetailPage,
    SigninPage,
    SignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Data
  ]})
export class AppModule {}
