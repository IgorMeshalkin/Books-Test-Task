export type Book = {
    id: string;
    title: string;
    authors: string[];
    description: string;
    thumbnail: string;
}

export const getBookFromApi = (item: any):Book => {
    const result: Book = {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        description: item.volumeInfo.description,
        thumbnail: item.volumeInfo.imageLinks.thumbnail
    }
    return result;
}