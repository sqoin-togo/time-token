import React from 'react';
import {
    View, Text, AsyncStorage,
    StyleSheet,

} from 'react-native';
import { urlbackoffice, urlexchange } from '../../utils';



export default class App extends React.Component {

    baseUrlKey = urlexchange;
    //baseUrlKey = 'http://18.218.176.134:3014/';

    urlBackOffice = urlbackoffice
    //urlBackOffice = 'http://192.168.1.229:3002/'

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            balance: ''


        };
    }

    componentDidMount() {

        this.getuserIdByEmail()
        //this.getPublicAddressByUserId()
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
                        self.getGetBlanceBypublickey(json.publickey)
                    }).catch(err => alert(err))

                } else {

                    console.log('Network request for backoffice failed with response ' + response.status);


                }
            }).catch(err => alert(err));
    }
    getGetBlanceBypublickey = (publickey) => {
        var self = this;

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





    render() {

        return (
            <>
                <Text style={{
                    fontSize: 50,
                    color: "#fff",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginTop: "7%"
                }}> ₮ {this.state.balance} </Text>

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


});