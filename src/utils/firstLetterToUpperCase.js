export function firstLetterToUpperCase(name) {
  const result = name.charAt(0).toUpperCase() + name.slice(1);
  return result;
}
