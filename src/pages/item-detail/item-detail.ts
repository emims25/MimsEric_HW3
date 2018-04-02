import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {

	   itemName;
    price;
    description;
    category;
    url;
    quantity=1;
    myDate;
    menuid;
    userid;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public dataService: Data ) {
  }

  ionViewDidLoad() {

    this.itemName = this.navParams.get('item').itemName;
    this.price = this.navParams.get('item').price;
    this.category = this.navParams.get('item').category;
     this.url = this.navParams.get('item').url;
     this.description = this.navParams.get('item').description;
     this.quantity = this.navParams.get('item').quantity;
     this.menuid = this.navParams.get('item').id;

       
     }
  
   
   saveOrder() {

  this.dataService.setOrderItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity, this.myDate, this.menuid, this.userid ); 
  this.view.dismiss(); 

  }

}
