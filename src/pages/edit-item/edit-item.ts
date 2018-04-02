import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';


@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html'
})
export class EditItemPage {
     itemName;
    price;
    description;
    category;
    url;
    quantity;
    myDate;
    menuid;
    userid;

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data, public navParams: NavParams,) {
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


  saveItem() {
    console.log(this.menuid);
  // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity ); 
var Menu = Parse.Object.extend("Menu");
var menu = new Menu();
menu.id = this.menuid;
menu.set("name", this.itemName);
menu.set("price", parseFloat(this.price));
menu.set("category", this.category);
menu.set("photoURL",this.url);
menu.set("description", this.description);
menu.save();

menu.save(null, {
  success: function(menu) {

//menu.set("objectId", this.menuid);

    // Execute any logic that should take place after the object is saved.
    alert('New object created with objectId: ' + menu.id);
  },
  error: function(menu, error) {
    // Execute any logic that should take place if the save fails.
    // error is a Parse.Error with an error code and message.
    alert('Failed to create new object, with error code: ' + error.message);
  }
});



  this.view.dismiss();

  }

  close() {
    this.view.dismiss();
  }

}