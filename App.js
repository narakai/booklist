/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BookItem from "./BookItem";

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            data: this._addKeysToBooks(mockBooks)
        };
    }

    _renderItem = ({item}) => {
        return <BookItem
            coverURL={item.book_image}
            title={item.key}
            author={item.author}
        />
    };

    _addKeysToBooks = books => {
        return books.map(book => {
            return Object.assign(book, {key: book.title});
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}/>
            </View>
        );
    }
}

const mockBooks = [
    {
        rank: 1,
        title: "GATHERING PREY",
        author: "John Sandford",
        book_image:
            "https://reactjs.org/static/tictac-numbers-685df774da6da48f451356f33f4be8b2-be875.png"
    },
    {
        rank: 2,
        title: "MEMORY MAN",
        author: "David Baldacci",
        book_image:
            "https://reactjs.org/static/tictac-numbers-685df774da6da48f451356f33f4be8b2-be875.png"
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});
