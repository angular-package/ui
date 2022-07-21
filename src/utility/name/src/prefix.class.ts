// Class.
import { Affix } from './affix.class';

/**
 *
 */
export class Prefix<Value extends string | undefined> extends Affix<Value> {
  constructor(value?: Value, pattern?: RegExp) {
    super(value, pattern);
  }
}
