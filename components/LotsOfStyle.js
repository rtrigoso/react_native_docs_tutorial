import React, {Component} from 'react';
import {
View,
Text,
StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    red: {
        color: 'red'
    },
    blue: {
        color: 'blue'
    },
    yellow: {
        color: 'yellow'
    },
    bold: {
        fontWeight: 'bold',
        fontSize: 30
    },
});

export default class LotsOfStyle extends Component {
    render() {
        return (
            <View>
                <Text style={styles.red} >this is red</Text>
                <Text style={styles.blue} >this is blue</Text>
                <Text style={[styles.yellow, styles.red]} >this is yellow and then red</Text>
                <Text style={[styles.yellow, styles.bold]} >this is yellow and bold</Text>
            </View>
        );
    };
}