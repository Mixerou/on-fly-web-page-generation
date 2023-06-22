export const useCssUnitValidator = (value: unknown): boolean => {
  return typeof value === 'string'
    ? value.toString().match(/^\d+(|vh|vw|%)$/gm) !== null
    : typeof value === 'number'
}

export const useCssUnitParser = (value: unknown): string => {
  return typeof value === 'string'
    ? value
    : typeof value === 'number'
    ? `${value}rem`
    : '0'
}
