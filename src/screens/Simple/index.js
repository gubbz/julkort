import React, {Component} from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
} from "react-native";
import { Surface } from "gl-react-expo";

const {
	mdl: {
		Progress,
		Slider,
		Switch
	},
	MKButton,
} = require("react-native-material-kit");

import RNFS from "react-native-fs";
import HueRotate from "./HueRotate";

class Demo extends Component {
	render () {
		const { title, children } = this.props;
		return <View>
			<Text style={styles.demoTitle}>{title}</Text>
			<View style={styles.demo}>
				{children}
			</View>
		</View>;
	}
}

class Demos extends Component {
	render () {
		const { children, onChange, value } = this.props;
		return <View>
			<View style={styles.nav}>
				{React.Children.map(children, (demo, i) =>
					<MKButton
						style={{ flex: 1, padding: 10 }}
						onPress={() => onChange(i)}>
						<Text pointerEvents="none"
							  style={{
								  textAlign: "center",
								  color: i!==value ? "#123" : "#69c",
								  fontWeight: "bold"
							  }}>
							{""+(i+1)}
						</Text>
					</MKButton>)}
			</View>
			<View style={styles.demos}>
				{children[value]}
			</View>
		</View>;
	}
}

class Simple extends Component {
	constructor (props) {
		super(props);
		this.state = {
			current: 0,
			saturationFactor: 1,
			hue: 0,
			progress: 0,
			factor: 0,
			text: "and I will return leading the pack",
			switch1: false,
			switch2: false,
			switch3: false,
			captured: null,
			captureConfig: null
		};

		/*
		// Crazy stress mode
		const self = this;
		setTimeout(function loop () {
		  setTimeout(loop, 100 * Math.random());
		  self.setState({ current: Math.floor(8 * Math.random()) });
		}, 100);
		*/
	}

	render() {
		const {
			current,
			hue,
			text,
		} = this.state;

		return (
			<View style={styles.container}>
				<Demos onChange={current => this.setState({ current })} value={current}>
					<Demo id={3} current={current} title="3. Hue Rotate on Text+Image">
						<Surface autoRedraw width={256} height={180}>
							<HueRotate hue={hue}>
								<Image style={{ width: 256, height: 244 }} source={{ uri: "http://i.imgur.com/qVxHrkY.jpg" }}/>
								<Text style={styles.demoText1}>Throw me to the wolves</Text>
								<Text style={styles.demoText2}>{text}</Text>
							</HueRotate>
						</Surface>
						<Slider
							max={2 * Math.PI}
							onChange={hue => this.setState({ hue })}
						/>
						<TextInput
							style={{ height: 40, borderColor: "#aaa", borderWidth: 1 }}
							onChangeText={text => this.setState({ text })}
							value={text}
						/>
					</Demo>
				</Demos>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F9F9F9",
		paddingTop: 50,
	},
	nav: {
		flexDirection: "row",
		marginBottom: 20
	},
	demos: {
		flex: 1,
		justifyContent: "center",
		marginLeft: 40,
		width: 276,
		marginBottom: 40,
	},
	demoTitle: {
		marginBottom: 16,
		fontStyle: "italic",
		alignSelf: "flex-start",
		color: "#999",
		fontWeight: "300",
		fontSize: 20,
	},
	demo: {
		marginBottom: 64,
		marginLeft: 20,
	},
	demoText1: {
		position: "absolute",
		top: 0,
		left: 0,
		width: 256,
		textAlign: "center",
		color: "#f16",
		backgroundColor: "transparent",
		fontWeight: "400",
		fontSize: 24,
		letterSpacing: 0
	},
	demoText2: {
		position: "absolute",
		bottom: 4,
		left: 0,
		width: 256,
		textAlign: "center",
		color: "#7bf",
		backgroundColor: "transparent",
		fontWeight: "300",
		fontSize: 32,
		letterSpacing: -1
	},
});

module.exports = Simple;