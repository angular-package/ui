// Rxjs.
import { Observer, Subject, Subscription } from 'rxjs';

// @angular-package/rxjs.
import { Subjects } from '../rxjs';

// Class.
import { Boolean } from '../boolean';

// Type.
import { Subscribable } from '../type/subscribable.type';

/**
 * TODO: add Boolean object.
 */
export class Status<S extends string = 'status'> {
  /**
   *
   */
  public get status(): boolean {
    return this.#status.value;
  }

  /**
   *
   */
  public get subject(): Subject<boolean> {
    return this.#subjects.get('status');
  }

  /**
   *
   */
  public get subjects(): Subjects<Subscribable<S>, boolean> {
    return this.#subjects;
  }

  /**
   *
   */
  #status = new Boolean().false();

  /**
   *
   */
  #subjects = new Subjects<
    Subscribable<S>,
    boolean
  >(['status']);

  /**
   *
   * @param status
   * @angularpackage
   */
  constructor(status?: boolean, subscribable: Subscribable<S>[] = []) {
    typeof status === 'boolean' && this.set(status);
    subscribable.forEach((value) => this.#subjects.set(value));
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public emit(to: Subscribable<S> = 'status'): this {
    this.#subjects.get(to).next(this.#status.value);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public falsy(emit = true): this {
    this.set(false, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public get(): boolean {
    return this.#status.value;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isFalse(): boolean {
    return this.#status.isFalse();
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isTrue(): boolean {
    return this.#status.isTrue();
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public set(status?: boolean, emit = true): this {
    typeof status === 'boolean' && this.#status.set(status);
    emit === true && this.emit('status');
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public subscribe(observer: Partial<Observer<boolean>>): Subscription {
    return this.#subjects.subscribe('status', observer);
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public toggle(emit = true): this {
    this.set(!this.#status.value, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public truthy(emit = true): this {
    this.set(true, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public unsubscribe(subscribable: Subscribable<S> = 'status'): this {
    this.#subjects.get(subscribable).unsubscribe();
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public unsubscribeAll(): this {
    this.#subjects.unsubscribeAll();
    return this;
  }
}
