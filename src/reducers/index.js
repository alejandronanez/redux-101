import { combineReducers } from 'redux';
import BooksReducer from '~/reducers/reducer_books';
import ActiveBook from '~/reducers/reducer_active_book';

/**
 * how reducers link to state.
 * When we call the reducer we return {books: BooksReducer()}
 */
const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
});

export default rootReducer;

