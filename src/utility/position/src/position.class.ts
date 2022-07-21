// Class.
import { Name } from '../../name/src/name.class';

// Constant.
import { AVAILABLE_POSITIONS } from './constant/available-positions.const';

// Type.
import { Positions } from '../type/positions.type';

/**
 *
 */
export class Position<
  AvailablePositions extends string = Positions,
  Prefix extends string | undefined = 'position',
  Value extends AvailablePositions = AvailablePositions,
  Suffix extends string | undefined = undefined
> extends Name<AvailablePositions, Prefix, Value, Suffix> {
  constructor(
    position?: Value,
    options?: {
      availablePositions?: AvailablePositions[],
      prefix?: Prefix;
      suffix?: Suffix;
    }
  ) {
    super(position, {
      availableNames: options?.availablePositions || AVAILABLE_POSITIONS as AvailablePositions[],
      prefix: 'position' as Prefix,
      suffix: options?.suffix,
    });
  }
}
