function convertArrays(arr: string[]): [string, number] {
  const concatenatedString = arr.join('');
  return [concatenatedString, concatenatedString.length];
}

console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));