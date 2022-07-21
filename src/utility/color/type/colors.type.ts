// Type.
import { BgColors } from './bg-colors.type';
import { BodyColors } from './body-colors.type';
import { BorderColors } from './border-colors.type';
import { ControlColors } from './control-colors.type';
import { CoreColors } from './core-colors.type';
import { GrayColors } from './gray-colors.type';
import { LinkColors } from './link-colors.type';
import { OtherColors } from './other-colors.type';

// Colors.
export type Colors =
  // Background colors.
  | BgColors

  // Body colors.
  | BodyColors

  // Border colors.
  | BorderColors

  // Control colors.
  | ControlColors

  // Core colors.
  | CoreColors

  // Gray colors.
  | GrayColors

  // Link colors.
  | LinkColors

  // Other colors.
  | OtherColors;
