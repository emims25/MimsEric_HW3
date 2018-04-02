var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';
var EditItemPage = /** @class */ (function () {
    function EditItemPage(navCtrl, view, dataService, navParams) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.navParams = navParams;
        this.quantity = 1;
    }
    EditItemPage.prototype.ionViewDidLoad = function () {
        this.itemName = this.navParams.get('item').itemName;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.url = this.navParams.get('item').url;
        this.description = this.navParams.get('item').description;
        this.quantity = this.navParams.get('item').quantity;
        this.menuid = this.navParams.get('item').id;
    };
    EditItemPage.prototype.saveItem = function () {
        // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity ); 
        var Menu = Parse.Object.extend("Menu");
        var menu = new Menu();
        menu.set("name", this.itemName);
        menu.set("price", parseFloat(this.price));
        menu.set("category", this.category);
        menu.set("photoURL", this.url);
        menu.set("description", this.description);
        menu.save(null, {
            success: function (menu) {
                // Execute any logic that should take place after the object is saved.
                alert('New object created with objectId: ' + menu.id);
            },
            error: function (menu, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
        this.view.dismiss();
    };
    EditItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    EditItemPage = __decorate([
        Component({
            selector: 'page-edit-item',
            templateUrl: 'edit-item.html'
        }),
        __metadata("design:paramtypes", [NavController, ViewController, Data, NavParams])
    ], EditItemPage);
    return EditItemPage;
}());
export { EditItemPage };
//# sourceMappingURL=edit-item.js.map