import React from 'react';
import stl from './BookItem.module.css';
import {Book} from "../../../types/book";
import {imagesAlt} from "../../../source/staticContent";
import {getStringByArray} from "../../../utils/stringFunctions";
import {useAppDispatch} from "../../../hook";
import {setBookDetailsStatus} from "../../../store/slices/bookSlice";

const BookItem: React.FC<{ book: Book, selectedBook: Book, selectBook: Function }> = ({book, selectedBook, selectBook}) => {
    const dispatch = useAppDispatch();

    // Changes selected book if is not current book, or just opens details window.
    const onItemClick = () => {
        if (selectedBook === book) {
            dispatch(setBookDetailsStatus(true));
        } else {
            selectBook(book);
        }
    }

    return (
        <div className={stl.main}>
            <div className={stl.imageContainer} onClick={() => onItemClick()}>
                <img src={book.imageLinks.smallThumbnail} className={stl.image} alt={imagesAlt} title={book.title}/>
            </div>
            <div className={[stl.textContainer, stl.small].join(" ")}>
                <span className={[stl.text, stl.categories].join(" ")}
                      title={getStringByArray(book.categories)}>{getStringByArray(book.categories)}</span>
            </div>
            <div className={[stl.textContainer, stl.big].join(" ")}>
                <span className={[stl.text, stl.title].join(" ")} title={book.title}>{book.title}</span>
            </div>
            <div className={[stl.textContainer, stl.big].join(" ")}>
                <span className={[stl.text, stl.authors].join(" ")}
                      title={getStringByArray(book.authors)}>{getStringByArray(book.authors)}</span>
            </div>
        </div>
    );
};

export default BookItem;