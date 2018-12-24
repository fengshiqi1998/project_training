import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  data
  contentdetail
  imgs = 'imgs'
  note_content = 'note_content'
  notecontent = 'note-content'
  constructor(params: NavParams,public navCtrl: NavController, public navParams: NavParams) {
    console.log(params.data.notedetail)
    this.data = params.data.notedetail;
    this.contentdetail = this.data.map(function(item){
      return item.notecontent.replace(/(\r\n)|(\n)/g,'<br/>')
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }
  close(){
    this.navCtrl.pop();
  }
}
