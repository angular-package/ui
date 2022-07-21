// Main.
export * from './lib';

// Primitive wrapper object.
export { Boolean } from './boolean';
export { Number } from './number';
export { String } from './string';


// Ability.
export { Ability, AbilityService } from './ability';

export { Active, ActiveService } from './active';

export { Align } from './align';

export { BlurService } from './blur';

export {
  CSS_COLORS,

  // Class.
  Color,
  CssPropertyColor,

  // Type.
  BgColors,
  Colors,
  Shade,
} from './color';

export { CssVar } from './css-var';

export { Expandable, ExpandableService } from './expandable';

export { Margin, MarginService } from './margin';

export {
  Padding,
  PaddingService,
} from './padding';

export { Pattern } from './pattern';

export * from './position';

export {
  Levels,
  Scale,
  // ScaleService
} from './scale';

export { SidebarService } from './sidebar';

export {
  // Class.
  Size,
  SizeService,

  // Type.
  Sizes,
  SizesConfig,
} from './size';

// Text align.
export { TextAlign, TxtAlign } from './text-align';

/*
  Types.
*/
export { Shape } from './type/shape.type';
export { Presence } from './type/presence.type';
export { TransitionDuration } from './type/transition-duration.type';
