import { PatternTypes } from '../type/pattern-types.type';

export class Pattern {
  static #types = ['email', 'password', `search`, 'tel', `url`, 'text'];
  #pattern: Map<PatternTypes, string> = new Map();

  public static isAllowedType(type: string): type is PatternTypes {
    return this.#types.includes(type) ? true : false;
  }

  constructor() {
    this.#pattern
      .set('email', `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,14}$`)
      .set('password', `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$`)
      // .set('search', ``)
      // .set('tel', ``)
      // .set('text', ``)
      .set('url', `https://.*`);
  }

  public get(type: PatternTypes): string {
    return this.#pattern.get(type) || ``;
  }

  public has(type: PatternTypes): type is PatternTypes {
    return Pattern.isAllowedType(type) ? this.#pattern.has(type) : false;
  }

  public set(type: PatternTypes, value: string): this {
    Pattern.isAllowedType(type) && this.#pattern.set(type, value);
    return this;
  }
}
