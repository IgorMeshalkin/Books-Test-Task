import axios from "axios";
import {apiKey, fetchStep, restUrl} from "../utils/systemVariables";
import {getQueryString} from "../utils/stringFunctions";

export default class BookAPI {

    static async getBooks(query: string, category: string, sortOption: string, startIndex: number) {
        return await axios.get(restUrl, {
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