import React from "react";
import {
    StyleSheet,
    View,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity
} from "react-native";
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            dataSource: []
        };
    }
    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
            .then(response => response.json())
            .then((responseData) => {
                this.setState({
                    loading: false,
                    dataSource: responseData.data
                })
            })
            .catch(error => console.log(error)) //to catch the errors if any
    }
    FlatListItemSeparator = () => {
        return (
            <View style={{
                height: .5,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem = (data) =>
        <TouchableOpacity style={styles.list}>
            <Text style={styles.lightText}>Employee Name : {data.item.employee_name}</Text>
            <Text style={styles.lightText}>Employee Salary : {data.item.employee_salary}</Text>
            <Text style={styles.lightText}>Employee Age : {data.item.employee_age}</Text></TouchableOpacity>
    render() {
        if (this.state.loading) {
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <View>
                    <Text> Employee Details</Text>
                </View>
                <FlatList
                    data={this.state.dataSource}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    renderItem={item => this.renderItem(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0c9"
    },
    loader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    list: {
        paddingVertical: 2,
        margin: 5,
        backgroundColor: "#fff"
    }
});
/*  ===================  */
import React, { Component } from 'react';
import { View, StyleSheet, Text, AsyncStorage } from 'react-native';




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
            information: ''


        };
    }


    baseUrl = "https://apptimetoken.sagecity.io/";




    componentWillUnmount() {
        this.focusListener();
    }

    componentDidMount() {

        const { navigation } = this.props;
        var self = this;

        this.focusListener = navigation.addListener('focus', () => {


            AsyncStorage.getItem("userId", (err, id) => {
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

        alert(userId)
        var self = this;


        fetch(self.baseUrl + 'user/getuserinformation?id=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                console.log(JSON.stringify(response))
                if (response.ok) {
                    response.json().then(function (json) {
                        alert(JSON.stringify(json))

                        alert("TEST " + json[0].numberOfClaims)
                        self.setState({
                            photo: json[0].photo, firstname: json[0].firstname,
                            lastname: json[0].lastname, birth_date: json[0].DateOfBirth, Location: json[0].location,
                            Alltimeearned: json[0].AllTimeEarned, numberclaims: json[0].numberOfClaims
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
                <Text style={{ fontSize: 24, fontWeight: "700", color: "#fff", marginTop: "1%", textAlign: "center" }}> {this.state.firstname}    {this.state.lastname}  </Text>
                <View /* style={styles.profile} */>

                    <Text style={{ color: "#fff", fontSize: 18, textAlign: "auto", marginTop: "1%" }}>
                        Date of Birth : <Text style={styles.textdate}> {this.state.birth_date}</Text>
                    </Text>

                </View>




                <View>
                    <Text style={{ color: "#fff", fontSize: 18, textAlign: "auto", marginTop: "3%", }}>
                        Location :<Text style={styles.textdata2}> {this.state.Location}</Text>
                    </Text>



                </View>

                <View>
                    <Text style={{ color: "#fff", fontSize: 18, textAlign: "auto", marginTop: "3%", }}>
                        Number of Claims :<Text style={styles.textdata2}> {this.state.numberClaims}</Text>
                    </Text>


                </View>


                <View>
                    <Text style={{ color: "#fff", fontSize: 18, textAlign: "auto", marginTop: "3%", }}>
                        All time earned :<Text style={styles.textdata2}> {this.state.AllTimeEarned}</Text>
                    </Text>


                </View>

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
        fontSize: 14,
        //paddingTop: 1,
        //marginRight: "66%",
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
