// @angular.
import { Injectable } from '@angular/core';

// Scale.
import {
  // Type.
  Levels,

  // Class.
  Scale,
} from '../../scale';

@Injectable()
export class BlurService<
  Prefix extends string | undefined
> extends Scale<Levels, `${Prefix}-blur`> {
  constructor() {
    super();
  }
}
