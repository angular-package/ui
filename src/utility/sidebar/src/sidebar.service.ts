// @angular.
import { Injectable } from '@angular/core';

// Utilities.
import { Ability } from '../../ability';
import { Active } from '../../active';
import { Expandable } from '../../expandable';
import { Size } from '../../size';

/**
 *
 */
@Injectable()
export class SidebarService {

  public get ability(): Ability {
    return this.#ability;
  }

  public get active(): Active {
    return this.#active;
  }

  public get expandable(): Expandable {
    return this.#expandable;
  }

  public get size(): Size<'sidebar-size'> {
    return this.#size;
  }

  #active = new Active(false);
  #ability = new Ability(false);
  #expandable = new Expandable(false);
  #size = new Size(undefined, { prefix: 'sidebar-size' });

  /**
   *
   */
  public unsubscribe(): void {
    this.ability.unsubscribe();
    this.active.unsubscribe();
    this.expandable.unsubscribe();
    this.#size.unsubscribe();
  }
}
