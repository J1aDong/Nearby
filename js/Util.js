'use strict';

import {PixelRatio, Platform} from 'react-native';
import Dimensions from 'Dimensions';

var Util = {
    //单位像素
    pixel: 1 / PixelRatio.get(),
    //屏幕尺寸
    size: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },

    statusHeight: function ()
    {
        if (Platform.OS == 'ios')
        {
            return 22;
        } else
        {
            return 0;
        }
    },

    //POST方法
    post: function (url, data, callback)
    {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) =>
            {
                callback(JSON.parse(responseText));
            });
    },

    //GET方法
    getJSON: function (url, callback)
    {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) =>
            {
                callback(JSON.parse(responseText));
            });
    },

    //高德地图key
    jsKey: 'e0aa8a48e905bc5a72367b0a44570bbc',

    webKey: 'ce6e9e213126bba30b31bad6319931d4',

    //周边搜索服务
    searchURL: 'http://restapi.amap.com/v3/place/around?',
    //ID查询
    detailURL: 'http://restapi.amap.com/v3/place/detail?',


}

export default Util;
