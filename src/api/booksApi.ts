import axios from "axios";
import {apiKey, fetchStep} from "../utils/systemVariables";

const REST_URL = "https://www.googleapis.com/books/v1/volumes";

export default class BookAPI {

    static async getBooks(query: string, category: string, sortOption: string, startIndex: number) {
        return await axios.get(REST_URL, {
            params: {
                maxResults: fetchStep,
                startIndex: startIndex,
                q: query + (category === 'all' ? '' : '+subject:' + category),
                orderBy: sortOption,
                key: apiKey
            }
        });
    }
}