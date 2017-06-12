import { Component } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { Dashboard } from '../dashboard/dashboard';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public auth: Auth, public user: User, public toastCtrl: ToastController, public loadingCtrl:LoadingController) {}

  doGoogleLogin() {
    this.auth.login('google');
  }
  /*
   for both of these, if the right form is showing, process the form,
   otherwise show it
   */
  doLogin() {
    if (this.showLogin) {


      if (this.email === '' || this.password === '') {
        let toast = this.toastCtrl.create({
          message: 'Please fill in all fields',
          duration: 3000,
          position: 'bottom',
          'showCloseButton': true
        });
        toast.present();
        return;
      }

      let loader = this.loadingCtrl.create({
        content: "Logging in..."
      });
      loader.present();

      let details: UserDetails = {'email': this.email, 'password': this.password};

      this.auth.login('basic', details).then(() => {
        console.log('ok i guess?');
        loader.dismissAll();
        this.navCtrl.setRoot(Dashboard);
      }, (err) => {
        loader.dismissAll();
        console.log(err.message);

        let errors = '';
        if(err.message === 'UNPROCESSABLE ENTITY') errors += 'Email isn\'t valid.<br/>';
        if(err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

        let toast = this.toastCtrl.create({
          message: 'Email or password is incorrect',
          duration: 3000,
          position: 'bottom',
          'showCloseButton': true
        });
        toast.present();
        return;
      });
    } else {
      this.showLogin = true;
    }
  }

  doRegister() {
    if(!this.showLogin) {
      console.log('process register');

      /*
       do our own initial validation
       */
      if(this.name === '' || this.email === '' || this.password === '') {
        let toast = this.toastCtrl.create({
          message: 'Please fill in all fields',
          duration: 3000,
          position: 'bottom',
          'showCloseButton': true
        });
        toast.present();
        return;

      }

      let details: UserDetails = {'email':this.email, 'password':this.password, 'name':this.name};
      console.log(details);

      let loader = this.loadingCtrl.create({
        content: "Registering your account..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        console.log('ok signup');
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(Dashboard);
        });

      }, (err:IDetailedError<string[]>) => {
        loader.dismissAll();
        let errors = '';
        for(let e of err.details) {
          console.log(e);
          if(e === 'required_email') errors += 'Email is required.<br/>';
          if(e === 'required_password') errors += 'Password is required.<br/>';
          if(e === 'conflict_email') errors += 'A user-single with this email already exists.<br/>';
          //don't need to worry about conflict_username
          if(e === 'invalid_email') errors += 'Your email address isn\'t valid.';
        }
        let toast = this.toastCtrl.create({
          message: errors,
          duration: 3000,
          position: 'bottom',
          'showCloseButton': true
        });
        toast.present();
        return;

      });

    } else {
      this.showLogin = false;
    }
  }

}
