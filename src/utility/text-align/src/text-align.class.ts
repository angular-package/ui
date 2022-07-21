// Class.
import { Align } from '../../align/src/align.class';

// Constant.
import { AVAILABLE_TEXT_ALIGN } from './available-text-align.const';

// Type.
import { TxtAlign } from '../type/txt-align.type';

/**
 *
 */
export class TextAlign<
  AvailableAlign extends string = TxtAlign,
  Value extends AvailableAlign = AvailableAlign
> extends Align<'text', AvailableAlign, Value> {
  constructor(
    align: Value,
    availableAlign = AVAILABLE_TEXT_ALIGN as AvailableAlign[]
  ) {
    super(align, {
      prefix: 'text',
      availableAlign,
    });
  }
}
