import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    buttonLook: {
        width: 200,
        color: 'white',
        backgroundColor: 'steelblue',
        padding: 20,
        margin: 10
    }
});

export default class TouchableExamples extends Component {
    _onPress() {
        alert('button Pressed!');
    }

    _onLongPress() {
        alert('hold on!');
    }

    render() {
        return (
            <View style={{flex:1}}> 
                <TouchableHighlight 
                    onPress={this._onPress}
                    onLongPress={this._onLongPress}
                >
                    <View style={styles.buttonLook}>
                        <Text>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback 
                    onPress={this._onPress}
                    onLongPress={this._onLongPress}
                >
                    <View style={styles.buttonLook}>
                        <Text>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity 
                    onPress={this._onPress}
                    onLongPress={this._onLongPress}
                >
                    <View style={styles.buttonLook}>
                        <Text>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback 
                    onPress={this._onPress}
                    onLongPress={this._onLongPress}
                >
                    <View style={styles.buttonLook}>
                        <Text>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}