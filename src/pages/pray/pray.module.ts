import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrayPage } from './pray';
import { InitialpraylistComponent } from '../../components/initialpraylist/initialpraylist';
import { PraystatisticsComponent } from '../../components/praystatistics/praystatistics';
import { SubpraylistComponent } from '../../components/subpraylist/subpraylist';
import { PraysearchComponent } from '../../components/praysearch/praysearch';

@NgModule({
  declarations: [
    PrayPage,
    InitialpraylistComponent,
    SubpraylistComponent,
    PraystatisticsComponent,
    PraysearchComponent,
  ],
  imports: [
    IonicPageModule.forChild(PrayPage),
  ],
})
export class PrayPageModule {}
