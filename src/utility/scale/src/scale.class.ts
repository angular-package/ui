// Class.
import { Name } from '../../../name';

// Constant.
import { AVAILABLE_LEVELS } from './available-levels.const';

// Type.
import { Levels } from '../type/levels.type';

/**
 *
 */
export class Scale<
  AvailableLevels extends string = Levels,
  Prefix extends string | undefined = undefined,
  Level extends AvailableLevels = AvailableLevels,
  Suffix extends string | undefined = undefined
> extends Name<AvailableLevels, Prefix, Level, Suffix> {
  /**
   *
   */
  // public get sizesConfig(): SizesConfig | undefined {
  //   return this.#config;
  // }

  /**
   *
   */
  public get level(): Level | undefined {
    return super.name;
  }

  /**
   *
   * @param level
   * @param config
   * @angularpackage
   */
  constructor(
    level?: Level,
    options?: {
      availableLevels?: AvailableLevels[];
      prefix?: Prefix;
      suffix?: Suffix;
    }
    // config?: SizeConfig,
  ) {
    super(level, {
      availableNames:
        options?.availableLevels || (AVAILABLE_LEVELS as AvailableLevels[]),
      ...options,
    });
    // this.#config = config;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public low(
    emit = true
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('low' as Level, emit);
    // this.set('low', emit, prefix, suffix);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public lower(
    emit = true,
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('lower' as Level, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public lowest(
    emit = true,
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('lowest' as Level, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public medium(
    emit = true,
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('medium' as Level, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public high(
    emit = true,
    prefix: Prefix | undefined = this.prefix?.value,
    suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('high' as Level, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public higher(
    emit = true,
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('higher' as Level, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public highest(
    emit = true,
    // prefix: Prefix | undefined = this.prefix?.value,
    // suffix: Suffix | undefined = this.suffix?.value
  ): this {
    this.set('highest' as Level, emit);
    return this;
  }
}
