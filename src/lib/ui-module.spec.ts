import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiRangeComponent } from '../form/range/src/range.component';
import { UiModule } from './ui.module';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UiService } from './ui.service';
import { UiComponent } from './ui.component';


@Component({
  template: `
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <input type="range" min="1" max="10" />
  `,
  // templateUrl: 'range.component.html',
  styles: []
})
export class CustomComponent implements AfterViewInit, OnInit {

  firstName = 'a';

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}


describe('UiModule', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UiModule.forRoot({
          range: CustomComponent
        })
      ],
      declarations: [
        UiComponent,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    console.log(fixture.nativeElement);
    fixture.detectChanges();
  });
});
