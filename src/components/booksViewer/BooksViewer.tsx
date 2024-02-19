import React from 'react';
import {useAppSelector} from "../../hook";
import stl from './BooksViewer.module.css';
import Loader from "../../ui/loader/Loader";

const BooksViewer = () => {
    const books = useAppSelector(state => state.books.list);
    const fetch = useAppSelector(state => state.fetchState);

    return (
        <div className={stl.main}>
            {
                books.map(book =><div key={book.id}>{book.title}</div>)
            }
            <div className={stl.loaderContainer}>
                <Loader size={1} isActive={fetch.isFetching && fetch.startIndex === 0}/>
            </div>
        </div>
    );
};

export default BooksViewer;