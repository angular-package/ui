// Class.
import { TString } from './t-string.class';

/**
 *
 */
export class String<
  Value extends string | undefined = string
> extends TString<Value> {
  /**
   *
   */
  public get value(): Value {
    return this.#value;
  }

  /**
   *
   */
  #value!: Value;

  /**
   *
   * @param value
   * @angularpackage
   */
  constructor(value?: Value) {
    super(value);
    this.#value = value || ('' as Value);
  }

  /**
   *
   * @param value
   * @returns
   * @angularpackage
   */
  public set(value?: Value): this {
    this.#value = value || ('' as Value);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public unset(): this {
    this.#value = '' as Value;
    return this;
  }
}
