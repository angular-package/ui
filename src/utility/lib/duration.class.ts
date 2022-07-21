// Rxjs.
import { Subject } from 'rxjs';

// Range.
import { Number } from '../range';

/**
 *
 */
export class Duration<T extends number> extends Number<T> {
  /**
   *
   */
  public get doneSubject(): Subject<boolean> {
    return this.#done;
  }

  /**
   *
   */
  public get duration(): number {
    return super.valueOf();
  }

  /**
   *
   */
  #done: Subject<boolean>;
  #durationTimeOut?: NodeJS.Timeout;

  /**
   *
   * @param duration
   * @angularpackage
   */
  constructor(duration: T) {
    super(duration);

    // Set done subject.
    this.#done = new Subject();
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public clearTimeOut(): this {
    console.log(`clearTimeOut: `, this.#durationTimeOut);
    this.#durationTimeOut && clearTimeout(this.#durationTimeOut);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public doAfter(callbackFn: (duration: number) => void): this {
    this.hasDuration(
      (duration) =>
        (console.log(`doAfter()`), this.#durationTimeOut = setTimeout(() => {
          callbackFn(duration);
          this.#done.next(true);
        }, duration))
    );
    return this;
  }

  /**
   *
   * @param callbackFn
   * @returns
   * @angularpackage
   */
  public hasDuration(callbackFn?: (duration: number) => void): boolean {
    return this.duration > 0
      ? (callbackFn && callbackFn(this.duration), true)
      : false;
  }
}
