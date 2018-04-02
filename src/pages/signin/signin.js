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
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';
// Providers
import { Data } from '../../providers/data';
// https://ionicframework.com/docs/api/navigation/NavController/#setRoot
// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, data, loadCtrl) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.registerPage = SignupPage;
        this.password = '';
        this.username = '';
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('Initiated Signin');
    };
    SigninPage.prototype.doSignin = function () {
        // let loader = this.loadCtrl.create({
        //   content: 'Signing in...'
        // });
        // loader.present();
        var self = this;
        Parse.User.logIn(this.username, this.password, {
            success: function (user) {
                // loader.dismiss();
                // Do stuff after successful login.
                console.log("logged in " + user.get("username"));
                self.navCtrl.setRoot(TabsPage);
                // loader.dismissAll();
            },
            error: function (user, error) {
                // The login failed. Check error to see why.
            }
        });
        // this.authPvdr.signin(this.username, this.password).subscribe((success) => {
        //   this.navCtrl.setRoot(TabsPage);
        //   loader.dismissAll();
        // }, (error) => {
        //   alert('Invalid username or password');
        //   loader.dismissAll();
        // });
    };
    SigninPage = __decorate([
        Component({
            selector: 'page-signin',
            templateUrl: 'signin.html'
        }),
        __metadata("design:paramtypes", [NavController, Data, LoadingController])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.js.map