import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { Parse } from 'parse';

// Providers
import { Data } from '../../providers/data';
// https://ionicframework.com/docs/api/navigation/NavController/#setRoot

// Pages
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {
  registerPage = SignupPage;
  password: string = '';
  username: string = '';

  constructor(public navCtrl: NavController, data:Data, private loadCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('Initiated Signin');
  }

  public doSignin() {
    // let loader = this.loadCtrl.create({
    //   content: 'Signing in...'
    // });
    // loader.present();
    var self=this;
    Parse.User.logIn(this.username, this.password, {
    success: function(user) {
      // loader.dismiss();
      // Do stuff after successful login.
      console.log("logged in "+user.get("username"));
      self.navCtrl.setRoot(TabsPage);

      // loader.dismissAll();
    },
    error: function(user, error) {
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
  }

}
