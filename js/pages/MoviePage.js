'use strict'

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity
} from 'react-native';

class MoviePage extends Component {
    render()
    {
        return (
            <View style={styles.container}>
                <Text>MoviePage</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
});

export default MoviePage;