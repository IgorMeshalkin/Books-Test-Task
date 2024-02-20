export type Book = {
    id: string;
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    thumbnail: string;
}

export type BookState = {
    totalCount: number;
    list: Book[];
}

export const getBookFromApi = (item: any):Book => {
    return {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories,
        description: item.volumeInfo.description,
        thumbnail: item.volumeInfo.imageLinks.thumbnail
    };
}