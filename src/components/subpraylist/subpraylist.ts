import { Component } from '@angular/core';
import { PraysubitemProvider } from '../../providers/praysubitem/praysubitem';

@Component({
  selector: 'subpraylist',
  templateUrl: 'subpraylist.html'
})
export class SubpraylistComponent {

  constructor (public praysubitem : PraysubitemProvider) {}

  praysubitemtoken = this.praysubitem.getSubItem();
  
}
