import axios from "axios";

const REST_URL = "https://www.googleapis.com/books/v1/volumes";

export default class BookAPI {

    static async getAll() {
        const response = await axios.get(REST_URL, {
            // auth: {
            //     username: 'admin', password: 'admin'
            // },
            params: {
                maxResults: 30,
                q: 'steven s. + inauthor:steven',
                // key: apiKey
            }
        });
        return response
    }
}