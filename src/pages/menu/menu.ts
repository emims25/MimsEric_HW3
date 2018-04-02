import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, App } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
import { SigninPage } from '../signin/signin';
import { Parse } from 'parse';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

	items =[];
	

  constructor(public app: App, public navParams: NavParams, public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
 	
  	  this.items = this.dataService.getDataMenu();
      console.log(this.items.length);
      console.log("get it");
  }


  ionViewDidLoad() {
   
  }
   ionViewWillEnter(){
    this.items = [];
    this.items = this.dataService.getDataMenu();
        
  }

  addItem(){
  	this.navCtrl.push(AddItemPage);
  }

  viewItem(item) {
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
}

editItem(item){
    this.navCtrl.push(EditItemPage, {
      item: item
    });
  }

    deleteItem(item) {
      
      console.log(item.id);
     var menu = Parse.Object.extend("Menu");
var query = new Parse.Query(menu);
query.get(item.id, {
  success: function(item) {
    // The object was retrieved successfully.
    item.destroy({});
     this.items = this.dataService.getDataMenu();
  },
  error: function(object, error) {
    // The object was not retrieved successfully.
    // error is a Parse.Error with an error code and description.
  }
});
    }



  logOut(){
    this.app.getRootNav().setRoot(SigninPage);  }


}