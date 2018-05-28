import { NgModule } from '@angular/core';
import { InitialpraylistComponent } from './initialpraylist/initialpraylist';
import { PraystatisticsComponent } from './praystatistics/praystatistics';
import { SubpraylistComponent } from './subpraylist/subpraylist';
import { PraysearchComponent } from './praysearch/praysearch';
@NgModule({
	declarations: [InitialpraylistComponent,
    PraystatisticsComponent,
    SubpraylistComponent,
    PraysearchComponent],
	imports: [],
	exports: [InitialpraylistComponent,
    PraystatisticsComponent,
    SubpraylistComponent,
    PraysearchComponent]
})
export class ComponentsModule {}
