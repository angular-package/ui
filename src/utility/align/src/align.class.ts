// Class.
import { Name } from '../../name';

/**
 *
 */
export class Align<
  Prefix extends string,
  AvailableAlign extends string,
  Value extends AvailableAlign = AvailableAlign
> extends Name<AvailableAlign, Prefix, Value> {
  constructor(
    align: Value,
    options?: {
      prefix?: Prefix;
      availableAlign?: AvailableAlign[];
    }
  ) {
    super(align, options);
  }
}
