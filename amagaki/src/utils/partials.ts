type PartialOptions = string[];

export function getClassName(base: string, options?: PartialOptions) {
  if (!options) {
    return base;
  }
  return `${base} ${options.map(option => `${base}--${option}`).join(' ')}`;
}
