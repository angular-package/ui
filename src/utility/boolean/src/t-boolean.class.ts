/**
 *
 */
export class TBoolean<Value extends boolean> extends Boolean {
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
