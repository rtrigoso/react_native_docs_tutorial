import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    subcontainerA: {
        flex: 2,
    },
    subcontainerB: {
        flex: 2,
        flexDirection: 'row',
    },
    border: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1
    },
    header: {
        textAlign:'center',
        fontSize: 40,
        fontWeight: '100',
        fontFamily: 'sans-serif-thin'
    },
    small: {
        flex: 1,
        backgroundColor: 'red'
    },
    medium: {
        flex: 2,
        backgroundColor: 'orange'
    },
    large: {
        flex: 3,
        backgroundColor: 'limegreen'
    },
});

export default class FlexStyle extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1}}>
                    <Text style={styles.header}>flex</Text>
                </View>
                <View style={[styles.subcontainerA, styles.border]}>
                    <View style={styles.small}></View>
                    <View style={styles.medium}></View>
                    <View style={styles.large}></View>
                </View>
                <View style={[styles.subcontainerB, styles.border]}>
                    <View style={styles.small}></View>
                    <View style={styles.medium}></View>
                    <View style={styles.large}></View>
                </View>
            </View>
        );
    };
}