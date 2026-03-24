type DetermineParamType<T> = T extends number ? number : string;

function conditionalNumber<T>(value: DetermineParamType<T>) {
    return typeof value === 'number' ? value.toFixed(2) : value;
}

console.log(conditionalNumber<number>(20.3555));
console.log(conditionalNumber<string>('wow'));
console.log(conditionalNumber<boolean>('a string'));
// conditionalNumber<boolean>(30); //TS error
// conditionalNumber<number>('test'); //TS error