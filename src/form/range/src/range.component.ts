import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  AfterViewInit,
} from '@angular/core';

import { ComponentLoader } from '@angular-package/component-loader';

import { UiService } from '../../../lib/ui.service';

@Component({
  selector: 'ap-range',
  templateUrl: 'range.component.html',
  styles: [],
  providers: [UiService],
})
export class UiRangeComponent
  extends ComponentLoader<any>
  implements AfterViewInit, OnInit
{
  @ViewChild('container', { read: ViewContainerRef }) container: any;

  constructor(protected service: UiService) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.service.element);
    this.pickViewContainer(this).createComponent(this.service.element.range);
  }
}
