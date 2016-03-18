import React, { Component } from 'react';

import BookList from '~/containers/book_list';

export default class Root extends Component {
    render() {
        return (
            <div>
                <BookList />
            </div>
        );
    }
}
