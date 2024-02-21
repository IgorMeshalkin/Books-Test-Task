// Search panel
export const searchPanelTitle = 'Search for books';
export const categoriesLabel = 'Categories';
export const sortingLabel = 'Sorting by';
export const emptyQueryMessage = 'Введите запрос или выберите категорию для поиска';

export const categories = [
    {id: 1, name: 'all'},
    {id: 2, name: 'art'},
    {id: 3, name: 'biography'},
    {id: 4, name: 'computers'},
    {id: 5, name: 'history'},
    {id: 6, name: 'medical'},
    {id: 7, name: 'poetry'}
];

export const sortOptions = [
    {id: 1, name: 'relevance'},
    {id: 2, name: 'newest'}
];

// BooksViewer
export const getAllBooksCountMessage = (count: number) => {
    return 'Found ' + count + ' results.'
}
export const loadMoreButtonText = 'Load more...'

// General
export const imagesAlt = 'Не удалось загрузить изображение';
export const fetchBooksFailMessage = 'Не удалось загрузить данные о книгах';
