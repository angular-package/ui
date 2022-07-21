// Rxjs.
import { Observer, Subscription } from 'rxjs';

// Class.
import { Status } from '../../lib/status.class';

// Type.
import { Subscribable } from '../../type/subscribable.type';

/**
 *
 */
export class Active extends Status<'active'> {
  /**
   *
   */
  public get active(): boolean | undefined {
    return super.status;
  }

  /**
   *
   * @param active
   * @angularpackage
   */
  constructor(active?: boolean) {
    super(active, ['active']);
  }

  /**
   *
   * @param emit
   * @returns
   * @angularpackage
   */
  public activate(emit = true): this {
    super.truthy(emit);
    return this;
  }

  /**
   *
   * @param emit
   * @returns
   * @angularpackage
   */
  public deactivate(emit = true): this {
    super.falsy(emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isActive(): boolean {
    return super.isTrue();
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isInactive(): boolean {
    return super.isFalse();
  }

  /**
   *
   * @param to
   * @param observer
   * @returns
   * @angularpackage
   */
  public subscribeTo(
    to: Subscribable<'active'>,
    observer: Partial<Observer<boolean>>
  ): Subscription {
    return super.subjects.subscribe(to, observer);
  }
}
