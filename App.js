/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';
import BookItem from "./BookItem";
import Douban from "./Douban";

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            // data: this._addKeysToBooks(mockBooks)
            // data: []
            sections: []
        };
    }

    componentDidMount() {
        this._refreshData();
    }

    _renderItem = ({item}) => {
        return <BookItem
            coverURL={item.images.small}
            title={item.key}
            author={item.genres[0]}
        />
    };

    _renderHeader = ({section}) => {
        return (
            <Text style={styles.headingText}>
                {section.title}
            </Text>
        );
    };

    _refreshData = () => {
        Promise.all([
            Douban.fetchBooks("北京", 0, 20),
            Douban.fetchBooks("广州", 0, 20)
        ])
            .then(results => {
                if (results.length !== 2) {
                    console.error("Unexpected results");
                }
                this.setState({
                        sections: [
                            {
                                title: "北京",
                                data: this._addKeysToBooks(results[0])
                            },
                            {
                                title: "成都",
                                data: this._addKeysToBooks(results[1])
                            }
                        ]
                    }
                );
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
                <SectionList
                    sections={this.state.sections}
                    renderItem={this._renderItem}
                    renderSectionHeader={this._renderHeader}
                />
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
    container: {flex: 1, paddingTop: 22},
    headingText: {
        fontSize: 24,
        alignSelf: "center",
        backgroundColor: "#FFF",
        fontWeight: "bold",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 2,
        paddingBottom: 2
    }
});