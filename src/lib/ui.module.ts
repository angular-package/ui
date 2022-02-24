import { NgModule, ModuleWithProviders, Optional, Inject, SkipSelf } from '@angular/core';
import { UiComponent } from './ui.component';

import { UiRangeComponent } from '../form/range/src/range.component';
import { UiElements, UiService } from './ui.service';

@NgModule({
  declarations: [
    UiComponent,
    UiRangeComponent,
  ],
  imports: [
  ],
  exports: [
    UiComponent,
    UiRangeComponent
  ]
})
export class UiModule {
  static forRoot(@Optional() @Inject(UiElements) config?: UiElements): ModuleWithProviders<UiModule> {
    return {
      ngModule: UiModule,
      providers: [
        UiService,
        {provide: UiElements, useValue: config}
      ]
    };
  }
  // static forChild(@Optional() @Inject(UiElements) config?: UiElements): ModuleWithProviders<UiModule> {
  //   return {
  //     ngModule: UiModule,
  //     providers: [
  //       {provide: UiElements, useValue: config, multi: true}
  //     ]
  //   };
  // }

  constructor(@Optional() @SkipSelf() parentModule?: UiModule) {
    if (parentModule) {
      throw new Error(
        'UiModule is already loaded. Import it in the AppModule only');
    }
  }
}
