import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Modal, TouchableOpacity, AsyncStorage, Image, ScrollView } from 'react-native';
import { urlbackoffice } from '../../utils';
import GetBalanceDeals from '../components/GetBalanceDeals';
import QRCode from 'react-native-qrcode-generator';

class ProfileDeals extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            namePromotion: '',
            logo: '',
            description: '',
            cost: '',
            type: '',
            textCode: '',
            //onClicked: false,
            Clicked: false,
            modalVisible: false,
            //transaction: '',
            listTransactions: [],
            listPromotions: [],
            idPromotion: this.props.id


        };
    }


    baseUrl = urlbackoffice;


    componentDidMount() {


        //alert("?" + this.state.idPromotion)
        var self = this;
        AsyncStorage.getItem("firstname", (err, firstname) => {
            AsyncStorage.getItem("lastname", (err, lastname) => {
                self.setState({
                    firstname,
                    lastname
                }, () => {
                    if (this.state.idPromotion == undefined) {
                        //alert("All")
                        self.getAllPromotionsdetails()
                    }
                    else {
                        //alert("id")
                        self.getPromotionsById(this.state.idPromotion)
                    }
                    self.getAllTransactionsByUser()
                });
            });
        });



        //self.TransactionId = self.state.id_user.id_user;

    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }


    componentWillUnmount() {

        // this.focusListener();

    }



    getPromotionsById = (id) => {

        console.log(' id Deals ' + id);
        var self = this;


        fetch(self.baseUrl + 'promotion/getPromotionDetailsById?id=' + id, {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json.code))
                        self.setState({ namePromotion: json.promotion_name, logo: json.logo, textCode: json.code })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


    }
    getAllPromotionsdetails = () => {

        var self = this;

        fetch(self.baseUrl + 'promotion/getpromotionsdetails', {
            method: "GET"
        })
            .then(function (response) {
                if (response.ok) {
                    response.json().then(function (json) {
                        //alert(JSON.stringify(json[0].code))
                        self.setState({ namePromotion: json[0].promotion_name, logo: json[0].logo, textCode: json[0].code })

                    })
                } else {
                    console.log('with response ' + response.status);
                }
            })

            .catch(error => { console.log("smting went wrong!" + error + response) })
    }


    getAllTransactionsByUser = () => {

        var self = this;
        AsyncStorage.getItem("userId", (err, id) => {
            fetch(self.baseUrl + '/transaction/getTransactionsByUserId?id=' + id, {
                method: "GET"
            })
                .then(function (response) {
                    if (response.ok) {
                        response.json().then(function (json) {
                            console.log("list de json => " + JSON.stringify(json))
                            //self.setState({ listTransactions: json })
                            let list = [];
                            json.forEach(element => {

                                if (element.type == "in") {
                                    list.push({ "id": element.id, "id_user": element.id_user, "id_promotion": element.id_promotion, "date": element.date, "description": element.description, "id_activity": element.id_activity, "cost": element.cost, "type": "+" })
                                }
                                else {

                                    list.push({ "id": element.id, "id_user": element.id_user, "id_promotion": element.id_promotion, "date": element.date, "description": element.description, "id_activity": element.id_activity, "cost": element.cost, "type": "-" })
                                }
                            });

                            console.log("list => " + JSON.stringify((list)))
                            self.setState({ listTransactions: list })
                        })
                    } else {
                        console.log('with response ' + response.status);
                    }
                })
                .catch(error => { console.log("something went wrong!" + error + response) })
        });
    }


    getHistory() {

        var self = this;


        if (this.state.listTransactions.length > 0) {



            return (


                self.state.listTransactions.map((data) => {
                    // console.log("Test " + data.description)

                    return (


                        <View style={styles.styledate} >


                            <Text style={{ fontSize: 12, color: "#3D4A55", fontWeight: "bold", marginLeft: "6%", marginTop: "2%" }}>
                                {data.date.substring(0, 19)}
                            </Text>

                            <Text style={{ fontSize: 12, color: "#3D4A55", fontWeight: "bold", marginLeft: "6%", marginTop: "2%" }}>
                                {data.description}
                            </Text>

                            <Text style={{ fontSize: 12, color: "#3D4A55", fontWeight: "bold", marginLeft: "5%", marginTop: "2%" }}>
                                {data.type}{data.cost}₮
                            </Text>


                        </View>

                    )




                }))
        }


    }
    _cancel() {
        const { modalVisible } = this.state;
        this.setModalVisible(!modalVisible)
    }
    _modal = () => {
        this.setState({ Clicked: true })
        this.setModalVisible(true);
    }

    _QRcode() {

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
                                <Text style={styles.modalText}>GR Code</Text>

                                <View style={styles.viewQRCODE}>
                                    <QRCode
                                        value={this.state.textCode}
                                        size={200}
                                        bgColor='black'
                                        fgColor='white' />

                                </View>
                                <Text style={{ fontSize: 18, marginTop: '5%', textAlign: 'center' }}> Code : {this.state.textCode} </Text>
                                <TouchableOpacity
                                    style={styles.button00000}
                                    onPress={() => {
                                        this._cancel();
                                    }}
                                >
                                    <Text style={styles.textStyle}>Cancel</Text>
                                </TouchableOpacity>

                            </View>

                        </View>
                    </Modal>
                </View>

            </>
        );
        /* if (this.state.text === 'according not exist' || this.state.text === undefined) {

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
        } */

    }


    render() {
        //alert(" NameP " + this.state.namePromotion)
        return (

            <View>


                <View style={styles.body}>

                    <View style={{ marginLeft: "0%", marginTop: 0 }}>
                        <GetBalanceDeals></GetBalanceDeals>
                    </ View>

                    <Text style={{ fontSize: 25, color: "#fff", fontWeight: "bold", marginTop: 10, textAlign: "center" }}>{this.state.firstname} {this.state.lastname}</Text>
                </View>

                <Text style={{ fontSize: 25, color: "#fff", textAlign: "left", fontWeight: "bold", marginTop: "7%", marginLeft: "5%", }}>Your Deals</Text>


                <TouchableOpacity style={styles.view} onPress={() => { this._modal(); }} >
                    <View style={{ marginTop: "0%", marginLeft: "5%" }}>
                        <Image
                            source={{ uri: this.state.logo }} style={{ width: 30, borderRadius: 30, height: 30 }}
                        />
                    </View>
                    <Text style={{ fontSize: 20, color: "#3D4A55", fontWeight: "bold", marginLeft: "5%" }}> {this.state.namePromotion}</Text>
                </TouchableOpacity>
                <Text style={{ fontSize: 25, color: "#fff", textAlign: "left", fontWeight: "bold", marginTop: "10%", marginLeft: "5%", }}>Your History</Text>

                <View style={styles.styleview2}>

                    <View style={styles.view2}>
                        <Text style={{ fontSize: 17, color: "#3D4A55", fontWeight: "bold", marginLeft: "2%", }}>
                            Date
                        </Text>

                        <Text style={{ fontSize: 17, color: "#3D4A55", fontWeight: "bold", marginLeft: "39%", }}>
                            Activity
                        </Text>

                        <Text style={{ fontSize: 17, color: "#3D4A55", fontWeight: "bold", marginLeft: "17%", }}>
                            Cost
                        </Text>


                    </View>

                    {this.state.Clicked === true && this._QRcode()}

                    <ScrollView >


                        {this.getHistory()}

                    </ScrollView>


                </View>
            </View>
        )
    }

}



export default ProfileDeals;

const styles = StyleSheet.create({

    body: {
        alignItems: "center",
        //position:"relative"
    },
    viewQRCODE: {
        backgroundColor: "#fff",
        //width: "80%",
        height: "55%",
        paddingLeft: 50,
        paddingTop: 30,
        borderRadius: 17,
        marginTop: "10%"
    },
    view: {
        width: "90%",
        height: "9%",
        borderRadius: 12,
        backgroundColor: "#fff",
        marginLeft: "5%",
        flexDirection: "row",
        marginTop: "3%",
        alignItems: "center",
        position: "relative",

    },
    view2: {
        //backgroundColor: "#fff",
        width: "90%",
        height: "10%",
        marginLeft: "5%",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,
        marginTop: "5%",
        flexDirection: "row"
    },
    styleview2: {
        flexDirection: "column",
        marginTop: "5%",
        backgroundColor: "#fff",
        width: "90%",
        height: "33%",
        marginLeft: "6%",
        borderTopEndRadius: 50,
        borderTopStartRadius: 50,


    },
    styledate: {
        flexDirection: "row",
        marginTop: "1%",
        //backgroundColor: "#fff",
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
    QRCodeView: {
        borderRadius: 15,
        height: "60%",
        backgroundColor: "white",
        //fontSize: 18,
        //paddingLeft: 30,
    },
    button00000: {
        backgroundColor: "#3D4A55",
        marginTop: "10%",
        height: "12%",
        //width: "100%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
    },

});




