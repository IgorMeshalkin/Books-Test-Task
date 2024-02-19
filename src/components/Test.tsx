import React from 'react';
import {useAppSelector} from "../hook";

const Test = () => {
    const books = useAppSelector(state => state.books.list);
    return (
        <div style={{backgroundColor: "yellow"}}>
            {books.map((book) => (
                <span key={book.id}>{book.title}</span>
            ))}
        </div>
    );
};

export default Test;