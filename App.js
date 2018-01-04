/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import BookItem from "./BookItem";
import Douban from "./Douban";

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            data: this._addKeysToBooks(mockBooks)
            // data: []
        };
    }

    componentDidMount() {
        // this._refreshData();
    }

    _renderItem = ({item}) => {
        return <BookItem
            coverURL={item.images.small}
            title={item.key}
            author={item.genres[0]}
        />
    };

    _refreshData = () => {
        Douban.fetchBooks("北京", 0, 20).then(books => {
            this.setState({data: this._addKeysToBooks(books)});
        });
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
        title: "前任3：再见前任",
        genres: ["喜剧", "剧情"],
        images: {small: "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2508926717.jpg"}
    },
    {
        title: "芳华",
        genres: ["剧情"],
        images: {small: "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2507227732.jpg"}
    }
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});
