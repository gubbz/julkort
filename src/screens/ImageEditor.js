import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {WebView} from 'react-native-webview';
const myHtmlFile = require("../components/canvastest.html");

export default class Home extends Component {

    render() {
        let {navigation} = this.props;
        return (
            <View style={{flex: 1}}>
                <WebView
                    style={{flex: 0.5}}
                    source={myHtmlFile}
                />
                <View
                    style={{flex: 0.5}}
                >
                </View>
            </View>

        );
    }
}