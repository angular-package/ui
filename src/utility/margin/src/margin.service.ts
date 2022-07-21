// @angular.
import { Injectable } from '@angular/core';

// Class.
import { Margin } from './margin.class';

// Type.
import { Sizes } from '../../size';

/**
 *
 */
@Injectable()
export class MarginService<
  Prefix extends string | undefined = 'margin',
  Suffix extends string | undefined = undefined
> extends Margin<Prefix, Sizes, Suffix> {}
