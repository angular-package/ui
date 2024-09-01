import { Injectable, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiButtonConfig {
  public component?: Type<any>;
  public changeDetection?: {
    detach: boolean;
  };
}
