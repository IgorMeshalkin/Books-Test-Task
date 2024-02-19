import {useState} from 'react';
import {useAppDispatch, useAppSelector} from './hook';

import {addTodo} from './store/todoSlice';

import './App.css';
import {addBooks} from "./store/bookSlice";
import BookAPI from "./api/booksApi";
import {getBookFromApi} from "./types/book";
import SearchPanel from "./components/searchPanel/SearchPanel";


function App() {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }

    const asd = () => {
        BookAPI.getAll().then(res => {
            res.data.items.forEach((item: any) => {
                try {
                    dispatch(addBooks(getBookFromApi(item)));
                } catch (e) {
                    console.log('Того рот! - ' + item.id)
                }
            })
        })
    }

    const books = useAppSelector(state => state.books.list);

    const dsa = () => {
        console.log(books)
    }


    return (
        <div className='App'>
            <div className='searchPanelContainer'>
                <SearchPanel/>
            </div>
        </div>
    );
}

export default App;
