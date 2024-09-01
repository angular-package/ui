import { Colors } from '../type/colors.type';

// TODO: Use AVAILABLE_COLORS.
export const CSS_COLORS: Exclude<Colors, 'basic' | 'default'>[] = [
  // Shade colors.
  'dark',
  'light',

  // Core colors.
  'accent',

  // Primary color.
  'primary',
  'primary-dark',
  'primary-light',

  // Secondary color.
  'secondary',
  'secondary-dark',
  'secondary-light',

  // Gray colors.
  'gray',
  'gray-dark',
  'gray-light',

  // Bg.
  'bg',
  'bg-dark',
  'bg-light',

  // Border colors.
  'border',
  'border-dark',
  'border-light',

  // Link colors.
  'link',
  'link-dark',
  'link-light',

  // Control colors.
  'disabled',
  'error',
  'info',
  'success',
  'warning',

  // Other colors.
  'code',
  'highlight',

  // Body colors.
  'body-bg',
  'body-font',
];
