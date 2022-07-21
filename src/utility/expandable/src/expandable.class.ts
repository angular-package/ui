// Status.
import { Ability } from '../../ability';
import { Status } from '../../lib/status.class';

/**
 *
 */
export class Expandable extends Ability {
  /**
   *
   */
  public get expanded(): Status {
    return this.#expanded;
  }

  /**
   *
   */
  #expanded = new Status(false);

  /**
   * Expand the sidebar if it's folded and emits status.
   * @param emit
   * @returns The return value is an instance of `SpectreSidebarService`.
   * @angularpackage
   */
  public expand(emit = true): this {
    this.#expanded.truthy(emit);
    return this;
  }

  /**
   * Fold the sidebar if it's expanded and emits status.
   * @param emit
   * @returns The return value is an instance of `SpectreSidebarService`.
   * @angularpackage
   */
  public fold(emit = true): this {
    this.#expanded.falsy(emit);
    return this;
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isExpanded(): boolean {
    return this.#expanded.isTrue();
  }

  /**
   *
   * @returns
   * @angularpackage
   */
  public isFolded(): boolean {
    return this.#expanded.isFalse();
  }

  /**
   *
   * @param expanded
   * @param emit
   * @returns
   * @angularpackage
   */
  public setExpanded(expanded?: boolean, emit = true): this {
    this.#expanded.set(expanded, emit);
    return this;
  }

  /**
   *
   * @param folded
   * @param emit
   * @returns
   * @angularpackage
   */
  public setFolded(folded?: boolean, emit = true): this {
    this.#expanded.set(!folded);
    return this;
  }
}
