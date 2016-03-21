import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '~/actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    className="list-group-item"
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}>
                    {book.title}
                </li>
            );
        });
    }
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

/**
 * Whatever is returned will show up as props
 * inside of BookList
 */
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

// Anything returned from this func will end up as props on <BookList /> container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called. The result should be passed to all reducers
    // With this we can call this.props.selectBook()
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from component to container.
// Needs to know about this new dispatch method -> selectBook. Make it available as props
// this.props.books (from mapStateToProps) -> props got from reducers
// this.props.selectBook (from mapDispatchToProps) -> Action creator
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
