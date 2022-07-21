import { Maximum } from './maximum.class';
/**
 *
 */
export class Progress<Max extends number> {
  constructor(value = 0, max: Max){
  }



  public progressUp(): this {

    return this;
  }
}

new Progress(3, 30);
