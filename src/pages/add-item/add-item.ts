import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

  itemName;
  price;
  description;
  category;
  url;
  quantity=1;

  constructor(public navCtrl: NavController, public view: ViewController, public dataService: Data) {

  }

  saveItem() {

  // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity ); 
var Menu = Parse.Object.extend("Menu");
var menu = new Menu();

menu.set("name", this.itemName);
menu.set("price", parseFloat(this.price));
menu.set("category", this.category);
menu.set("photoURL",this.url);
menu.set("description", this.description);

menu.save(null, {
  success: function(menu) {
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