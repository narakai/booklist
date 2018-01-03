/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    FlatList,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class App extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {key: "a"},
                {key: "b"},
                {key: "c"},
                {key: "d"},
                {key: "a longer example"},
                {key: "e"},
                {key: "f"},
                {key: "g"},
                {key: "h"},
                {key: "i"},
                {key: "j"},
                {key: "k"},
                {key: "l"},
                {key: "m"},
                {key: "n"},
                {key: "o"},
                {key: "p"}
            ]
        };
    }

    _renderItem = data => {
        return <Text style={styles.row}>{data.item.key}</Text>;
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    row: {fontSize: 24, padding: 42, borderWidth: 1, borderColor: "#DDDDDD"},
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
