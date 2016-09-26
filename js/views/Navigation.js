'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    ScrollView,
    TextInput,
    AsyncStorage,
    Geolocation,
    Navigator
} from 'react-native';

class Navigation extends Component{
    render(){
        return(
            <Navigator
                initialRoute={{name:'',component:this.props.component,index:0}}
                configureScene={() => {return Navigator.SceneConfigs.PushFromRight;}}
                renderScene={(route,navigator) => {
                    const Component = route.component;
                    return (
                        <View style={{flex:1}}>
                            <Component navigator={navigator} route={route} {...route.passProps}/>
                        </View>
                    )
                }}
            />
        )
    }
}

export default Navigation;
