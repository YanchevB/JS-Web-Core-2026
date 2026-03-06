function optionalMultiplier(
  a?: number | string, 
  b?: number | string, 
  c?: number | string
): number {
  let realValues = [a, b, c]
    .filter(val => val !== undefined)
    .map(Number);

  if (realValues.length === 0) {
    return 1;
  }

  return realValues.reduce((acc, val) => acc * val);
}

console.log(optionalMultiplier('3', 5, '10'));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier());