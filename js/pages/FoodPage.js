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
import List from '../views/List';

class FoodPage extends Component {
    render()
    {
        return (
            <List style={styles.container} type="餐饮"/>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FoodPage;