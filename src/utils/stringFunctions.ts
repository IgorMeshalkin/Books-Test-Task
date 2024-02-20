// Prepares special string for http query.
export const getQueryString = (query: string, category: string): string => {
    let result = '';
    if (query !== '') {
        result += 'intitle:' + query + '+inauthor:' + query;
    }
    if (category !== 'all') {
        result += query !== '' ? '+' : '';
        result += 'subject:' + category;
    }
    return result;
}

// Prepares string with the commas for the 'BookViewer'.
export const getStringByArray = (array: string[]): string => {
    let result = '';
    if (array) {
        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i < array.length - 1) {
                result += ', '
            }
        }
    }
    return result;
}