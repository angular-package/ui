import { Colors } from '../type/colors.type';

// TODO: Use AVAILABLE_COLORS.
export const CSS_COLORS: Exclude<Colors, 'basic' | 'default'>[] = [
  // Core colors.
  'accent',

  // Bg.
  'bg',
  'bg-dark',
  'bg-light',

  // Body colors.
  'body-bg',
  'body-font',

  // Border colors.
  'border',
  'border-dark',
  'border-light',

  // Shade colors.
  'dark',
  'light',

  // Gray colors.
  'gray',
  'gray-dark',
  'gray-light',

  // Link colors.
  'link',
  'link-dark',
  'link-light',

  // Primary color.
  'primary',
  'primary-dark',
  'primary-light',

  // Secondary color.
  'secondary',
  'secondary-dark',
  'secondary-light',

  // Control colors.
  'disabled',
  'error',
  'info',
  'success',
  'warning',

  // Other colors.
  'code',
  'highlight',
];
