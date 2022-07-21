// @angular.
import { Injectable } from '@angular/core';
import { Levels, Scale } from '../../scale';

// Scale.
// import { ScaleService } from '../../scale';

// @Injectable()
// export class BlurService<
//   Prefix extends string | undefined
// > extends ScaleService<`${Prefix}-blur`> {
//   constructor() {
//     super();
//   }
// }

@Injectable()
export class BlurService<
  Prefix extends string | undefined
> extends Scale<Levels, `${Prefix}-blur`> {
  constructor() {
    super();
  }
}
