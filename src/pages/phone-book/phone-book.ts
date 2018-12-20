import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PhoneBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-phone-book',
  templateUrl: 'phone-book.html',
})
export class phoneBookPage{

  contactArray = [
    {name:'Ta',telephone:'0980161509',imageUrl:'assets/imgs/ta.jpg'}
    ,{name:'Max',telephone:'0874754309',imageUrl:'assets/imgs/max.jpg'}
    ,{name:'Tong',telephone:'0934588991',imageUrl:'assets/imgs/tong.jpg'}
    ,{name:'Ink',telephone:'0647174365',imageUrl:'assets/imgs/ink.jpg'}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneBookPage');
  }

  viewDetail(item){
    this.navCtrl.push("PhoneBookDetailPage",item);

  }

}//end class
