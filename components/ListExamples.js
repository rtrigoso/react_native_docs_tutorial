import React, {Component} from 'react';
import {
    View,
    FlatList,
    SectionList,
    Text,
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    item: {
        fontSize: 15,
        textAlign: "left"
    },
    header: {
        fontWeight: "900",
        textAlign: 'center',
        fontSize: 16
    }
})

export default class ListExamples extends Component {
    constructor(props)
    {
        super(props);
        this.state = {movies: []}
    }

    async getMovies()
    {
        try
        {
            let response = await fetch('https://facebook.github.io/react-native/movies.json')
            let responseJson = await response.json();
            let tmpMovies = responseJson.movies.map(movie => {
                return {'key': movie.title}
            });
            this.setState({movies: tmpMovies})
        }
        catch(err)
        {
            console.error(err);
        }
    }
    
    componentDidMount()
    {
        this.getMovies();
    }

    render() {
        return (
            <View style={{height: 250}}>
                <View style={{flex:1, flexDirection: 'row'}}> 
                    <View style={{flex: 1}}>
                        <FlatList
                            data={this.state.movies}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                        />
                    </View>
                    <View style={{flex: 1}}>
                        <SectionList
                            sections={[
                                {
                                    title: 'D',
                                    data: [
                                        {key: 'Devin'},
                                        {key: 'Dan'},
                                        {key: 'Dominic'},
                                    ]
                                },
                                {
                                    title: 'J',
                                    data: [
                                        {key: 'Jackson'},
                                        {key: 'James'},
                                        {key: 'Joel'},
                                        {key: 'John'},
                                        {key: 'Jillian'},
                                        {key: 'Jimmy'},
                                        {key: 'Julie'},
                                    ]
                                }
                            ]}
                            renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                            renderSectionHeader={({section}) => <Text style={styles.header}>{section.title}</Text>}
                        />
                    </View>
                </View>
            </View>
        );
    }
}