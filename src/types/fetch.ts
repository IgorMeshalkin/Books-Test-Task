export type FetchState = {
    isFetching: boolean;
    startIndex: number;
    query: string;
    category: string;
    sortOption: string;
}

export const getFetchState = (query: string, category: string, sortOption: string, startIndex: number):FetchState => {
    return {
        isFetching: true,
        startIndex: startIndex,
        query: query,
        category: category,
        sortOption: sortOption
    }
}