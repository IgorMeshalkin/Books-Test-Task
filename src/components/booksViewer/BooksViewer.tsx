import React, {useState} from 'react';
import BooksList from "./booksList/BooksList";
import {Book, getEmptyBook} from "../../types/book";
import BookDetails from "./bookDetails/BookDetails";

const BooksViewer = () => {
    const [selectedBook, setSelectedBook] = useState<Book>(getEmptyBook());
    return (
        <>
            <BooksList selectedBook={selectedBook} selectBook={setSelectedBook}/>
            <BookDetails selectedBook={selectedBook}/>
        </>
    );
};

export default BooksViewer;