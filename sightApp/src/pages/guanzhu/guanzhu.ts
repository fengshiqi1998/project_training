import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GuanzhuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-guanzhu',
  templateUrl: 'guanzhu.html',
})
export class GuanzhuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuanzhuPage');
  }
  arr=['推荐','关注的人'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }

}
