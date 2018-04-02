var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';
import { Parse } from 'parse';
import { Events } from 'ionic-angular';
var Data = /** @class */ (function () {
    function Data(Storage, events) {
        this.Storage = Storage;
        this.events = events;
        this.parseAppId = 'Y8mOEJOF5aUVzWSAl1DiRLZh6rhPAQK6jTfmb7kC';
        this.parseJSKey = 'weKfuZIqQeLZIBEb0T7zz9j3Uit8idP3s2RtjHuO';
        this.parseServerUrl = 'https://parseapi.back4app.com/';
        Parse.initialize(this.parseAppId, this.parseJSKey);
        Parse.serverURL = this.parseServerUrl;
        console.log('Initiated Parse');
        var Menu = Parse.Object.extend('Menu');
        var query = new Parse.Query(Menu);
        query.limit(1000);
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
        });
    }
    Data.prototype.setMenuItem = function (itemName, price, description, category, url, quantity) {
        //   	let item={
        //   	itemName : itemName,
        // 	price: price,
        //     description: description,
        //     category: category,
        //     url: url,
        //     quantity: quantity= 1,
        // };
        // this.saveMenuItem(item);
    };
    Data.prototype.getDataMenu = function () {
        //return this.Storage.get('items');
        // return this.items;
        var Menu = Parse.Object.extend('Menu');
        var query = new Parse.Query(Menu);
        query.limit(1000);
        var items = [];
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
            for (var i = menus.length - 1; i >= 0; i--) {
                var mymenu = {
                    itemName: menus[i].get("name"),
                    price: menus[i].get("price"),
                    category: menus[i].get("category"),
                    url: menus[i].get("photoURL"),
                    description: menus[i].get("description"),
                    id: menus[i].id
                };
                items.push(mymenu);
            }
            console.log(items.length);
            return items;
        }, function (error) {
            // reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.saveMenuItem = function (item) {
        // this.items.push(item);
        //  let newData = JSON.stringify(item);
        //  this.Storage.set('items', newData);
    };
    Data.prototype.setOrderItem = function (itemName, price, description, category, url, quantity, myDate, menuid, userid) {
        var order = {
            itemName: itemName,
            price: price,
            description: description,
            category: category,
            url: url,
            quantity: quantity,
            myDate: myDate,
            menuid: menuid,
            userid: userid,
        };
        this.saveOrderItem(order);
    };
    Data.prototype.saveOrderItem = function (order) {
        // this.orders.push(order);
        // let newData = JSON.stringify(order);
        // this.Storage.set('orders', newData);
        var Order = Parse.Object.extend("Order");
        var o = new Order();
        console.log(order.price);
        console.log(order.quantity);
        o.set("totalamount", order.price * order.quantity);
        o.set("itemqty", parseFloat(order.quantity));
        o.set("deliveryTime", order.myDate);
        var Menu = Parse.Object.extend('Menu');
        //const User = Parse.Object.extend('User');
        // var user = new User();
        var menu = new Menu();
        menu.id = order.menuid;
        // user.id = order.userid;
        o.set("menu", menu);
        // o.set("user",user);
        var self = this;
        o.save(null, {
            success: function (myorder) {
                // Execute any logic that should take place after the object is saved.
                console.log('New order created with objectId: ' + myorder.id);
                var newOrder = {
                    name: order.name,
                    quantity: order.quantity
                };
                // this.view.dismiss(newItem);
                self.events.publish("neworder", newOrder);
            },
            error: function (menu, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    Data.prototype.getDataOrder = function () {
        //return this.Storage.get('items');
        // return this.orders;
        var Order = Parse.Object.extend('Order');
        var query = new Parse.Query(Order);
        query.limit(1000);
        query.include("menu");
        var items = [];
        query.find().then(function (orders) {
            // resolve(orders);
            console.log(orders.length);
            for (var i = orders.length - 1; i >= 0; i--) {
                var mymenu = {
                    itemName: orders[i].get("menu").get("name"),
                    price: orders[i].get("menu").get("price"),
                    quantity: orders[i].get("itemqty"),
                    url: orders[i].get("menu").get("photoURL"),
                    descriptions: orders[i].get("menu").get("description"),
                    myDate: orders[i].get("deliveryTime"),
                };
                items.push(mymenu);
            }
            console.log(items.length);
            return items;
        }, function (error) {
            // reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.deleteItem = function (item) {
        var Item = Parse.Object.extend("Item");
        var i = new Item();
        var Menu = Parse.Object.extend('Menu');
        var menu = new Menu();
        menu.id = i.menuid;
        var self = this;
        i.destroy({
            success: function (i) {
                // The object was deleted from the Parse Cloud.
            },
            error: function (i, error) {
                // The delete failed.
                // error is a Parse.Error with an error code and message.
            }
        });
    };
    Data = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Storage, Events])
    ], Data);
    return Data;
}());
export { Data };
//# sourceMappingURL=data.js.map