// Type.
import { Positions } from './positions.type';

/**
 *
 */
export type FooterPositions = Extract<
  Positions,
  'bottom-center' | 'bottom-left' | 'bottom-right'
>;
