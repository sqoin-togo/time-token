import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Recherche, New } from "../components/TimeTokenIcons";
import { ScrollView } from 'react-native-gesture-handler';
import { urlbackoffice } from '../../utils';
const { width } = Dimensions.get("window")
const { height } = width * 100 / 60 //60%

class LatestDeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            promotion: '',
            imageList: [] = [],
            search: '',
            List: [] = [],
            //images: ''

        };
    }

    //baseUrl = 'http://192.168.1.229:3002/'
    baseUrl = urlbackoffice;


    componentDidMount() {

        var self = this;

        self.getallImagePromotions()
    }





    componentWillUnmount() {
        // this.focusListener();
    }

    getallImagePromotions() {
        var self = this;
        fetch(self.baseUrl + 'promotion/getallImagePromotions', {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.setState({ imageList: json })
                        console.log("listImages" + JSON.stringify(json))
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("error get all Images !" + error + response) })
    }




    render() {

        const { images, imageList } = this.state;
        //self = this
        return (


            <View style={{ width: "100%", height: "100%" }}>
                <ScrollView
                    pagingEnabled
                    horizontal={true}
                    bounces={true}
                    bouncesZoom={true}
                    maximumZoomScale={5.0}
                    minimumZoomScale={0.5}
                    showsHorizontalScrollIndicator={true}
                    showsVerticalScrollIndicator={true}
                    contentContainerStyle={styles.contentContainer}

                >
                    {this.state.imageList.length > 0 &&
                        this.state.imageList.map((image, index) => {
                            return <View style={{ marginTop: "1%", marginLeft: "1%" }}>
                                <Image
                                    key={index}
                                    source={{ uri: image.image }} style={{ width: 400, height: 150 }}
                                />
                            </View>

                        })
                    }
                </ScrollView>
                <View style={styles.circleDiv}>
                    {this.state.imageList.map((image, i) => {
                        <View
                            key={image}
                            style={styles.whiteCircle}
                        />

                    }
                    )}
                </View>
            </View>



        )
    }

}




export default LatestDeals;

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
        height: "20%",
        backgroundColor: "red",
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
        alignItems: "center",
        backgroundColor: "red"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 0,
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
    },
    contentContainer: {
        height: 1000,
        width: 1000,
    },

});

{/*  {images.map((image, index) => (
                    <Image
                        key={index}
                        source={{ uri: image }}
                        style={styles.backgroundImage}
                    />

                ))}

                <Text>ddd</Text>
                <View style={styles.circleDiv}>
                    {images.map((image, i) => {
                        <View
                            key={image}
                            style={styles.whiteCircle}
                        />

                    }
                    )}
                </View> 
            </View>
        );
    }
}

export default LatestDeals;

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
        height: "20%",
        backgroundColor: "red",
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
        alignItems: "center",
        backgroundColor: "red"
    },
    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 0,
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
*/}
/*/
import React from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class App extends React.Component {
    state = {
        photo: null,
    };

    handleChoosePhoto = () => {
        /* const options = {
            noData: true,
        };
        //alert("heyyy")
        ImagePicker.launchImageLibrary(options, response => {
            console.log(" photo " + JSON.stringify(response))
            if (response.uri) {
                this.setState({ photo: response });
            }
        });
        const options = {
            title: 'Select Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {

            console.log('Response = ', response);
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
export default App; */