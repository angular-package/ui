import { Injectable } from '@angular/core';
// Type.
import { UiButtonColor } from '../type/ui-button-color.type';
import { UiButtonFormtarget } from '../type/ui-button-formtarget.type';
import { UiButtonShape } from '../type/ui-button-shape.type';
import { UiButtonSize } from '../type/ui-button-size.type';
import { UiButtonState } from '../type/ui-button-state.type';
import { UiButtonType } from '../type/ui-button-type.type';
/**
 *
 */
@Injectable({
  providedIn: 'root',
})
export class UiButtonService {
  /**
   *
   */
   public action?: boolean;

  /**
   *
   */
   public autofocus?: boolean;

  /**
   *
   */
  public color: UiButtonColor = 'default';

  /**
   *
   */
  public content?: string;

  /**
   *
   */
  public disabled = false;

  /**
   *
   */
  public formtarget?: UiButtonFormtarget;

  /**
   *
   */
  public fullWidth = false;

  /**
   *
   */
  public href?: string;

  /**
   *
   */
  public iconLeft?: string;

  /**
   *
   */
  public iconRight?: string;

  /**
   *
   */
  public loading = false;

  /**
   *
   */
  public name?: string;

  /**
   *
   */
  public routerLink?: string;

  /**
   *
   */
  public shape?: UiButtonShape;
  /**
   *
   */
  public size?: UiButtonSize;

  /**
   *
   */
  public state: UiButtonState = 'default';

  /**
   *
   */
  public type: UiButtonType = 'button';

  /**
   *
   */
  public value: any;

  /**
   *
   * @returns
   * @angularpackage
   */
  public disable(): this {
    this.disabled = true;
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public enable(): this {
    this.disabled = false;
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public toggleDisabled(): this {
    this.disabled = !this.disabled;
    return this;
  }
}
