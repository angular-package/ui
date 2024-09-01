import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  ViewChild,
  ViewContainerRef,
  Type,
} from '@angular/core';
// Component loader.
// TODO: no dist/
import { ComponentLoaderService } from 'dist/component-loader';
// Layout elements.
import { UILayoutElements } from '../../layout/src/ui-layout-elements.class';
// Config class.
import { UiButtonConfig } from './ui-button-config.class';
// Service.
import { UiButtonService } from './ui-button.service';
// Type.
import { UiButtonColor } from '../type/ui-button-color.type';
import { UiButtonFormtarget } from '../type/ui-button-formtarget.type';
import { UiButtonShape } from '../type/ui-button-shape.type';
import { UiButtonSize } from '../type/ui-button-size.type';
import { UiButtonState } from '../type/ui-button-state.type';
import { UiButtonType } from '../type/ui-button-type.type';
import { ChangeDetector } from 'dist/change-detection';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.html',
  styleUrls: ['./ui-button.scss'],
  preserveWhitespaces: false,
  // TODO: Turn on.
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentLoaderService, UiButtonService],
})
export class UiButton implements AfterViewInit {
  /**
   *
   */
  @Input() action?: boolean;

  /**
   *
   */
  @Input() autofocus?: boolean;

  /**
   *
   */
  @Input() color?: UiButtonColor;

  /**
   *
   */
  @Input() content?: string;

  /**
   *
   */
  @Input() disabled?: boolean;

  /**
   *
   */
  @Input() formtarget?: UiButtonFormtarget;

  /**
   *
   */
  @Input() fullWidth?: boolean;

  /**
   *
   */
  @Input() href?: string;

  /**
   *
   */
  @Input() iconLeft?: string;

  /**
   *
   */
  @Input() iconRight?: string;

  /**
   *
   */
  @Input() loading?: boolean;

  /**
   *
   */
  @Input() name?: string;

  /**
   *
   */
  @Input() routerLink?: string;

  /**
   *
   */
  @Input() shape?: UiButtonShape;

  /**
   *
   */
  @Input() size?: UiButtonSize;

  /**
   *
   */
  @Input() state?: UiButtonState;

  /**
   *
   */
  @Input() type?: UiButtonType;

  /**
   *
   */
  @Input() value?: any;

  /**
   *
   */
  @ViewChild('container', { read: ViewContainerRef }) container: any;

  /**
   *
   */
  @ViewChild('projectableNodes') projectableNodes!: ElementRef;

  /**
   *
   */
  public properties = [
    'action',
    'autofocus',
    'color',
    'content',
    'disabled',
    'formtarget',
    'fullWidth',
    'href',
    'iconLeft',
    'iconRight',
    'loading',
    'name',
    'routerLink',
    'shape',
    'size',
    'state',
    'type',
    'value',
  ];

  /**
   *
   */
  #changeDetector!: ChangeDetector<this>;

  /**
   *
   * @param changeDetector
   * @param layoutElements
   * @param buttonConfig
   * @param buttonService
   * @angularpackage
   */
  constructor(
    public changeDetector: ChangeDetectorRef,
    public componentLoader: ComponentLoaderService<any>,
    public layoutElements: UILayoutElements,
    public buttonConfig: UiButtonConfig,
    public buttonService: UiButtonService
  ) {
    this.setChangeDetector();
  }

  /**
   *
   */
  ngAfterViewInit(): void {
    // Load component.
    this.loadComponent(
      typeof this.buttonConfig !== 'undefined' && this.buttonConfig?.component
        ? this.buttonConfig?.component
        : this.layoutElements.button,
      ...this.properties
    );

    // Detach component and detect changes in the specified properties.
    this.changeDetector.detectChanges();
  }

  /**
   * Loads component from the given `component`.
   * @param component
   * @param properties
   * @angularpackage
   */
  private loadComponent(component?: Type<any>, ...properties: string[]): void {
    component &&
      this.componentLoader
        .pickViewContainer(this)
        .createComponent(component, undefined, {
          ...this.defineProjectableNodes(),
        })
        .assignProperties(this.buttonService, ...properties)
        .linkProperties(properties, this.buttonService);
  }

  /**
   * ! ng-content does not use projection properly to specific name but in order, and adding other component with
   * ! projections disturbs this order. It's not recommended to use the ng-content at this time.
   * @returns
   * @angularpackage
   */
  private defineProjectableNodes(): { projectableNodes: any[] } {
    const projectableNodes: any[] = [];
    this.projectableNodes.nativeElement
      .querySelectorAll('div[get]')
      .forEach((value: any) =>
        projectableNodes.push([value.querySelector('*')])
      );
    return {
      projectableNodes,
    };
  }

  /**
   *
   */
  private setChangeDetector(): void {
    // Define the change detector.
    this.#changeDetector = new ChangeDetector(
      this,
      this.properties as any,
      (value, oldValue, key) => {
        this.buttonService[key as keyof typeof this.buttonService] = value;
        // REVIEW: Detect changes in the loaded component.
        // this.componentLoader.detector?.detectChanges();
      }
    );

    // Enable change detection.
    this.#changeDetector.enable();
  }
}
