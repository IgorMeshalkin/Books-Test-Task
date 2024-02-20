import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './hook';

import './App.css';
import BookAPI from "./api/booksApi";
import SearchPanel from "./components/searchPanel/SearchPanel";
import {finishFetching, overFetch} from "./store/slices/fetchSlice";
import BooksViewer from "./components/booksViewer/BooksViewer";
import {addBooks, setBooksCount} from "./store/slices/bookSlice";
import {getBookFromApi} from "./types/book";
import {fetchBooksFailMessage} from "./source/staticContent";
import {fetchStep} from "./utils/systemVariables";


function App() {
    const dispatch = useAppDispatch();
    const books = useAppSelector(state => state.books.list);
    const fetchState = useAppSelector(state => state.fetchState);

    useEffect(() => {
        if (fetchState.isFetching) {
            BookAPI.getBooks(fetchState.query, fetchState.category, fetchState.sortOption, fetchState.startIndex)
                .then(res => {
                    if (res.status === 200) {
                        dispatch(setBooksCount(res.data.totalItems));
                        if (res.data.items) {
                            if (res.data.items.length < fetchStep) {
                                dispatch(overFetch());
                            }
                            res.data.items.forEach((item: any) => {
                                if (books.find(b => b.id === item.id) === undefined) {
                                    try {
                                        dispatch(addBooks(getBookFromApi(item)));
                                    } catch (e) {
                                        console.error('Failed to parse Book object. ' + e);
                                    }
                                }
                            })
                        }
                    } else {
                        alert(fetchBooksFailMessage);
                    }
                })
                .catch(() => alert(fetchBooksFailMessage))
                .finally(() => {
                    dispatch(finishFetching());
                })
        }
    }, [fetchState])

    return (
        <div className='App'>
            <div className='searchPanelContainer'>
                <SearchPanel/>
            </div>
            <div className='contentContainer'>
                <BooksViewer/>
            </div>
        </div>
    );
}

export default App;
