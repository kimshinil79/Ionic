import { Component } from '@angular/core';

/**
 * Generated class for the PraystatisticsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'praystatistics',
  templateUrl: 'praystatistics.html'
})
export class PraystatisticsComponent {

  text: string;

  constructor() {
    console.log('Hello PraystatisticsComponent Component');
    this.text = '기도 통계창입니다';
  }

}
