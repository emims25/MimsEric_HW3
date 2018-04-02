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
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
import { Parse } from 'parse';
var AddItemPage = /** @class */ (function () {
    function AddItemPage(navCtrl, view, dataService) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.quantity = 1;
    }
    AddItemPage.prototype.saveItem = function () {
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
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage = __decorate([
        Component({
            selector: 'page-add-item',
            templateUrl: 'add-item.html'
        }),
        __metadata("design:paramtypes", [NavController, ViewController, Data])
    ], AddItemPage);
    return AddItemPage;
}());
export { AddItemPage };
//# sourceMappingURL=add-item.js.map