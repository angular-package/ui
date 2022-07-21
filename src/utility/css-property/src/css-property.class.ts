/**
 *
 */
export class CssProperty {
  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static get(property: string): string {
    return getComputedStyle(document.body).getPropertyValue(property);
  }

  /**
   *
   * @param property
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static set(property: string, value: string | null, priority?: string): typeof CssProperty {
    getComputedStyle(document.body).setProperty(property, value, priority);
    return this;
  }
}
