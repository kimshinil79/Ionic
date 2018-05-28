import { Component } from '@angular/core';

// import { PrayPage } from '../pray/pray';
// import { BiblePage } from '../bible/bible';
// import { PraisePage } from '../praise/praise';
// import { SettingPage } from '../setting/setting';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  prayPage = 'PrayPage';
  biblePage = 'BiblePage';
  praisePage = 'PraisePage';
  settingPage = 'SettingPage';

  constructor() {

  }
}
