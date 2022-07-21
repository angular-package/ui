// Type.
import { Positions } from '../../type/positions.type';

// Constant.
import { BOTTOM_POSITIONS } from './bottom-positions.const';
import { LEFT_POSITIONS } from './left-positions.const';
import { MIDDLE_POSITIONS } from './middle-positions.const';
import { OUTSIDE_POSITIONS } from './outside-positions.const';
import { RIGHT_POSITIONS } from './right-positions.const';
import { TOP_POSITIONS } from './top-positions.const';

/**
 * Available positions that are used in the `Position` class to check.
 */
export const AVAILABLE_POSITIONS: Positions[] = [
  // Bottom.
  ...BOTTOM_POSITIONS,

  // Left.
  ...LEFT_POSITIONS,

  // Middle.
  ...MIDDLE_POSITIONS,

  // Outside.
  ...OUTSIDE_POSITIONS,

  // Right.
  ...RIGHT_POSITIONS,

  // Top.
  ...TOP_POSITIONS
];
