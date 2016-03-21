import React, { Component } from 'react';

import BookList from '~/containers/book_list';
import BookDetail from '~/containers/book_detail';

export default class Root extends Component {
    render() {
        return (
            <div>
                <BookList />
                <BookDetail />
            </div>
        );
    }
}
