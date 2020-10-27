export function generateHexColor(arr: string[]): string {
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`
    return arr.includes(color) ? generateHexColor(arr) : color
}