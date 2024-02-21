import React, {useEffect, useState} from 'react';
import stl from './BookDetails.module.css';
import {Book} from "../../../types/book";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {setBookDetailsStatus} from "../../../store/slices/bookSlice";
import {imagesAlt} from "../../../source/staticContent";
import {getStringByArray} from "../../../utils/stringFunctions";
import CloseButton from "../../ui/close-button/CloseButton";

const BookDetails: React.FC<{ selectedBook: Book }> = ({selectedBook}) => {
    const dispatch = useAppDispatch();
    const booksDetailStatus = useAppSelector(state => state.books.detailsIsActive);

    // 'booksDetailStatus' state was changed or not.
    const [isActiveChanged, setIsActiveChanged] = useState(false);

    // If 'booksDetailStatus' state changing first time assigns 'true' value to 'isActiveChanged' state.
    useEffect(() => {
        if (booksDetailStatus && !isActiveChanged) {
            setIsActiveChanged(true)
        }
    }, [booksDetailStatus])

    // Returns css classes for main element. If 'isActiveChanged === false' returns class without animation.
    const getMainStyles = () => {
        if (!isActiveChanged) {
            return stl.main;
        } else {
            return booksDetailStatus ? [stl.main, stl.active].join(" ") : [stl.main, stl.notActive].join(" ");
        }
    }

    // Opens book details window after selected book changing.
    useEffect(() => {
        if (selectedBook.id != '') {
            dispatch(setBookDetailsStatus(true))
        }
    }, [selectedBook])

    // Closes book details window.
    const closeDetails = () => {
        dispatch(setBookDetailsStatus(false))
    }

    return (
        <div className={getMainStyles()}>
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