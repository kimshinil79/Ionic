import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { PraysubitemProvider } from '../../providers/praysubitem/praysubitem';
import { AddprayPage } from '../addpray/addpray';

@IonicPage()
@Component({
  selector: 'page-pray',
  templateUrl: 'pray.html',
})
export class PrayPage {
  currentpage = "";
  subpray = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, 
              private menuCtrl: MenuController, public praysubitem: PraysubitemProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrayPage');
  }

  onLoad(page: string, subitem: string) {
    this.currentpage = page;
    this.subpray = subitem
    this.praysubitem.setSubItem(subitem);
    this.menuCtrl.close();
  }

  addPray() {
    this.navCtrl.push('AddprayPage');
  }

}
