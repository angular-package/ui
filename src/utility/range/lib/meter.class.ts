import { Range } from './range.class';

type MeterOptional<
  Low extends number,
  High extends number,
  Optimum extends number
> = {
  low?: Low;
  high?: High;
  optimum?: Optimum;
  step?: number;
};

/**
 *
 */
export class Meter<
  Min extends number,
  Max extends number,
  Low extends number,
  High extends number,
  Optimum extends number
> extends Range<Min, Max, number> {
  constructor(
    min: Min,
    max: Max,
    value?: number,
    optional?: MeterOptional<Low, High, Optimum>
  ) {
    super(min, max, value, optional?.step);
  }
}

new Meter(0, 100, 50, { low: 10, high: 20, optimum: 80 });

