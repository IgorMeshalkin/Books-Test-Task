export type Book = {
    id: string;
    title: string;
    authors: string[];
    categories: string[];
    description: string;
    imageLinks: BookImageLinks;
}

type BookImageLinks = {
    thumbnail: string;
    smallThumbnail: string;
}

export type BookState = {
    totalCount: number;
    list: Book[];
    detailsIsActive: boolean;
}

export const getBookFromApi = (item: any):Book => {
    return {
        id: item.id,
        title: item.volumeInfo.title,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories,
        description: item.volumeInfo.description,
        imageLinks: {
            thumbnail: item.volumeInfo.imageLinks.thumbnail,
            smallThumbnail: item.volumeInfo.imageLinks.smallThumbnail
        }
    };
}

export const getEmptyBook = ():Book => {
    return {
        id: '',
        title: '',
        authors: [],
        categories: [],
        description: '',
        imageLinks: {
            thumbnail: '',
            smallThumbnail: ''
        }
    };
}