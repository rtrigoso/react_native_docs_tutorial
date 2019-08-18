import React, {Component} from 'react';
import {
    View,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    small: {
        width: 50,
        height: 50,
        backgroundColor: 'powderblue'
    },
    medium: {
        width: 100,
        height: 100,
        backgroundColor: 'skyblue'
    },
    large: {
        width: 150,
        height: 150,
        backgroundColor: 'steelblue'
    }
});

export default class FixedDimensions extends Component {
    render () {
        return (
            <View>
                <View style={styles.small}></View>
                <View style={styles.medium}></View>
                <View style={styles.large}></View>
            </View>
        );
    };
};