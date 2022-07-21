// Rxjs.
import { Observer, Subscription } from 'rxjs';

// Status.
import { Status } from '../../lib/status.class';

// Type.
import { Subscribable } from '../../type/subscribable.type';

/**
 *
 */
export class Ability extends Status<'disabled' | 'enabled'> {
  /**
   *
   */
  public get disabled(): boolean {
    return super.isFalse();
  }

  /**
   *
   */
  public get enabled(): boolean {
    return super.isTrue();
  }

  /**
   *
   * @param status
   * @angularpackage
   */
  constructor(status?: boolean) {
    super(status, ['disabled', 'enabled']);
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public disable(emit = true): this {
    this.falsy(emit), emit && this.emit('disabled');
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public enable(emit = true): this {
    this.truthy(emit), emit && this.emit('enabled');
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isDisabled(callbackFn?: (status: boolean | undefined) => void): boolean {
    callbackFn && callbackFn(super.status);
    return super.status === false;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isEnabled(callbackFn?: (status: boolean | undefined) => void): boolean {
    callbackFn && callbackFn(super.status);
    return super.status === true;
  }

  /**
   *
   * @param disabled
   * @param emit
   * @returns
   * @angularpackage
   */
  public setDisabled(disabled?: boolean, emit = true): this {
    this.set(!disabled, emit)
    typeof disabled === 'boolean' && this.subjects.get('disabled').next(disabled);
    return this;
  }

  /**
   *
   * @param enabled
   * @param emit
   * @returns
   * @angularpackage
   */
  public setEnabled(enabled?: boolean, emit = true): this {
    this.set(enabled, emit);
    typeof enabled === 'boolean' && this.subjects.get('enabled').next(enabled);
    return this;
  }

  /**
   *
   * @param to
   * @param observer
   * @returns
   * @angularpackage
   */
  public subscribeTo(
    to: Subscribable<'disabled' | 'enabled'>,
    observer: Partial<Observer<boolean>>,
  ): Subscription {
    return super.subjects.subscribe(to, observer);
  }
}
