import stl from './BooksList.module.css'
import {getAllBooksCountMessage, loadMoreButtonText} from "../../../source/staticContent";
import Loader from "../../../ui/loader/Loader";
import {useAppDispatch, useAppSelector} from "../../../hook";
import {startAdditionalFetching} from "../../../store/slices/fetchSlice";

const BooksList = () => {
    const dispatch = useAppDispatch();
    const booksTotalCount = useAppSelector(state => state.books.totalCount);
    const books = useAppSelector(state => state.books.list);
    const fetch = useAppSelector(state => state.fetchState);

    // Returns css classes for the 'Load more...' button.
    const getLoadMoreButtonStyles = () => {
        if (!fetch.fetchIsOver) {
            return (books.length > 0 && books.length < booksTotalCount)
                ? stl.loadMoreButton
                : [stl.loadMoreButton, stl.notActive].join(" ");
        } else {
            return [stl.loadMoreButton, stl.notActive].join(" ");
        }
    }

    // Starts additional fetching.
    const loadMore = () => {
        dispatch(startAdditionalFetching());
    }

    return (
        <div className={stl.main}>
            <span className={[stl.lineContainer, stl.booksCount].join(" ")}>
                {booksTotalCount > 0 ? getAllBooksCountMessage(booksTotalCount) : ''}
            </span>
            <div className={stl.contentContainer}>
                {
                    books.map(book => <div key={book.id}>{book.title}</div>)
                }
            </div>
            <div className={stl.lineContainer}>
                <span className={getLoadMoreButtonStyles()} onClick={loadMore}>
                    {loadMoreButtonText}
                </span>
                <Loader size={2} isActive={fetch.isFetching && fetch.startIndex !== 0}/>
            </div>
            <Loader size={1} isActive={fetch.isFetching && fetch.startIndex === 0}/>
        </div>
    );
};

export default BooksList;