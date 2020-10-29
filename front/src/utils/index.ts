export function generateHexColor(existentColors: string[]): string {
  const parseHexString = (hexString: string) => hexString.length === 6 ? `${hexString}a` : hexString;
  const color = parseHexString(`#${Math.ceil(Math.random() * 16777215).toString(16)}`);

  return existentColors.includes(color)
    ? generateHexColor(existentColors)
    : color;
}

export function areObjectsEqual(
  value1: Record<string, any>,
  value2: Record<string, any>
): boolean {
  return JSON.stringify(value1) === JSON.stringify(value2);
}
