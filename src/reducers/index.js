import { combineReducers } from 'redux';
import BooksReducer from '~/reducers/reducer_books';

/**
 * how reducers link to state.
 * When we call the reducer we return {books: BooksReducer()}
 */
const rootReducer = combineReducers({
    books: BooksReducer
});

export default rootReducer;
