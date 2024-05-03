type Options = Record<string, boolean | string>;

export function classNames(cls: string, options: Options = {}, additional: string[] = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(options)
      .filter(([_, value]) => Boolean(value))
      .map(([cls]) => cls),
  ].join(' ');
}