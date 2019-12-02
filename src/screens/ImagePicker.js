import * as React from 'react';
import {Component} from 'react';
import {Button, Image, View} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

export default class ImagePickerScreen extends Component {
    state = {
        image: null
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.getPermissionAsync();
    }

    getPermissionAsync = async () => {
        if (Constants.platform.ios) {
            const {status} = await Permissions.askAsync(
                Permissions.CAMERA_ROLL
            );
            if (status !== "granted") {
                alert(
                    "Sorry, we need camera roll permissions to make this work!"
                );
            }
        }
    };

    _pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            aspect: [4, 3],
            base64: true,
            quality: 1
        }).then(res => {
            alert(res.base64);
        });

        if (!result.cancelled)
            this.setState({image: result.uri}, () => {
                alert(this.state.image)
            });
    };

    render() {
        let {image} = this.state;
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                    title="Pick an image from camera roll"
                    onPress={this._pickImage}
                />
                {image &&
                <View>
                    <Image source={{uri: image}} style={{width: 300, height: 200}}/>
                    <Button
                        title="Continue"
                        onPress={() => this.props.navigation.navigate('ImageEditor', {
                            image: image
                        })}
                    />
                </View>
                }
            </View>
        );
    }
}
