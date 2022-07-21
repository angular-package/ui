// @angular.
import { Injectable } from '@angular/core';

// Class.
import { Size } from './size.class';

// Type.
import { Sizes } from '../type/sizes.type';

/**
 *
 */
@Injectable()
export class SizeService<
  PrefixValue extends string | undefined = undefined,
  SuffixValue extends string | undefined = undefined
> extends Size<PrefixValue, Sizes, SuffixValue> {}
