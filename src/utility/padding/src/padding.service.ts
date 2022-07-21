// @angular.
import { Injectable } from '@angular/core';

// Class.
// import { CommonService } from '../../lib/common-service';
import { Padding } from './padding.class';

// Type.
import {
  Sizes,
  // SizeConfig
} from '../../size';

/**
 *
 */
@Injectable()
export class PaddingService<
  Prefix extends string | undefined = 'padding',
  Suffix extends string | undefined = undefined
> extends Padding<Prefix, Sizes, Suffix> {}
