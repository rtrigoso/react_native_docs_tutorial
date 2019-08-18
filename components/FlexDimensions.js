import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    small: {
        flex: 1,
        backgroundColor: 'powderblue'
    },
    medium: {
        flex: 2,
        backgroundColor: 'skyblue'
    },
    large: {
        flex: 3,
        backgroundColor: 'steelblue'
    },
});

export default class FlexDimensions extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={styles.small}></View>
                <View style={styles.medium}></View>
                <View style={styles.large}></View>
            </View>
        );
    };
}