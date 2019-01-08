import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//(1)
import { HttpClient } from '@angular/common/http';
//(6)

import * as Enums from '../../enums/enums';
/**
 * Generated class for the ArrayJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-array-json',
  templateUrl: 'array-json.html',
})
export class ArrayJsonPage {
  //(3)
  gameArray = [];
  //(7)
  myip = Enums.APIURL.URL;

  //(2)
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    //(5)
    this.lodeGameData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrayJsonPage');
  }
  //(4)
  lodeGameData() {
    let url = this.myip + '/shop/getAllGames_7.php';

    this.http.get(url).subscribe(
      (data: any) => {
        this.gameArray = data.games;
        console.log(this.gameArray);
      }
      , (error) => { console.log(error); }
    );
  }//end method
}//end class
