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
import TabNavigator from 'react-native-tab-navigator';
import FoodPage from './pages/FoodPage';
import MoviePage from './pages/MoviePage';
import BankPage from './pages/BankPage';
import WCPage from './pages/WCPage';
import Util from './Util';
import Navigation from './views/Navigation';

const Items = {
    FOOD: 'FOOD',
    MOVIE: 'MOVIE',
    BANK: 'BANK',
    WC: 'WC'
};

class Root extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            selectedTab: Items.FOOD
        }
    }

    render()
    {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === Items.FOOD}
                        title="美食"
                        renderIcon={() => <Image source={require('./images/Food.png') }
                                                 style={{width: 30, height: 30}}/>}
                        onPress={() => this.setState({selectedTab: Items.FOOD})}>
                        {this._createChildView(Items.FOOD)}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === Items.MOVIE}
                        title='电影'
                        renderIcon={() => <Image source={require('./images/Movie.png') }
                                                 style={{width: 30, height: 30}}/>}
                        onPress={() => this.setState({selectedTab: Items.MOVIE})}>
                        {this._createChildView(Items.MOVIE)}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === Items.BANK}
                        title="银行"
                        renderIcon={() => <Image source={require('./images/Bank.png') }
                                                 style={{width: 30, height: 30}}/>}
                        onPress={() => this.setState({selectedTab: Items.BANK})}>
                        {this._createChildView(Items.BANK)}
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === Items.WC}
                        title='卫生间'
                        renderIcon={() => <Image source={require('./images/WC.png') }
                                                 style={{width: 30, height: 30}}/>}
                        onPress={() => this.setState({selectedTab: Items.WC})}>
                        {this._createChildView(Items.WC)}
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }

    _createChildView(tag)
    {
        if (tag == Items.FOOD)
        {
            return (
                <Navigation component={FoodPage}/>
            )
        } else if (tag == Items.MOVIE)
        {
            return (
                <MoviePage style={styles.child}/>
            )
        } else if (tag == Items.BANK)
        {
            return (
                <BankPage style={styles.child}/>
            )
        } else if (tag == Items.WC)
        {
            return (
                <WCPage style={styles.child}/>
            )
        }
        return (
            <FoodPage style={styles.child}/>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Util.statusHeight(),
    },
    child: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Root;