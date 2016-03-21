/**
 * @param  {Object} state  not application state, only the state this reducer is responsible for
 * @param  {Object} action The action taken
 */
export default function reducerActiveBook(state = null, action) {
    // We can't return undefined. We should not mutate our state ever.
    switch (action.type) {
    case 'BOOK_SELECTED':
        return action.payload;
    }
    // If we don't care about the action passed in the params
    return state;
}
