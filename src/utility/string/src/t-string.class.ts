/**
 *
 */
export class TString<Value extends string | undefined = string> extends String {
  /**
   *
   * @returns
   * @angularpackage
   */
  public getValueOf(): Value {
    return super.valueOf() as Value;
  }
}
