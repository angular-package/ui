import {
  NgModule,
  Optional,
  SkipSelf,
  ModuleWithProviders,
  Inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
// Component.
import { UiButton } from './ui-button';
// Service.
import { UiButtonService } from './ui-button.service';
// Config class.
import { UiButtonConfig } from './ui-button-config.class';
// Elements class.
import { UILayoutElements } from '../../layout/src/ui-layout-elements.class';

@NgModule({
  declarations: [UiButton],
  imports: [CommonModule],
  exports: [UiButton],
})
export class UiButtonModule {
  /**
   *
   * @param config
   * @returns
   */
  static forRoot(
    @Inject(UiButtonConfig)
    config: UiButtonConfig
  ): ModuleWithProviders<UiButtonModule> {
    return {
      ngModule: UiButtonModule,
      providers: [
        UiButtonService,
        UILayoutElements,
        { provide: UiButtonConfig, useValue: config },
      ],
    };
  }

  /**
   *
   * @param config
   * @returns
   */
  static forChild(
    @Inject(UiButtonConfig)
    config: UiButtonConfig
  ): ModuleWithProviders<UiButtonModule> {
    return {
      ngModule: UiButtonModule,
      providers: [
        UiButtonService,
        UILayoutElements,
        { provide: UiButtonConfig, useValue: config },
      ],
    };
  }

  /**
   *
   * @param parentModule
   */
  constructor(@Optional() @SkipSelf() parentModule?: UiButtonModule) {
    if (parentModule) {
      throw new Error(
        `${UiButtonModule.name} is already loaded. Import it in the AppModule only`
      );
    }
  }
}
