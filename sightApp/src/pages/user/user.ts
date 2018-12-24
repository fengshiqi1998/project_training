import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HeadPage } from '../head/head';
import {SignPage } from '../sign/sign';
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

// @IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad UserPage');
  // }
  go(){
    this.navCtrl.push(HeadPage);
  }
  goto(){
    this.navCtrl.push(SignPage);
  }
}
