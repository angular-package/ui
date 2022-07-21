// @angular.
import { Injectable } from '@angular/core';

// Class.
import { CommonService } from '../../lib/common-service';
import { Padding } from './padding.class';

// Type.
import { Sizes, SizeConfig } from '../../size';

/**
 *
 */
@Injectable()
export class PaddingServiceCopy<
  PrefixValue extends string | undefined = 'padding',
  SuffixValue extends string | undefined = undefined
> extends CommonService<
  PrefixValue,
  SuffixValue,
  Padding<PrefixValue, Sizes, SuffixValue>
> {
  /**
   *
   */
  public get get(): Padding<PrefixValue, Sizes, SuffixValue> | undefined {
    return this.#padding;
  }

  /**
   *
   */
  // public get size(): Sizes | undefined {
  //   return this.#padding?.size;
  // }

  /**
   *
   */
  public get value(): Padding<PrefixValue, Sizes, SuffixValue> | undefined {
    return this.#padding;
  }

  /**
   *
   */
  #config?: SizeConfig;

  /**
   *
   */
  #padding?: Padding<PrefixValue, Sizes, SuffixValue>;

  /**
   *
   * @returns
   * @angularpackage
   */
  public lg(emit = true): this {
    this.set('lg', emit);
    return this;
  }

  /**
   * @param emit
   * @returns
   * @angularpackage
   */
  public md(emit = true): this {
    this.set('md', emit);
    return this;
  }

  /**
   *
   * @param emit
   * @returns
   * @angularpackage
   */
  public none(emit = true): this {
    this.set('none', emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public set(
    size: Sizes | 'none' | undefined,
    emit = true,
    prefix: PrefixValue | undefined = this.prefix?.value,
    suffix: SuffixValue | undefined = this.suffix?.value,
    config: SizeConfig | undefined = this.#config
  ): this {
    this.#padding =
      size === 'none' || typeof size === 'undefined'
        ? undefined
        : new Padding(size, {prefix, suffix}, config);
    emit === true && this.emit(this.#padding);
    return this;
  }

  /**
   *
   * @param config
   * @returns
   * @angularpackage
   */
  public setConfig(config: SizeConfig): this {
    this.#config = config;
    // TODO: css variable name
    Object.keys(config).forEach((size) =>
      (document.querySelector(':root') as HTMLElement).style.setProperty(
        `--${this.#padding?.getValueOf()}`,
        config[size as keyof typeof config] as string
      )
    );
    // Object.keys(config).forEach((size) =>
    //   document.documentElement.style.setProperty(
    //     `--${this.#padding?.prefix}-${size}`,
    //     config[size as keyof typeof config] as string
    //   )
    // );
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public sm(emit = true): this {
    this.set('sm', emit);
    return this;
  }

  /**
   *
   */
  // public toNgClass(): { [index: string]: boolean } | undefined {
  //   return this.#padding?.toNgClass(this.active?.status);
  // }

  /**
   *
   * @returns
   * @angularpackage
   */
  public xl(emit = true): this {
    this.set('xl', emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public xs(emit = true): this {
    this.set('xs', emit);
    return this;
  }
}
