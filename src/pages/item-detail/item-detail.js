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
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';
/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = /** @class */ (function () {
    function ItemDetailPage(navCtrl, navParams, view, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.dataService = dataService;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.itemName = this.navParams.get('item').itemName;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.url = this.navParams.get('item').url;
        this.description = this.navParams.get('item').description;
        this.quantity = this.navParams.get('item').quantity;
        this.menuid = this.navParams.get('item').id;
    };
    ItemDetailPage.prototype.saveOrder = function () {
        this.dataService.setOrderItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity, this.myDate, this.menuid, this.userid);
        this.view.dismiss();
    };
    ItemDetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-item-detail',
            templateUrl: 'item-detail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, Data])
    ], ItemDetailPage);
    return ItemDetailPage;
}());
export { ItemDetailPage };
//# sourceMappingURL=item-detail.js.map