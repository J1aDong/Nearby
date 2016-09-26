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
    Geolocation
} from 'react-native';

import Util from '../Util';

//是否开启真实的定位?如果开启则
const _GEO_OPEN = true;
const _GEO_TEST_POS = '121.390686,31.213976';

class List extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            list: null,
            count: 0,
            keywords: ''
        };
    }

    render()
    {
        var items = [];
        if (this.state.list)
        {
            var len = this.state.list.length > 10 ? 10 : this.state.list.length;
            for (var i = 0; i < len; i++)
            {
                var obj = this.state.list[i];
                items.push(
                    <TouchableOpacity style={styles.item}>

                    </TouchableOpacity>
                )
            }
        }
        var placeholder = '搜索' + this.props.type;
        return (
            <ScrollView style={styles.container}>
                <View style={styles.searchBg}>
                    <TextInput style={styles.input} placeholder={placeholder}
                               onChangeText={(value) => this._onChangeText(value)}
                               onEndEditing={() => this._onEndEditing}
                    />
                    <View>
                        <Text>
                            已为您筛选<Text>{this.state.content}</Text>条数据
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    };

    componentDidMount()
    {
        var that = this;
        navigator.geolocation.getCurrentPosition(
            (position) =>
            {
                console.log('getCurrentPosition-->' + position);
            },
            (error) =>
            {
                alert('定位失败,请重新开启应用定位');
            }
        );
    }

    _onChangeText(value)
    {
        this.setState({
            keywords: value
        });
    }

    _onEndEditing()
    {
        var that = this;
        var keywords = this.state.keywords;
        var url = Util.searchURL + 'hey=' + Util.jsKey + '&keywords=' + keywords + '&types=' + that.props.type + '&extensions=base';
        that.setState({
            list: null
        });
        AsyncStorage.getItem('pos', function (err, result)
        {
            if (_GEO_OPEN)
            {
                if (!err)
                {
                    url += '&location=' + result;
                    that._doGetData(url);
                }
            }
        })

    }

    _doGetData(url)
    {
        var that = this;
        Util.getJSON(url, function (data)
        {
            console.log("_doGetData" + data);
            if (data.status && data.info === 'OK')
            {

            }
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBg: {
        backgroundColor: '#fff',
        paddingTop: 10
    },
    input: {
        height:25,
        marginLeft:6,
        marginRight:6,
        padding:5,
        marginTop:2,
        borderColor:'#868686',
        borderWidth:Util.pixel,

    }
})

export default List;