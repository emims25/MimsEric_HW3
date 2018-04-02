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
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, loadCtrl) {
        this.navCtrl = navCtrl;
        this.loadCtrl = loadCtrl;
        this.password = '';
        this.username = '';
        this.verify = '';
        this.email = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('Initiate Signup');
    };
    // TODO: form validation
    SignupPage.prototype.doRegister = function () {
        // let loader = this.loadCtrl.create({
        //   content: 'Signing up...'
        // });
        // loader.present();
        // this.authPvdr.signup(this.username, this.password, this.email).subscribe((success) => {
        //   this.navCtrl.setRoot(TabsPage);
        //   loader.dismissAll();
        // }, (error) => {
        //   loader.dismissAll();
        // });
        var user = new Parse.User();
        user.set("username", this.username);
        user.set("password", this.password);
        user.set("email", this.email);
        // other fields can be set just like with Parse.Object
        // user.set("phone", "888-888-888");
        var self = this;
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                console.log("signup success" + user.get("username"));
                self.navCtrl.pop();
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
        console.log("sign up");
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html'
        }),
        __metadata("design:paramtypes", [NavController, LoadingController])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map