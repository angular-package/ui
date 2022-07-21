// @angular.
import { Inject, Injectable, InjectionToken } from '@angular/core';

// Class.
import { Position } from './position.class';

// Type.
import { Positions } from '../type';

// Service.
import { CommonService } from '../../lib/common-service';

// Token.
import { POSITIONAL_PREFIX } from './positional-prefix.token';
import { POSITIONAL_SUFFIX } from './positional-suffix.token';

/**
 *
 */
// @Injectable()
// export class Positional<
//   AvailablePositions extends Positions = Positions,
//   PrefixValue extends string | undefined = undefined,
//   SuffixValue extends string | undefined = undefined
// > extends CommonService<
//   PrefixValue,
//   SuffixValue,
//   Position<PrefixValue, AvailablePositions, SuffixValue>
// > {
//   /**
//    *
//    */
//   public get get():
//     | Position<PrefixValue, AvailablePositions, SuffixValue>
//     | undefined {
//     return this.#position;
//   }

//   /**
//    *
//    */
//   public get position():
//     | Position<PrefixValue, AvailablePositions, SuffixValue>
//     | undefined {
//     return this.#position;
//   }

//   /**
//    *
//    */
//   #position?: Position<PrefixValue, AvailablePositions, SuffixValue>;

//   constructor(
//     @Inject(POSITIONAL_PREFIX) prefix?: PrefixValue,
//     @Inject(POSITIONAL_SUFFIX) suffix?: SuffixValue
//   ) {
//     super();
//     super.setPrefix(prefix);
//     super.setSuffix(suffix);
//   }

//   /**
//    *
//    */
//   public emit(): this {
//     super.emit(this.#position);
//     return this;
//   }

//   /**
//    *
//    * @param emit
//    * @returns
//    * @angularpackage
//    */
//   public none(emit = true): this {
//     this.set('none', emit);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public set(
//     position?: AvailablePositions | 'none',
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//     // config: SizeConfig | undefined = this.#config
//   ): this {
//     this.#position =
//       position === 'none' || typeof position === 'undefined'
//         ? undefined
//         : typeof position === 'string'
//         ? new Position(position, {prefix, suffix})
//         : this.#position;
//     emit === true && this.emit();
//     return this;
//   }

//   /**
//    *
//    * @param config
//    * @returns
//    * @angularpackage
//    */
//   // public setConfig(config: SizeConfig): this {
//   //   this.#config = config;
//   //   Object.keys(config).forEach((size) =>
//   //     document.documentElement.style.setProperty(
//   //       `--${this.#prefix}-${size}`,
//   //       config[size as keyof Scale<Prefix, Level, Suffix>of config] as string
//   //     )
//   //   );
//   //   return this;
//   // }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public bottom(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('bottom' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public bottomCenter(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('bottom-center' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public bottomLeft(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('bottom-left' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public bottomRight(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('bottom-right' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public left(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('left' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public leftBottom(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('left-bottom' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public leftCenter(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('left-center' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public leftMiddle(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('left-middle' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public leftTop(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('left-top' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public middle(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('middle' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public middleCenter(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('middle-center' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public middleLeft(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('middle-left' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public middleRight(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('middle-right' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }
//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public right(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('right' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public rightBottom(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('right-bottom' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public rightCenter(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('right-center' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public rightMiddle(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('right-middle' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public rightTop(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('right-top' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public top(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('top' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public topCenter(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('top-center' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public topLeft(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('top-left' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public topRight(
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//   ): this {
//     this.set('top-right' as AvailablePositions, emit, prefix, suffix);
//     return this;
//   }

//   /**
//    *
//    */
//   public toNgClass(): { [index: string]: boolean } | undefined {
//     return this.#position?.toNgClass(this.active?.status);
//   }
// }
