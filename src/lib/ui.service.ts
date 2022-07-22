import { Injectable, Optional } from '@angular/core';
import { UiDefaultRangeComponent } from '../form/range/range.component';

@Injectable()
export class UiElements {
  range: any = UiDefaultRangeComponent;
}

@Injectable({
  providedIn: 'root',
})
export class UiService {
  constructor(@Optional() public element: UiElements = new UiElements()) {}
}
