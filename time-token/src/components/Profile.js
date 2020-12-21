import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';
import { urlbackoffice } from '../../utils';




class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            firstname: '',
            lastname: '',
            birth_date: '',
            Location: '',
            numberclaims: '',
            Alltimeearned: '',
            listInformations: [] = []


        };
    }


    baseUrl = urlbackoffice;




    componentWillUnmount() {
        this.focusListener();
    }

    componentDidMount() {

        const { navigation } = this.props;
        var self = this;

        this.focusListener = navigation.addListener('focus', () => {


            AsyncStorage.getItem("userId", (err, id) => {
                //alert(id)
                AsyncStorage.getItem("photo", (err, photo) => {

                    //alert(id + "hiuhihihu")
                    // AsyncStorage.getItem("firstname", (err, firstname) => {
                    // AsyncStorage.getItem("lastname", (err, lastname) => {
                    //AsyncStorage.getItem("birthdate", (err, birth_date) => {
                    // AsyncStorage.getItem("Location", (err, Location) => {
                    // AsyncStorage.getItem("numberclaims", (err, numberclaims) => {
                    //    AsyncStorage.getItem("Alltimeearned", (err, Alltimeearned) => {
                    //alert(birth_date)
                    self.setState({
                        photo,
                        //  firstname,
                        //  lastname,
                        // birth_date,
                        // Location,
                        //  numberclaims,
                        //Alltimeearned
                    }, () => {

                        self.getInformationsById(id);
                        //});
                        // });
                        //});
                        //});
                        // });
                        //});
                    });
                });



            });


        });
    }

    getInformationsById = (userId) => {

        //alert(userId)
        var self = this;


        fetch(self.baseUrl + 'user/getuserinformation?id=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                //console.log(response)
                if (response.ok) {
                    response.json().then(function (json) {
                        //console.log(JSON.stringify(json))

                        //alert("TEST " + json[0].numberOfClaims)
                        self.setState({
                            listInformations: json
                            /* photo: json[0].photo, firstname: json[0].firstname,
                            lastname: json[0].lastname, birth_date: json[0].DateOfBirth, Location: json[0].location,
                            Alltimeearned: json[0].AllTimeEarned, numberclaims: json[0].numberOfClaims */
                        })
                    })

                } else {
                    console.log('with response ' + response.status);
                }
            })
            .catch(error => { console.log("something went wrong!" + error + response) })


    }




    render() {
        // var {photo} = this.state;
        return (

            <View style={{ alignItems: "center", marginTop: "1%", borderRadius: 15 }}>
                {this.state.listInformations.length > 0 &&
                    this.state.listInformations.map(information => {
                        return <View style={{}}>

                            <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", marginTop: "1%", textAlign: "center" }}> {information.firstname}    {information.lastname}  </Text>
                            <View >

                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "4%" }}>
                                    Date of Birth : <Text style={styles.textdate}> {information.DateOfBirth.substring(0, 10)}</Text>
                                </Text>

                            </View>

                            <View>
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                                    Location :<Text style={styles.textdata2}> {information.location}</Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                                    Number of Claims :<Text style={styles.textdata2}> {information.numberOfClaims}</Text>
                                </Text>
                            </View>

                            <View>
                                <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold", textAlign: "auto", marginTop: "3%", }}>
                                    All time earned :<Text style={styles.textdata2}> {information.AllTimeEarned} ₮</Text>
                                </Text>
                            </View>

                        </View>
                    })
                }

            </View>

        )
    }

}




export default Profile;

const styles = StyleSheet.create({
    textdate: {
        color: "white",
        fontSize: 18,
        paddingTop: 7,
        fontWeight: "bold",
        //marginRight: "66%",
        //padding: 2
    },
    textdata2: {
        color: "white",
        fontSize: 18,
        //paddingTop: 1,
        marginLeft: "40%",
        //padding: 2
    },
    profile: {
        alignItems: "center",
        //height:"40%",
        borderBottomColor: "#eee",
        //borderBottomWidth: 1,
        //paddingBottom: "1%",
        flexDirection: "row"
    }


});

//export default Profile;