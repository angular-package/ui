import { BottomPositions } from './bottom-positions.type';
import { LeftPositions } from './left-positions.type';
import { MiddlePositions } from './middle-positions.type';
import { OutsidePositions } from './outside-positions.type';
import { RightPositions } from './right-positions.type';
import { TopPositions } from './top-positions.type';

/**
 *
 */
export type Positions =
  | BottomPositions
  | LeftPositions
  | MiddlePositions
  | OutsidePositions
  | RightPositions
  | TopPositions
;
