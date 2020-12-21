import React from 'react';
import {
    View, Text, AsyncStorage,
    StyleSheet, Alert,
    TextInput, Modal,
    Button, TouchableOpacity
} from 'react-native';

import QRCode from 'react-native-qrcode-generator';
import { urlbackoffice, urlexchange } from '../../utils';

export default class App extends React.Component {

    baseUrlKey = urlexchange;
    //baseUrlKey = 'http://18.218.176.134:3014/';

    urlBackOffice = urlbackoffice
    //urlBackOffice = 'http://192.168.1.229:3002/'

    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
            isVisible: false,
            pin: '',
            userId: '',
            text: '',
            balance: ''
            //busy: false,
            //userId: '',

        };
    }

    componentDidMount() {

        this.getuserIdByEmail()
        this._QRcode()
        //this.getPublicAddressByUserId()
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    getuserIdByEmail = () => {
        var self = this;

        AsyncStorage.getItem("email", (err, email) => {
            //console.log(email)
            fetch(self.urlBackOffice + 'user/getUserIdByEmail?email=' + email, {
                method: "GET"
            })
                .then(function (response) {
                    //alert(JSON.stringify(response))
                    // console.log(response)
                    if (response.ok) {
                        response.json().then(function (json) {
                            //alert(JSON.stringify(json))
                            console.log("userIdKey ", json.id)
                            self.setState({ userId: json.id })
                            self.getPublicAddressByUserId(json.id)
                        }).catch(err => alert(err))

                    } else {

                        console.log('Network request for backoffice failed with response ' + response.status);


                    }
                }).catch(err => alert(err));
        });
    }


    getPublicAddressByUserId = (userId) => {
        var self = this;
        //alert(this.state.userId)
        fetch(self.baseUrlKey + 'api/getPublicAddressByUserId?coin=SAGE&userId=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                // console.log(response)
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        console.log("getKey", json.publickey)
                        self.setState({ text: json.publickey })
                        self.getGetBlanceBypublickey(json.publickey)
                    }).catch(err => alert(err))

                } else {

                    console.log('Network request for backoffice failed with response ' + response.status);


                }
            }).catch(err => alert(err));
    }
    getGetBlanceBypublickey = (publickey) => {
        var self = this;
        //alert(this.state.text)
        fetch(self.baseUrlKey + 'api/getBalance?coin=SAGE&publickey=' + publickey, {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                //console.log(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        console.log("getbalance", json.balance)
                        self.setState({ balance: json.balance })
                    }).catch(err => alert(err))

                } else {

                    console.log('Network request for backoffice failed with response ' + response.status);


                }
            }).catch(err => alert(err));
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

                        console.log("Addkey_POST", JSON.stringify(text))
                        //alert("response " + JSON.stringify(text))
                        self.setState({ text });
                        //self.getPublicAddressByUserId(userId)
                        //self.props.navigation.navigate('TakeaPhoto');

                    })
                } else {
                    alert('Private Key Already Exists');
                }
            })

            .catch(error => { console.log("smting went wrong! Private Key" + error) })
    }

    _QRcode() {
        if (this.state.text === 'according not exist' || this.state.text === undefined) {

            return <Text style={{
                color: "#3D4A55",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: "40%",
                paddingRight: 25,
                fontSize: 20
            }} > </Text>
        }
        else { // default button style
            return <View style={styles.view}>
                <QRCode
                    value={this.state.text}
                    size={200}
                    bgColor='black'
                    fgColor='white' />
            </View>
        }

    }

    render() {
        const { modalVisible } = this.state;
        return (
            <>
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
                                    placeholder='Enter your pin'
                                    autoCapitalize='none'
                                    onChangeText={(text) => this.setState({ pin: text })}
                                ></TextInput>
                                <TouchableOpacity
                                    style={styles.button00000}
                                    onPress={() => {
                                        this._PrivateKey();
                                    }}
                                >
                                    <Text style={styles.textStyle}>Generate</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>

                    {(this.state.text === 'according not exist' || this.state.text === undefined) && <TouchableOpacity
                        style={styles.openButton}
                        onPress={() => {
                            this.setModalVisible(true);
                        }}
                    >
                        <Text style={styles.textStyle}>Generate Wallet</Text>
                    </TouchableOpacity>
                    }
                </View>


                {/*    <Button
                    title="Press me"
                    onPress={() => this.getPublicAddressByUserId()}
                />
                <Text>{this.state.text}</Text>
                 <TextInput
                    style={styles.input}
                    onChangeText={(text) => this.setState({ text: text })}
                    value={this.state.text}
                /> */}


                <View style={styles.view0}>
                    {this._QRcode()}
                </View>

            </>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    },
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

    }, view: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        paddingLeft: 8,
        paddingTop: 12,
        borderRadius: 17,
        marginTop: "10%"
    }, view0: {
        //backgroundColor: "#fff",
        width: "60%",
        height: "47%",
        //paddingLeft: 12,
        //paddingTop: 13,
        //borderRadius: 15,
        //marginTop: "10%"
    },
});