/**
 *
 */
export class TNumber<Value extends number = number> extends Number {
  /**
   *
   * @param value
   * @angularpackage
   */
  constructor(value?: Value) {
    super(value);
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public getValueOf(): Value {
    return super.valueOf() as Value;
  }
}
