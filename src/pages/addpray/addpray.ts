import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormArray, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the AddprayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addpray',
  templateUrl: 'addpray.html',
})
export class AddprayPage {

  public form: FormGroup;
  public eachPray: string = '';
  
  today:string = new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams, private _FB: FormBuilder) {
    this.form = this._FB.group({
      date: [this.today, Validators.required],
      prayContext: this._FB.array([
        this.initPrayContextFields()
      ])
    });
  }

  initPrayContextFields(): FormGroup {
    return this._FB.group({
      eachPray: ['', Validators.required]
    });
  }

  addNewInputField(): void {
    const control = <FormArray>this.form.controls.prayContext;
    control.push(this.initPrayContextFields());
  }

  removeInputField(i: number): void {
    const control = <FormArray>this.form.controls.prayContext;
    control.removeAt(i);
  }

  manage(val: any) {
    console.dir(val);
  }

  cancel() {
    this.navCtrl.pop();
  }


}
