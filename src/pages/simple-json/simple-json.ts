import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as Enums from '../../enums/enums';
/**
 * Generated class for the SimpleJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-simple-json',
  templateUrl: 'simple-json.html',
})
export class SimpleJsonPage {
  //(1)
  returnMsg = "";
  myip = Enums.APIURL.URL;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
    //(3)
    this.getJsonObject();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SimpleJsonPage');
  }
  //(2)
  getJsonObject() {
    let url = this.myip + '/shop/ion-get-simple-string.php';

    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.returnMsg = data.return_message;
      }
      , (error) => { console.log(error); }
    );


  }
}//end class
