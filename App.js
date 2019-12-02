import React, { Component } from 'react';
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "./src/screens/Home";
import TextPicker from './src/screens/TextPicker';
import ImagePickerScreen from './src/screens/ImagePicker';
import ImageEditor from './src/screens/ImageEditor';


const AppNavigator = createStackNavigator(
	{
		Home: Home,
		TextPicker: TextPicker,
		ImagePickerScreen: ImagePickerScreen,
		ImageEditor: ImageEditor,
	},
	{
		initialRouteName: 'ImagePickerScreen',
	}
);

const AppContainer = createAppContainer(AppNavigator);



export default class App extends Component {
    render() {
        return <AppContainer />;
    }
}