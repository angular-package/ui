// Class.
import { Size } from '../../size/src/size.class';

// Type.
import { SizesConfig } from '../../size/type/sizes-config.type';
import { Sizes } from '../../size/type/sizes.type';

/**
 *
 */
export class Padding<
  Prefix extends string | undefined = 'padding',
  Value extends Sizes = Sizes,
  Suffix extends string | undefined = string
> extends Size<Prefix, Value, Suffix> {
  /**
   *
   * @param size
   * @param options
   * @param config
   * @angularpackage
   */
  constructor(
    size: Value,
    options?: {
      prefix?: Prefix;
      suffix?: Suffix;
    },
    config?: SizesConfig
  ) {
    super(
      size,
      {
        prefix: 'padding' as Prefix,
        ...options,
      },
      config
    );
  }
}
