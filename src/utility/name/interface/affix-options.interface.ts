export interface AffixOptions<
  Prefix extends string | undefined,
  Suffix extends string | undefined,
  AvailableNames extends string
> {
  availableNames?: AvailableNames[];
  prefix?: Prefix;
  suffix?: Suffix;
}
