import { Sizes } from '../type/sizes.type';

/**
 *
 */
export interface SizeOptions<Prefix, Suffix> {
  availableSizes?: Sizes[];
  prefix?: Prefix;
  suffix?: Suffix;
}
