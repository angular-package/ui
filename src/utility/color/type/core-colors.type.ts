import { Shade } from './shade.type';

// Core colors.
export type CoreColors =
  | 'basic'
  | 'default'

  // Accent.
  | 'accent'

  // Shades.
  | Shade

  // Primary.
  | 'primary'
  | 'primary-dark'
  | 'primary-light'

  // Secondary.
  | 'secondary'
  | 'secondary-dark'
  | 'secondary-light';
