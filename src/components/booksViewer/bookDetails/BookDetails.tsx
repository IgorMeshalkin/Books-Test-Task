import React, {useEffect} from 'react';
import stl from './BoolDetails.module.css';
import {Book} from "../../../types/book";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {setBookDetailsStatus} from "../../../store/slices/bookSlice";
import {imagesAlt} from "../../../source/staticContent";
import {getStringByArray} from "../../../utils/stringFunctions";
import CloseButton from "../../ui/close-button/CloseButton";

const BookDetails: React.FC<{ selectedBook: Book }> = ({selectedBook}) => {
    const dispatch = useAppDispatch();
    const booksDetailStatus = useAppSelector(state => state.books.detailsIsActive);

    useEffect(() => {
        if (selectedBook.id != '') {
            dispatch(setBookDetailsStatus(true))
        }
    }, [selectedBook])

    const closeDetails = () => {
        dispatch(setBookDetailsStatus(false))
    }

    return (
        <div className={booksDetailStatus ? [stl.main, stl.active].join(" ") : stl.main}>
            <div className={stl.imageContainer}>
                <img src={selectedBook.imageLinks.thumbnail} className={stl.image} alt={imagesAlt}/>
            </div>
            <div className={stl.textsGeneralContainer}>
                <div className={[stl.textContainer, stl.small].join(" ")}>
                    <span className={[stl.text, stl.category].join(" ")}>{getStringByArray(selectedBook.categories)}</span>
                </div>
                <div className={[stl.textContainer, stl.medium].join(" ")}>
                    <span className={[stl.text, stl.title].join(" ")}>{selectedBook.title}</span>
                </div>
                <div className={[stl.textContainer, stl.small].join(" ")}>
                    <span className={[stl.text, stl.authors].join(" ")}>{getStringByArray(selectedBook.authors)}</span>
                </div>
                <div className={[stl.textContainer, stl.big].join(" ")}>
                    <div className={stl.description}>{selectedBook.description}</div>
                </div>
            </div>
            <div className={stl.closeButtonContainer}>
                <CloseButton onClick={closeDetails}/>
            </div>
        </div>
    );
};

export default BookDetails;