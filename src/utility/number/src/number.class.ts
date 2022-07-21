/**
 *
 */
 export class Number<Value extends number = number> {
  /**
   *
   */
  public get value(): Value | undefined {
    return this.#value;
  }

  /**
   *
   */
  #value?: Value;

  /**
   *
   * @param value
   * @returns
   * @angularpackage
   */
  public static create<Value extends number = number>(
    value?: Value
  ): Number<Value> {
    return new this(value);
  }

  /**
   *
   * @param value
   * @angularpackage
   */
  constructor(value?: Value) {
    this.#value = value;
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
  public has(): boolean {
    return typeof this.#value === 'number';
  }

  /**
   *
   * @param value
   * @returns
   * @angularpackage
   */
  public set(value?: Value): this {
    this.#value = value;
    return this;
  }
}
