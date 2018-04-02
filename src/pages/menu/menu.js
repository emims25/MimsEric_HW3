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
import { ModalController, NavController, NavParams } from 'ionic-angular';
import { Data } from '../../providers/data';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { EditItemPage } from '../edit-item/edit-item';
var MenuPage = /** @class */ (function () {
    function MenuPage(navParams, navCtrl, modalCtrl, dataService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.items = this.dataService.getDataMenu();
        console.log(this.items.length);
        console.log("get it");
    }
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.addItem = function () {
        this.navCtrl.push(AddItemPage);
    };
    MenuPage.prototype.viewItem = function (item) {
        this.navCtrl.push(ItemDetailPage, {
            item: item
        });
    };
    MenuPage.prototype.editItem = function (slidingitem) {
        this.navCtrl.push(EditItemPage, {
            edit: slidingitem
        });
    };
    MenuPage.prototype.deleteItem = function (item) {
        this.dataService.deleteItem(item);
    };
    MenuPage.prototype.logOut = function () {
        this.dataSer;
    };
    MenuPage = __decorate([
        Component({
            selector: 'page-menu',
            templateUrl: 'menu.html'
        }),
        __metadata("design:paramtypes", [NavParams, NavController, ModalController, Data])
    ], MenuPage);
    return MenuPage;
}());
export { MenuPage };
//# sourceMappingURL=menu.js.map