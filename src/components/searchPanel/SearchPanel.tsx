import React, {useEffect, useRef} from 'react';
import stl from './SearchPanel.module.css'
import {
    categories,
    categoriesLabel,
    imagesAlt,
    searchPanelTitle,
    sortingLabel,
    sortOptions
} from "../../source/staticContent";
import magnifyingGlass from "../../source/images/magnifying-glass.png"
import {useAppDispatch} from "../../hook";
import {startFetching} from "../../store/slices/fetchSlice";
import {getFetchState} from "../../types/fetch";
import {clearBookList, setBookDetailsStatus} from "../../store/slices/bookSlice";

const SearchPanel = () => {
    const dispatch = useAppDispatch();

    // Elements refs.
    const inputRef = useRef<HTMLInputElement>(null);
    const categoriesSelectRef = useRef<HTMLSelectElement>(null);
    const sortOptionsSelectRef = useRef<HTMLSelectElement>(null);

    // Listens push buttons and calls 'pressKey' function.
    useEffect(() => {
        window.addEventListener('keydown', event => pressKey(event));
        return () => window.removeEventListener('keydown', event => pressKey(event));
    }, [])

    // If pressed key is 'Enter' and input is in focus calls 'search' function.
    const pressKey = (event: KeyboardEvent) => {
        if (event.code === 'Enter' && (inputRef && document.activeElement === inputRef.current)) {
            search();
        }
    }

    // Starts first fetching books from api.
    const search = () => {
        if (inputRef.current && categoriesSelectRef.current && sortOptionsSelectRef.current) {
            dispatch(setBookDetailsStatus(false))
            dispatch(clearBookList());
            dispatch(startFetching(
                getFetchState(
                    inputRef.current.value,
                    categoriesSelectRef.current.value,
                    sortOptionsSelectRef.current.value,
                    0)));
        }
    }

    return (
        <div className={stl.background}>
            <div className={stl.main}>
                <div className={stl.verticalContainer}>
                    <h2 className={stl.title}>{searchPanelTitle}</h2>
                </div>
                <div className={stl.verticalContainer}>
                    <input className={stl.input} ref={inputRef}/>
                    <div className={stl.searchButtonContainer}>
                        <img src={magnifyingGlass} className={stl.searchButton} alt={imagesAlt} onClick={search}/>
                    </div>
                </div>
                <div className={stl.verticalContainer}>
                    <div className={stl.horizontalContainer}>
                        <div className={stl.verticalContainer}>
                            <span className={stl.title}>{categoriesLabel}</span>
                        </div>
                        <div className={stl.verticalContainer}>
                            <select className={stl.input} ref={categoriesSelectRef}>
                                {
                                    categories.map(category =>
                                        <option key={category.id}>{category.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className={stl.horizontalContainer}>
                        <div className={stl.verticalContainer}>
                            <span className={stl.title}>{sortingLabel}</span>
                        </div>
                        <div className={stl.verticalContainer}>
                            <select className={stl.input} ref={sortOptionsSelectRef}>
                                {
                                    sortOptions.map(sortOption =>
                                        <option key={sortOption.id}>{sortOption.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchPanel;