type HTTPResponses =
    | { code: 200, text: 'OK'}
    | { code: 201, text: 'Created'}
    | { code: 301, text: 'Moved Permanently'}
    | { code: 400, text: 'Bad Request', printChars?: number}
    | { code: 404, text: 'Not Found', printChars?: number}
    | { code: 500, text: 'Internal Server Error', printChars?: number};

function printInformation(obj: HTTPResponses) {
    if ('printChars' in obj) {
        console.log(obj.text.slice(0, obj.printChars));
    } else {
        console.log(obj.text);
    }
}

printInformation({ code: 200, text: 'OK'});
printInformation({ code: 500, text: 'Internal Server Error', printChars: 1});
printInformation({ code: 404, text: 'Not Found', printChars: 3})