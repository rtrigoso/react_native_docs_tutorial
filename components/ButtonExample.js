import React, {Component} from 'react';
import {
    View,
    Button
} from 'react-native';

export default class ButtonExample extends Component {
    _onPress() {
        alert('button Pressed!');
    }
    render() {
        return (
            <View style={{flex:1}}> 
                <Button 
                    onPress={this._onPress}
                    title="TRY ME"
                    color="red"
                />
            </View>
        );
    }
}