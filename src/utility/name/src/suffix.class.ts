// Class.
import { Affix } from './affix.class';

/**
 *
 */
export class Suffix<Value extends string | undefined> extends Affix<Value> {
  constructor(value?: Value, pattern?: RegExp) {
    super(value, pattern);
  }
}
