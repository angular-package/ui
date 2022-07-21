// Rxjs.
import { Subject, Observer } from 'rxjs';

// Name.
import { Prefix, Suffix } from '../../name';
import { Subjects } from '../../rxjs';

// Type.
import { Ability } from '../ability';
import { Active } from '../active';

/**
 *
 */
// export abstract class CommonService<
//   PrefixValue extends string | undefined = undefined,
//   SuffixValue extends string | undefined = undefined,
//   Type = any
// > {
//   /**
//    *
//    */
//   public get ability(): Ability | undefined {
//     return this.#ability;
//   }

//   /**
//    *
//    */
//   public get active(): Active | undefined {
//     return this.#active;
//   }

//   /**
//    *
//    */
//   public get pattern(): RegExp {
//     return this.#pattern;
//   }

//   /**
//    *
//    */
//   public get prefix(): Prefix<PrefixValue> | undefined {
//     return this.#prefix;
//   }

//   /**
//    *
//    */
//   public get suffix(): Suffix<SuffixValue> | undefined {
//     return this.#suffix;
//   }

//   /**
//    *
//    */
//   public get subject(): Subject<Type | undefined> {
//     return this.#subjects.get('subscription');
//   }

//   /**
//    *
//    */
//   public get subjects(): Subjects<'subscription', Type | undefined> {
//     return this.#subjects;
//   }

//   /**
//    *
//    */
//   #ability: Ability = new Ability(true);

//   /**
//    *
//    */
//   #active: Active = new Active(true);

//   /**
//    *
//    */
//   #pattern = /[^a-zA-Z0-9\-$_]/g;

//   /**
//    *
//    */
//   #prefix?: Prefix<PrefixValue>;

//   /**
//    *
//    */
//   #subjects = new Subjects<'subscription', Type | undefined>(['subscription']);

//   /**
//    *
//    */
//   #suffix?: Suffix<SuffixValue>;

//   /**
//    *
//    */
//   public emit(value: Type | undefined): this {
//     this.#subjects.get('subscription').next(value);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public setPrefix(prefix?: PrefixValue): this {
//     this.#prefix = prefix ? new Prefix(prefix, this.pattern) : undefined;
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public setSuffix(suffix?: SuffixValue): this {
//     this.#suffix = suffix ? new Suffix(suffix, this.pattern) : undefined;
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public subscribe(observer?: Partial<Observer<Type | undefined>>): this {
//     this.#subjects.get('subscription').subscribe(observer);
//     return this;
//   }

//   /**
//    *
//    * @returns
//    * @angularpackage
//    */
//   public unsubscribe(): this {
//     this.#ability.unsubscribe();
//     this.#active.unsubscribe();
//     this.#subjects.unsubscribeAll();
//     return this;
//   }
// }
