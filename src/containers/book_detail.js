import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render () {
        if (!this.props.book) {
            return <div>Select a book to get started</div>;
        }

        return (
            <div>
                <h3>Defails for:</h3>
                <p>{this.props.book.title}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    // Map the application state to the props of this particular component
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);
