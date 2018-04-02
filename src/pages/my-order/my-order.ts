import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, App  } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { OrderDetailPage} from '../order-detail/order-detail';
import { Events } from 'ionic-angular';
import { SigninPage } from '../signin/signin';



@Component({
  selector: 'page-my-order',
  templateUrl: 'my-order.html'
})
export class MyOrderPage {

orders =[];
	

  constructor(public app: App, public events:Events,public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	
  	  this.orders = this.dataService.getDataOrder();

events.subscribe('neworder', (neworder) => {
    console.log('Welcome new neworder');
    // this.saveItem(newitem);
    console.log("Todo");

}); 



  }


  ionViewDidLoad() {
   
  }


  logOut(){
    this.app.getRootNav().setRoot(SigninPage);  }
  

  viewOrder(order) {
    this.navCtrl.push(OrderDetailPage, {
      order: order
    });


  }
}