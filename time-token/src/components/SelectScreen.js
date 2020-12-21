import React from 'react';
import {
    View, Text, Image,
    StyleSheet, TextInput,
    Button, TouchableOpacity,
    AsyncStorage
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { urlbackoffice } from '../../utils';

/*
const createFormData = (photo, body) => {
     const data = new FormData();

    data.append("photo", {
        name: photo.fileName,
        type: photo.type,
        uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
}; */

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: null,
            busy: false,
            onClicked: false,
            nameActivity: '',
            idUser: '',
            type: ''
        }
    }
    componentDidMount() {

        const { navigation } = this.props;
        var self = this;

        self.focusListener = navigation.addListener('focus', () => {

            AsyncStorage.getItem("connectedUser", (err, id) => {
                //alert(id)
                self.setState({ idUser: id });

            });

        });
    }

    componentWillUnmount() {
        this.focusListener();
    }

    baseUrl = urlbackoffice;

    handleChoosePhoto = () => {
        /* const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            console.log(" photo " + JSON.stringify(response))
            if (response.uri) {
                this.setState({ photo: response, busy: true });
            }
        }); */
        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response.type);
            //console.log('Response = ', response.data);
            if (response.uri) {
                this.setState({ photo: response, type: response.type, busy: true });
            }
        });
    };

    SelectScreen = () => {
        const { photo } = this.state;
        if (this.state.busy) { // clicked button style
            return <View style={{ flexDirection: "row" }}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 70, height: 60 }}
                    />
                )}
                <Text style={{ color: "#3D4A55", fontSize: 28, marginTop: "2%", marginLeft: "7%" }}>{this.state.type}</Text>
            </View>
        }
        else { // default button style
            return <Text style={{ color: "#3D4A55", fontSize: 15 }}> Select Screenshot</Text>
        }
    }



    handleUploadPhoto = () => {
        var self = this;
        self.setState({ onClicked: true });
        console.log("AsyncStorage+userId", this.state.idUser)
        // alert("9999" + self.state.photo.data)
        fetch(self.baseUrl + '/activity/createActivity', {
            method: "POST",
            //body: `id_user=${self.state.idUser}&image=${self.state.photo}`
            //body: createFormData(this.state.photo, { userId: "895" })
            body: JSON.stringify({ id_user: self.state.idUser, image: self.state.photo.data, name: self.state.nameActivity })

        })
            .then(response => response.json())
            .then(response => {
                console.log("upload succes", response);
                //alert("Upload success!");
                self.setState({ onClicked: false });
                self.props.navigation.navigate('ClaimSubmitted');
            })
            .catch(error => {
                //console.log("upload error", error);
                alert("Upload failed!" + error);
            });
    };

    render() {
        const { photo, onClicked } = this.state;
        return (
            <View style={styles.Container}>


                <TextInput
                    multiline={true} numberOfLines={1}
                    style={styles.inputStyle}
                    placeholder='Description'
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState({ nameActivity: text })}
                ></TextInput>


                <TouchableOpacity style={styles.Select} onPress={this.handleChoosePhoto}>
                    {/* {photo && (
                        <Image
                            source={{ uri: photo.uri }}
                            style={{ width: 250, height: 50 }}
                        />
                    )}
                    <Text style={{ color: "#3D4A55", fontSize: 15 }}> Select Screenshot</Text>
                 */}
                    {this.SelectScreen()}
                </TouchableOpacity>

                <TouchableOpacity style={styles.Uplaod} onPress={this.handleUploadPhoto} disabled={onClicked}>
                    <Text style={{ color: "#fff", fontSize: 15 }}> {this.state.onClicked ? "PLEASE WAIT..." : "Upload Activity"}</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
const styles = StyleSheet.create({
    Container: {
        //flex: 1,
        //backgroundColor: "red",
        alignItems: "center"
    },
    Select: {
        marginTop: "3%",
        backgroundColor: "#fff",
        width: "90%",
        height: "20%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    Uplaod: {
        marginTop: "3%",
        backgroundColor: "#3D4A55",
        width: "90%",
        height: "17%",
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    inputStyle: {
        marginTop: "2%",
        borderRadius: 15,
        //height: 50,
        backgroundColor: "#fff",
        fontSize: 16,
        paddingLeft: "10%",
        width: "90%",
        height: "17%",

    },

});