
import React, { Component } from "react";
import {
    StyleSheet, View, Text,
    TouchableOpacity, Image,
    AsyncStorage
} from "react-native";

//import { LogoP } from '../components/NewNormIcons';
import { CircleR } from '../components/TimeTokenIcons';
import { RNCamera } from 'react-native-camera';
import { urlbackoffice } from "../../utils";


class TakeaPhoto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            captureState: 0,
            urlData: '',
            userPhoto: ''
        };
    }
    urlBackOffice = urlbackoffice;

    componentDidMount() {

        const { navigation } = this.props;
        var self = this;
        this._unsubscribe = navigation.addListener('focus', () => {

            AsyncStorage.getItem("email", (err, email) => {
                //alert("email" + email)
                if (err) {
                    alert(err)
                    return;
                }

                console.log("Email => " + email)

                self.setState({ urlData: email })


            })
        });
    }

    renderArea() {
        const isFocused = this.props.navigation.isFocused();

        if (!isFocused) {
            return null;
        } else if (isFocused) {
            return (
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.photo}
                    type={RNCamera.Constants.Type.front}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    androidRecordAudioPermissionOptions={{
                        title: 'Permission to use audio recording',
                        message: 'We need your permission to use your audio',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                    onGoogleVisionBarcodesDetected={({ barcodes }) => {
                        console.log(barcodes);
                    }}
                />
            )
        }
    }

    camera = () => {
        return (
            <RNCamera
                ref={ref => {
                    this.camera = ref;
                }}
                style={styles.photo}
                type={RNCamera.Constants.Type.front}
                flashMode={RNCamera.Constants.FlashMode.on}
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                onGoogleVisionBarcodesDetected={({ barcodes }) => {
                    console.log(barcodes);
                }}
            />
        )

    }

    takePicture = async () => {
        var { captureState } = this.state;
        switch (captureState) {
            case 0: {
                if (this.camera) {
                    const options = { quality: 0.3, base64: true };
                    const data = await this.camera.takePictureAsync(options);



                    if ((this.state.urlData !== '') && (this.state.urlData !== null) && (this.state.urlData !== undefined)) {


                        this.setState({ userPhoto: data.base64 })
                        AsyncStorage.setItem("ProfilPhoto", data.base64, (err) => {
                            if (err) {
                                return;
                            }

                            this.updateUserPhoto()
                            // this.props.navigation.navigate('SubmitPage');

                            AsyncStorage.removeItem("back")


                        })

                    }



                    else {


                        AsyncStorage.setItem("photo", data.base64, (err) => {
                            if (err) {
                                return;
                            }

                            /*   AsyncStorage.getItem("connectedUser", (err, id) => {
   
   
   
                                   if ((connectedUser !== null) && (connectedUser !== undefined)) {
   
                                       this.updateUserPhoto(connectedUser)
   
                                   }
                                   else {
   
                                       AsyncStorage.setItem("RegisterState", "PhotoTaken", () => {
                                           this.props.navigation.navigate('Hi');
                                       });
   
                                   }
   
                               }); */


                        });

                    }





                }
                return;
            }
            case 1: {
                this.setState({ captureState: 0 })
            }
        }

    };


    updateUserPhoto() {
        var self = this;

        console.log(" updte " + this.state.urlData)
        var userPhoto = { "photo": self.state.userPhoto };
        fetch(self.urlBackOffice + 'user/updateUserPhotoByEmail?email=' + this.state.urlData, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userPhoto)
        })

            .then(function (response) {


                if (response.ok) {

                    response.text().then(function (json) {
                        self.props.navigation.navigate('SubmitPage');
                    })
                        .catch(err => { alert(err); });

                }
            })
            .catch(err => { alert(err); });

    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    render() {

        return (
            <View style={styles.container}>


                <View style={styles.body}>
                    <Text style={styles.title}> Take a Photo </Text>

                    {this.renderArea()}

                    <TouchableOpacity style={styles.buttontake} onPress={this.takePicture}>
                        <CircleR></CircleR>
                    </TouchableOpacity >

                </View>


            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ACEE",
    },
    body: {

        flex: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        marginTop: 30,
        padding: 40,
        fontSize: 28,
        color: "#fff",
        padding: 30

    },

    camera: {
        width: "80%",
        height: 120,
        backgroundColor: "white",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    photo: {
        width: "50%",
        height: "50%",
        borderRadius: 10,
        //borderWidth: 1,
        backgroundColor: "white",
    },
    buttontake: {
        marginTop: 40,
        height: 60,
        width: 60,  //The Width must be the same as the height
        borderRadius: 200,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: "center"

    }
});

export default TakeaPhoto;