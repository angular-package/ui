// Rxjs.
import { Observer } from 'rxjs';

// Class.
import { Prefix } from './prefix.class';
import { Suffix } from './suffix.class';

// Utilities.
import { Ability, Active, String } from '../../';

// Rxjs.
import { Subjects } from '../../rxjs';

// Type.
import { AffixOptions } from '../interface/affix-options.interface';
import { AffixedName } from '../type/affixed-name.type';
import { PrefixedName } from '../type/prefixed-name.type';
import { SuffixedName } from '../type/suffixed-name.type';

/**
 *
 */
export class Name<
  AvailableNames extends string = string,
  PrefixValue extends string | undefined = undefined,
  NameValue extends AvailableNames = AvailableNames,
  SuffixValue extends string | undefined = undefined
> extends String<NameValue> {
  /**
   *
   */
  public get ability(): Ability {
    return this.#ability;
  }

  /**
   *
   */
  public get active(): Active {
    return this.#active;
  }

  /**
   *
   */
  public get availableNames(): AvailableNames[] | undefined {
    return this.#availableNames;
  }

  /**
   *
   */
  public get resolvedConfig(): AffixOptions<
    PrefixValue,
    SuffixValue,
    AvailableNames
  > {
    return {
      availableNames: this.#availableNames,
      prefix: this.#prefix?.value,
      suffix: this.#suffix?.value,
    };
  }

  /**
   *
   */
  public get get(): AffixedName<PrefixValue, NameValue, SuffixValue> {
    return Name.template`${this.#availableNames}${this.#prefix?.value}${
      this.#name.value
    }${this.#suffix?.value}` as any;
  }

  /**
   *
   */
  public get name(): NameValue | undefined {
    return this.#name.value;
  }

  /**
   *
   */
  public get prefix(): Prefix<PrefixValue | undefined> | undefined {
    return this.#prefix;
  }

  /**
   *
   */
  public get suffix(): Suffix<SuffixValue | undefined> | undefined {
    return this.#suffix;
  }

  /**
   *
   */
  public get withPrefix(): PrefixedName<PrefixValue, NameValue> {
    return [this.#prefix?.value, this.#name.value]
      .filter((v) => typeof v === 'string')
      .join('-') as any;
  }

  /**
   *
   */
  public get withSuffix(): SuffixedName<NameValue, SuffixValue> {
    return [this.#name.value, this.#suffix?.value]
      .filter((v) => typeof v === 'string')
      .join('-') as any;
  }

  /**
   *
   */
  #ability: Ability = new Ability(true);

  /**
   *
   */
  #active: Active = new Active(true);

  /**
   *
   */
  #availableNames?: AvailableNames[];

  /**
   *
   */
  #name = new String<NameValue>();

  /**
   *
   */
  #prefix?: Prefix<PrefixValue | undefined>;

  /**
   *
   */
  #subjects = new Subjects<'subscription', any>(['subscription']);

  /**
   *
   */
  #suffix?: Suffix<SuffixValue | undefined>;

  /**
   *
   * @param strings
   * @param values
   * @returns
   * @angularpackage
   */
  protected static template<
    AvailableNames extends string | undefined,
    PrefixValue extends string | undefined,
    SuffixValue extends string | undefined,
    Value extends string | undefined
  >(
    strings: TemplateStringsArray,
    ...values: [AvailableNames[] | undefined, PrefixValue, Value, SuffixValue]
  ): string {
    let availableNames: AvailableNames[] | undefined,
      prefix: PrefixValue,
      name: Value,
      suffix: SuffixValue;
    [availableNames, prefix, name, suffix] = values;
    const ingredients = [prefix, name, suffix];
    return Array.isArray(availableNames) && availableNames.length > 0
      ? // If name exists in the available names.
        availableNames.indexOf(name as any) > -1
        ? ingredients
            .filter(
              (ingredient) =>
                typeof ingredient === 'string' && ingredient.length > 0
            )
            .join('-')
        : ''
      : ingredients
          .filter((ingredient) => typeof ingredient === 'string')
          .join('-');
  }

  /**
   *
   * @param name
   * @param prefix
   * @param availableNames
   * @angularpackage
   */
  constructor(
    name?: NameValue,
    options?: AffixOptions<PrefixValue, SuffixValue, AvailableNames>
  ) {
    super(
      Name.template`${options?.availableNames}${options?.prefix}${name}${options?.suffix}` as NameValue
    );
    this.#availableNames = options?.availableNames;
    this.#prefix = options?.prefix ? new Prefix(options?.prefix) : undefined;
    this.#suffix = options?.suffix ? new Suffix(options?.suffix) : undefined;
    this.#name.set(name);
  }

  /**
   *
   */
  public emit(): this {
    this.#subjects.get('subscription').next(this.get);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public getValue(): AffixedName<PrefixValue, NameValue, SuffixValue> {
    return this.get;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public has(): boolean {
    return typeof this.#name === 'string';
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public isNameAvailable(name?: NameValue): boolean {
    return Array.isArray(this.#availableNames) && typeof name === 'string'
      ? this.#availableNames.indexOf(name) > -1
      : false;
  }

  /**
   *
   * @param name
   * @returns
   * @angularpackage
   */
  public set(name: NameValue | undefined, emit = true): this {
    this.#name.set(
      new Name(name, { availableNames: this.availableNames }).value
    ),
      emit === true && this.emit();
    return this;
  }

  /**
   *
   * @param prefix
   * @returns
   * @angularpackage
   */
  public setPrefix(prefix?: PrefixValue | undefined): this {
    this.#prefix = new Prefix(prefix);
    return this;
  }

  /**
   *
   * @param suffix
   * @returns
   * @angularpackage
   */
  public setSuffix(suffix?: SuffixValue | undefined): this {
    this.#suffix = new Suffix(suffix);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public subscribe<Type = AffixedName<PrefixValue, NameValue, SuffixValue>>(
    observer?: Partial<Observer<Type | undefined>>
  ): this {
    this.#subjects.get('subscription').subscribe(observer);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public unsubscribe(): this {
    this.#ability.unsubscribe();
    this.#active.unsubscribe();
    this.#subjects.unsubscribeAll();
    return this;
  }

  /**
   *
   */
  public toNgClass(active?: boolean ): { [index: string]: boolean | undefined } {
    return { [this.get]: active || this.#active.status };
  }
}
