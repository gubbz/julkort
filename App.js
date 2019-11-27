import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import TextPicker from './src/screens/TextPicker';


const AppNavigator = createStackNavigator(
	{
		Home: Home,
		TextPicker: TextPicker,
	},
	{
		initialRouteName: 'TextPicker',
	}
);

const AppContainer = createAppContainer(AppNavigator);



export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}