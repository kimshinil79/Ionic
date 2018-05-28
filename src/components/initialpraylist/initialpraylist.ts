import { Component } from '@angular/core';

/**
 * Generated class for the InitialpraylistComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'initialpraylist',
  templateUrl: 'initialpraylist.html'
})
export class InitialpraylistComponent {

  text: string;

  constructor() {
    this.text = '기도리스트 처음 화면 입니다.';
  }

}
