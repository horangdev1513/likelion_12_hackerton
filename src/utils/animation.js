export function splitText(text) {
  return text.split('').map((char, index) => ({
    char,
    index,
  }));
}
