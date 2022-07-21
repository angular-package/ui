// Class.
import { AffixedName } from '../../../name';
import { Color } from './color.class';

// Type.
import { Colors } from '../type/colors.type';
import { HSL } from '../type/hsl.type';
import { Shade } from '../type/shade.type';

// Constant.
import { CSS_COLORS } from './css-colors.const';

/**
 *
 */
export class CssPropertyColor<
  Prefix extends string | undefined,
  AvailableColors extends string = Colors,
  Value extends AvailableColors = AvailableColors
> extends Color<Prefix, 'color', AvailableColors, Value> {
  public static rootStyle = (document.querySelector(':root') as HTMLElement)
    .style;

  public get hue(): number {
    return CssPropertyColor.getHueOfVar(this.getColorName());
  }

  public get hex(): string {
    return CssPropertyColor.getHexOfVar(this.getColorName());
  }

  public get hsl(): HSL {
    return {
      hue: this.hue,
      lightness: this.lightness,
      saturation: this.saturation,
    };
  }

  public get lightness(): number {
    return CssPropertyColor.getLightnessOfVar(this.getColorName());
  }

  public get saturation(): number {
    return CssPropertyColor.getSaturationOfVar(this.getColorName());
  }

  #shade?: Shade;

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getHueOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-h`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getLightnessOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-l`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getSaturationOfVar(name: string): number {
    return this.#getPropertyValue(`--${name}-s`);
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public static getHexOfVar(name: string): string {
    const rgbColor = Color.hslToRgb(
      this.getHueOfVar(name),
      this.getSaturationOfVar(name),
      this.getLightnessOfVar(name)
    );
    return this.rgbToHex(
      Math.round(rgbColor.red),
      Math.round(rgbColor.green),
      Math.round(rgbColor.blue)
    );
  }

  // TODO: Finish.
  public static remove(
    name: string,
    type: 'hue' | 'saturation' | 'lightness'
  ): typeof CssPropertyColor {
    return this;
  }

  public static removeHueOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-h`);
    return this;
  }

  public static removeLightnessOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-l`);
    return this;
  }

  public static removeSaturationOfVar(name: string): typeof CssPropertyColor {
    this.rootStyle.removeProperty(`--${name}-s`);
    return this;
  }

  public static removeColorOfVar(name: string): typeof CssPropertyColor {
    this.removeHueOfVar(name)
      .removeLightnessOfVar(name)
      .removeSaturationOfVar(name);
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setHueOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-h`,
      `${String(value)}deg`,
      priority
    );
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setLightnessOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-l`,
      `${String(value)}%`,
      priority
    );
    return this;
  }

  /**
   *
   * @param name
   * @param value
   * @param priority
   * @returns
   * @angularpackage
   */
  public static setSaturationOfVar(
    name: string,
    value: number | null,
    priority?: 'important' | ''
  ): typeof CssPropertyColor {
    (document.querySelector(':root') as HTMLElement).style.setProperty(
      `--${name}-s`,
      `${String(value)}%`,
      priority
    );
    return this;
  }

  static #calcLightness(lightness: string): any {
    let l = 0;
    lightness
      .match(/[+-]?\d+(\.\d+)?/g)
      ?.forEach((value) => (l += Number(value)));
    return l;
  }

  static #getPropertyValue(name: string): number {
    const value = getComputedStyle(document.body)
      .getPropertyValue(name)
      .replace('deg', '')
      .replace('%', '');

    return value.indexOf('calc') ? this.#calcLightness(value) : Number(value);
  }

  /**
   *
   * @param color
   * @param prefix
   * @param availableColors
   * @angularpackage
   */
  constructor(
    color: Value,
    prefix?: Prefix,
    availableColors = CSS_COLORS as AvailableColors[]
  ) {
    super(color, { prefix, suffix: 'color', availableColors });
  }

  public getHex(shade: Shade = this.#shade as Shade): string {
    return CssPropertyColor.getHexOfVar(this.getColorName(shade));
  }

  public getHSL(shade: Shade = this.#shade as Shade): HSL {
    return {
      hue: this.getHue(shade),
      lightness: this.getLightness(shade),
      saturation: this.getSaturation(shade),
    };
  }

  public getHue(shade: Shade = this.#shade as Shade): number {
    return CssPropertyColor.getHueOfVar(this.getColorName(shade));
  }

  public getLightness(shade: Shade = this.#shade as Shade): number {
    return CssPropertyColor.getLightnessOfVar(this.getColorName(shade));
  }

  public getSaturation(shade: Shade = this.#shade as Shade): number {
    return CssPropertyColor.getSaturationOfVar(this.getColorName(shade));
  }

  public getColorName<S extends Shade>(
    shade: S = this.#shade as S
  ):
    | AffixedName<Prefix, Value, 'color'>
    | `${AffixedName<Prefix, Value, 'color'>}-${S}` {
    return shade ? this.valueOfShade(shade) : super.getValue();
  }

  public removeColor(shade: Shade = this.#shade as Shade): this {
    CssPropertyColor.removeColorOfVar(this.getColorName(shade));
    return this;
  }

  public setHex(hex: string, shade: Shade = this.#shade as Shade): this {
    const hsl = CssPropertyColor.hexToHsl(hex);

    if (hsl) {
      this.setHue(hsl.hue, shade)
        .setLightnessOfVar(hsl.lightness, shade)
        .setSaturationOfVar(hsl.saturation, shade);
    }
    return this;
  }

  public setHsl(hue: number, saturation: number, lightness: number): this {
    this.setHue(hue)
      .setSaturationOfVar(saturation)
      .setLightnessOfVar(lightness);

    return this;
  }

  public setHue(
    value: number,
    shade: Shade = this.#shade as Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setHueOfVar(this.getColorName(shade), value, priority);
    return this;
  }

  public setLightnessOfVar(
    value: number,
    shade: Shade = this.#shade as Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setLightnessOfVar(
      this.getColorName(shade),
      value,
      priority
    );
    return this;
  }

  public setSaturationOfVar(
    value: number,
    shade: Shade = this.#shade as Shade,
    priority?: 'important' | ''
  ): this {
    CssPropertyColor.setSaturationOfVar(
      this.getColorName(shade),
      value,
      priority
    );
    return this;
  }

  public setShade(shade: Shade): this {
    this.#shade = shade;
    return this;
  }

  public valueOfShade<S extends Shade>(
    shade: S = this.#shade as S
  ): `${AffixedName<Prefix, Value, 'color'>}-${S}` {
    return `${super.getValue()}-${shade}`;
  }
}
