// Class.
import { TBoolean } from './t-boolean.class';

/**
 *
 */
export class Boolean<Value extends boolean = boolean> extends TBoolean<Value> {
  /**
   *
   */
  public get value(): Value {
    return this.#value;
  }

  /**
   *
   */
  #value: Value = false as Value;

  /**
   *
   * @param value
   * @returns
   * @angularpackage
   */
  public static create<Value extends boolean = boolean>(
    value: Value
  ): Boolean<Value> {
    return new this(value);
  }

  /**
   *
   * @param value
   * @angularpackage
   */
  constructor(value?: Value) {
    super(value);
    this.set(value);
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public false(): this {
    this.set(false as Value);
    return this;
  }

  /**
   *
   */
  public get(): Value | undefined {
    return this.#value;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public is(value: boolean): boolean {
    return this.#value === value;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isFalse(): boolean {
    return this.#value === false;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isTrue(): boolean {
    return this.#value === true;
  }

  /**
   *
   * @param value
   * @returns
   * @angularpackage
   */
  public set(value?: Value): this {
    this.#value = new TBoolean(value).getValueOf();
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public true(): this {
    this.set(true as Value);
    return this;
  }
}
