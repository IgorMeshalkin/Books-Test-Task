import axios from "axios";
import {apiKey, fetchStep} from "../utils/systemVariables";

const REST_URL = "https://www.googleapis.com/books/v1/volumes";

export default class BookAPI {

    static async getBooks(query: string, category: string, sortOption: string, startIndex: number) {
        return await axios.get(REST_URL, {
            params: {
                q: getQueryString(query, category),
                maxResults: fetchStep,
                startIndex: startIndex,
                orderBy: sortOption,
                key: apiKey
            }
        });
    }
}

const getQueryString = (query: string, category: string):string => {
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