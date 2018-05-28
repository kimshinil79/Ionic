import { Component } from '@angular/core';

/**
 * Generated class for the PraysearchComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'praysearch',
  templateUrl: 'praysearch.html'
})
export class PraysearchComponent {

  text: string;

  constructor() {
    console.log('Hello PraysearchComponent Component');
    this.text = '검색 창입니다.';
  }

}
