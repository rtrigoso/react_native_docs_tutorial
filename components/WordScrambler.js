import React, {Component} from 'react';
import {
    TextInput,
    View,
    Text
} from 'react-native';

export default class WordScrambler extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''}
    }

    render() {
        return (
            <View>
                <TextInput
                    placeholder="Input your text"
                    onChangeText={(newText) => this.setState({text: newText})}
                    value={this.state.text}
                ></TextInput>
                <Text
                    style={{
                        fontWeight: 'bold', 
                        color: 'blue', 
                        fontSize: 20
                    }}
                >{this.state.text
                    .split(' ')
                    .map(word => {
                        return word
                            .split('')
                            .sort(function(){return 0.5-Math.random()})
                            .join('')
                    })
                    .join(' ')
                }
                </Text>
            </View>
        )
    };
}