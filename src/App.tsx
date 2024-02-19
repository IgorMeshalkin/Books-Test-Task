import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from './hook';

import './App.css';
import BookAPI from "./api/booksApi";
import SearchPanel from "./components/searchPanel/SearchPanel";
import {finishFetching} from "./store/slices/fetchSlice";
import BooksViewer from "./components/booksViewer/BooksViewer";


function App() {
    const dispatch = useAppDispatch();

    const books = useAppSelector(state => state.books.list);
    const fetchState = useAppSelector(state => state.fetchState);

    useEffect(() => {
        if (fetchState.isFetching) {
            BookAPI.getBooks(fetchState.query, fetchState.category, fetchState.sortOption, fetchState.startIndex)
                .then(res => {
                    res.data.items.forEach((item: any) => {
                        // console.log(item)
                        console.log(item.volumeInfo.title)
                        console.log(item.volumeInfo.categories)
                    })
                    // res.data.items.forEach((item: any) => {
                    //     try {
                    //         dispatch(addBooks(getBookFromApi(item)));
                    //     } catch (e) {
                    //         console.log('Того рот! - ' + item.id)
                    //     }
                    // })
                })
                .catch(() => {

                })
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
