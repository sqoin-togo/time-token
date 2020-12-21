

import React, { Component } from "react";

import {
    StyleSheet, View, Text,
    TouchableOpacity, AsyncStorage, TouchableHighlight
    , Modal, TextInput
} from "react-native";


class PrivateKey extends Component {

    baseUrlKey = 'https://exchangetimetoken.sagecity.io/';
    //baseUrlKey = 'http://18.218.176.134:3014/';

    urlBackOffice = 'https://apptimetoken.sagecity.io/'
    //urlBackOffice = 'http://192.168.1.229:3002/'

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isVisible: false,
            onClicked: false,
            pin: '',
            userId: ''
        };
    }

    componentDidMount() {
        this.getuserIdByEmail()

        //this._PrivateKey()
        /* AsyncStorage.getItem("userId", (err, id) => {
            
        }); */

    }

    getuserIdByEmail = () => {
        var self = this;

        AsyncStorage.getItem("email", (err, email) => {
            console.log("PrivateKey ", email)
            fetch(self.urlBackOffice + 'user/getUserIdByEmail?email=' + email, {
                method: "GET"
            })
                .then(function (response) {
                    //alert(JSON.stringify(response))
                    // console.log(response)
                    if (response.ok) {
                        response.json().then(function (json) {
                            //alert(JSON.stringify(json))
                            console.log(" PrivateKey " + json.id)
                            self.setState({ userId: json.id })
                            //self._PrivateKey(userId)
                        }).catch(err => alert(err))

                    } else {

                        console.log('Network request for backoffice failed with response ' + response.status);


                    }
                }).catch(err => alert(err));
        });
    }



    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    _PrivateKey = () => {
        const { modalVisible } = this.state;
        this.setModalVisible(!modalVisible)
        let { pin, userId } = this.state;

        var self = this;

        let pravitekey = {
            "coin": "SAGE",
            "userId": userId,
            "pin": pin
        }


        fetch(self.baseUrlKey + 'api/generatePrivateKey', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(pravitekey)
        })

            .then(function (response) {
                //console.log("then" + JSON.stringify(response));
                if (response.ok) {
                    //console.log("ok" + JSON.stringify(response));
                    response.text().then(function (text) {

                        console.log("key", JSON.stringify(text))
                        //alert("response " + JSON.stringify(text))
                        //self.setState({});
                        //self.props.navigation.navigate('TakeaPhoto');

                    })
                } else {
                    alert('Private Key Already Exists');
                }
            })

            .catch(error => { console.log("smting went wrong! Private Key" + error) })
    }

    /*  // hide show modal
     displayModal(show) {
         this.setState({ isVisible: show })
     }
 
     _PrivateKey = () => {
         this.setState({ onClicked: true })
         //alert("hey")
 
         if (this.state.onClicked === true) { // clicked button style
             return <View style={styles.ButtonClaimNew}>
                 <Text style={{ color: "#fff", fontSize: 15 }} > heyyyy </Text>
             </View>
         }
 
     } */

    render() {
        //var { photoUser } = this.state;
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Private key</Text>

                            <TextInput style={styles.inputStyle}
                                placeholder='Private key Entry'
                                autoCapitalize='none'
                                onChangeText={(text) => this.setState({ pin: text })}
                            ></TextInput>
                            <TouchableOpacity
                                style={styles.button00000}
                                onPress={() => {
                                    this._PrivateKey();
                                }}
                            >
                                <Text style={styles.textStyle}>Generated</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
                </Modal>


                <TouchableOpacity
                    style={styles.openButton}
                    onPress={() => {
                        this.setModalVisible(true);
                    }}
                >
                    <Text style={styles.textStyle}>Generated Wallet</Text>
                </TouchableOpacity>
            </View>




        )
    }
}


const styles = StyleSheet.create({


    centeredView: {
        //flex: 1,
        //justifyContent: "center",
        //alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "#00ACEE",
        borderRadius: 20,
        padding: 35,
        //alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#3D4A55",
        borderRadius: 15,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: '#FFFFFF',
        fontSize: 18,
    },
    inputStyle: {
        borderRadius: 15,
        // height: "12%",
        backgroundColor: "white",
        fontSize: 18,
        paddingLeft: 30,


    },

    button00000: {
        backgroundColor: "#3D4A55",
        marginTop: "10%",
        height: "25%",
        //width: "100%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

    },



});
export default PrivateKey;


{/* <View style={styles.container}>
                <Modal
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.isVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has now been closed.');
                    }}>


                    <Text style={styles.text}> 123456 </Text>

                    <Text
                        style={styles.closeText}
                        onPress={() => {
                            this.displayModal(!this.state.isVisible);
                        }}>Close</Text>
                </Modal>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.displayModal(true);
                    }}>
                    <Text style={styles.buttonText}>Show Modal</Text>
                </TouchableOpacity>

            </View> 
        
        container: {
        //padding: 25,
        width: "90%",
        marginTop: "5%",
        //backgroundColor: "red",
        //flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
    button: {
        display: 'flex',
        height: 60,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#3D4A55',
        shadowColor: '#3D4A55',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    closeButton: {
        display: 'flex',
        height: 60,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF3974',
        shadowColor: '#2AC062',
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 10,
            width: 0
        },
        shadowRadius: 25,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 15,
    },
    image: {
        marginTop: 150,
        marginBottom: 10,
        width: '100%',
        height: 350,
    },
    text: {
        fontSize: 24,
        marginBottom: 30,
        padding: 40,
        textAlign: 'center',
    },
    closeText: {
        fontSize: 20,
        color: '#00ACEE',
        textAlign: 'center',
    }

        */}