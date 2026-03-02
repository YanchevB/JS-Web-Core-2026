function unknownResponse(param: unknown): string {
  if (typeof param === 'object' && 
    param !== null &&
    'value' in param &&
    typeof param['value'] === 'string'
  ) {
    return param['value'];
  } else {
    return '-'
  }
}

console.log(unknownResponse({ code: 200, text: 'Ok', value: [1, 2, 3] }));
console.log(unknownResponse({ code: 301, text: 'Moved Permanently', value: 'New Url' }));