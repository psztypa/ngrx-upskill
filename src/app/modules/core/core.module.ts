import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventBusService } from './services/event-bus.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [EventBusService]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core is already loaded. Import it in the AppModule only');
    }
  }
}
