// Rxjs.
import { Observer } from 'rxjs';

// Class.
import { AffixedName, Name } from '../../name';

// Constant.
import { AVAILABLE_SIZES } from './available-sizes.const';

// Type.
import { Sizes } from '../type/sizes.type';
import { SizesConfig } from '../type/sizes-config.type';

// Interface.
import { SizeOptions } from '../interface/size-options.interface';

/**
 *
 */
export class Size<
  Prefix extends string | undefined = 'size',
  Value extends Sizes = Sizes,
  Suffix extends string | undefined = undefined
> extends Name<Sizes, Prefix, Value, Suffix> {
  /**
   *
   */
  public get size(): AffixedName<Prefix, Value, Suffix> | undefined {
    return super.get;
  }

  /**
   *
   */
  public get sizesConfig(): SizesConfig | undefined {
    return this.#config;
  }

  /**
   *
   */
  #config?: SizesConfig;

  /**
   *
   * @param size
   * @param sizesConfig
   * @angularpackage
   */
  constructor(
    size?: Value,
    options?: SizeOptions<Prefix, Suffix>,
    sizesConfig?: SizesConfig
  ) {
    super(size, {
      availableNames: options?.availableSizes || AVAILABLE_SIZES,
      // FIXME: change the size to use options
      prefix: options?.prefix || 'size' as Prefix,
      suffix: options?.suffix,
    });
    this.#config = sizesConfig;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public lg(emit = true): this {
    this.set('lg' as Value, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public md(emit = true): this {
    this.set('md' as Value, emit);
    return this;
  }

  /**
   *
   * @param emit
   * @returns
   * @angularpackage
   */
  public none(emit = true): this {
    this.set('none' as Value, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public set<Selected extends Value>(size?: Selected, emit = true): this {
    size === undefined ? super.unset() : super.set(size, emit);
    return this;
  }

  /**
   * TODO: Change the css variables.
   * @param config
   * @returns
   * @angularpackage
   */
  public setConfig(config?: SizesConfig): this {
    typeof config === 'object' &&
      ((this.#config = config),
      Object.keys(config).forEach((size) =>
        document.documentElement.style.setProperty(
          `--${this.prefix?.value}-${size}`,
          config[size as keyof typeof config] as string
        )
      ));

    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public sm(emit = true): this {
    this.set('sm' as Value, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public subscribe<Type = Sizes>(
    observer?: Partial<Observer<Type | undefined>>
  ): this {
    super.subscribe(observer);
    return this;
  }
  /**
   *
   * @returns
   * @angularpackage
   */
  public xl(emit = true): this {
    this.set('xl' as Value, emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public xs(emit = true): this {
    this.set('xs' as Value, emit);
    return this;
  }
}
