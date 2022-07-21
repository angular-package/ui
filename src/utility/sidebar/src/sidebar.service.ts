// @angular.
import { Injectable } from '@angular/core';

// Utilities.
import { Ability } from '../../ability';

// Service.
// import { AbilityService } from '../../ability/src/ability.service';
import { Active } from '../../active';
import { ActiveService } from '../../active/src/active.service';
import { ExpandableService } from '../../expandable/src/expandable.service';
import { Size } from '../../size';
// import { SizeService } from '../../size/src/size.service';

/**
 *
 */
@Injectable()
export class SidebarService {

  // public size = new SizeService<'sidebar-size'>().setPrefix('sidebar-size');
  public get size(): Size<'sidebar-size'> {
    return this.#size;
  }

  public get ability(): Ability {
    return this.#ability;
  }

  public get active(): Active {
    return this.#active;
  }

  public expandable = new ExpandableService(false);

  #active = new Active(false);
  #ability = new Ability(false);
  #expandable?: ExpandableService;
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
