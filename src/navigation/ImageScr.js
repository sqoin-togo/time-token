import React, { Component } from "react";
import { Platform, Image, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const images = [
    "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
    "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
];

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedIndex: 0
        }
    }

    render() {
        const { image } = this.props;
        const { SelectedIndex } = this.props;
        return (
            <View style={styles.container}>
                <ScrollView >
                    {images.map((image, index) => (
                        <Image
                            key={index}
                            source={{ uri: image }}
                            style={styles.backgroundImage}
                        />

                    ))}

                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((i, k) => {
                        <View
                            key={k}
                            style={styles.whiteCircle}
                        />

                    }
                    )}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        //backgroundColor: "red",
        height: "100%",
        width: "100%"
    },
    backgroundImage: {
        height: "100%",
        backgroundColor: "red"
        //width: DEVICE_WIDH
    },
    circleDiv: {
        position: "absolute",
        bottom: 15,
        height: 10,
        width: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 5,
        backgroundColor: "red"
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
});
/*

import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
    state = {
        photo: null,
    };

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
    };

    render() {
        const { photo } = this.state;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {photo && (
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 150, height: 50 }}
                    />
                )}
                <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
            </View>
        );
    }
}


/*/
import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const App = () => {
    const selectPhotoTapped = () => {
        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {

            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                const uri = response.uri;
                const type = response.type;
                const name = response.fileName;
                const source = {
                    uri,
                    type,
                    name,
                }
                console.log("Image ", source)
            }
        });
    }
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1581387688/m0e7y6s5zkktpceh2moq.jpg' }}
                    style={styles.backgroundImage}>
                </Image>
            </View>
            <View style={styles.uploadContainer}>
                <Text style={styles.uploadContainerTitle}>
                    ImagePicker to Cloudinary
        </Text>
                <TouchableOpacity onPress={selectPhotoTapped} style={styles.uploadButton}>
                    <Text style={styles.uploadButtonText}>Upload</Text>
                </TouchableOpacity>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        backgroundColor: '#fe5b29',
        height: Dimensions.get('window').height
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    uploadContainer: {
        backgroundColor: '#f6f5f8',
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        position: 'absolute',
        bottom: 0,
        width: Dimensions.get('window').width,
        height: 200,
    },
    uploadContainerTitle: {
        alignSelf: 'center',
        fontSize: 25,
        margin: 20,
        fontFamily: 'Roboto'
    },
    uploadButton: {
        borderRadius: 16,
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 5,
        },
        shadowOpacity: 1.58,
        shadowRadius: 9,
        elevation: 4,
        margin: 10,
        padding: 10,
        backgroundColor: '#fe5b29',
        width: Dimensions.get('window').width - 60,
        alignItems: 'center'
    },
    uploadButtonText: {
        color: '#f6f5f8',
        fontSize: 20,
        fontFamily: 'Roboto'
    }
});
export default App;