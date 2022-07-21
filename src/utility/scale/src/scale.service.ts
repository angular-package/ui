// // @angular.
// import { Injectable } from '@angular/core';

// // Class.
// import { Scale } from './scale.class';

// // Service.
// import { CommonService } from '../../lib/common-service';

// // Type.
// import { Levels } from '../type/levels.type';

// /**
//  *
//  */
// @Injectable()
// export class ScaleService<
//   PrefixValue extends string | undefined = undefined,
//   SuffixValue extends string | undefined = undefined
// > extends CommonService<
//   PrefixValue,
//   SuffixValue,
//   Scale<PrefixValue, Levels, SuffixValue>
// > {
//   /**
//    *
//    */
//   public get get(): Scale<PrefixValue, Levels, SuffixValue> | undefined {
//     return this.#scale;
//   }

//   /**
//    *
//    */
//   public get level(): Levels | undefined {
//     return this.#scale?.level;
//   }

//   /**
//    *
//    */
//   public get scale(): Scale<PrefixValue, Levels, SuffixValue> | undefined {
//     return this.#scale;
//   }

//   /**
//    *
//    */
//   #scale?: Scale<PrefixValue, Levels, SuffixValue>;

//   /**
//    *
//    */
//   public emit(): this {
//     super.emit(this.#scale);
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
//     level?: Levels | 'none',
//     emit = true,
//     prefix: PrefixValue | undefined = this.prefix?.value,
//     suffix: SuffixValue | undefined = this.suffix?.value
//     // config: SizeConfig | undefined = this.#config
//   ): this {
//     this.#scale =
//       level === 'none' || typeof level === 'undefined'
//         ? undefined
//         : typeof level === 'string'
//         ? new Scale(level, { prefix, suffix })
//         : this.#scale;
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


// }
