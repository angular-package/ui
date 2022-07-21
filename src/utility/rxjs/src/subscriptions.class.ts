// Rxjs.
import { Subscription } from 'rxjs';

/**
 *
 */
export class Subscriptions<Names extends string> extends Map<
  Names,
  Subscription | undefined
> {
  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public unsubscribe(name: Names): boolean {
    return (
      // Unsubscribe stored subscription.
      super.get(name)?.unsubscribe(),

      // Delete subscription.
      super.delete(name)
    );
  }

  /**
   * Unsubscribe all subscriptions.
   * @returns
   * @angularpackage
   */
  public unsubscribeAll(): this {
    this.forEach((subscription, name) => this.unsubscribe(name));
    return this;
  }
}
