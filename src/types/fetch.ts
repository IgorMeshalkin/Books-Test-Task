export type FetchState = {
    isFetching: boolean;
    fetchIsOver: boolean;
    startIndex: number;
    query: string;
    category: string;
    sortOption: string;
}

export const getFetchState = (query: string, category: string, sortOption: string, startIndex: number):FetchState => {
    return {
        isFetching: true,
        fetchIsOver: false,
        startIndex: startIndex,
        query: query,
        category: category,
        sortOption: sortOption
    }
}