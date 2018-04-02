import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order-detail',
  templateUrl: 'order-detail.html',
})
export class OrderDetailPage {

    itemName;
    price;
    description;
    category;
    url;
    quantity;
    myDate;

  constructor(public navCtrl: NavController, public navParams: NavParams,public view: ViewController) {
  }

  ionViewDidLoad() {
  	this.itemName = this.navParams.get('order').itemName;
    this.price = this.navParams.get('order').price;
    this.category = this.navParams.get('order').category;
     this.url = this.navParams.get('order').url;
     this.description = this.navParams.get('order').description;
     this.quantity = this.navParams.get('order').quantity;
      this.myDate = this.navParams.get('order').myDate;

       
   
  }

    close() {
    this.view.dismiss();
  }

}
