import React, { Component } from "react";
import {
    StyleSheet, View, Text, ScrollView,
    TouchableOpacity, TextInput, AsyncStorage, Appearance
} from "react-native";


//import { LogoP, ArrowLeft} from '../components/NewNormIcons';
import DatePicker from 'react-native-datepicker'
import { urlbackoffice } from "../../utils";
import DismissKeyboard from "../components/DismissKeyboard";


const colorScheme = Appearance.getColorScheme();

class EditUser extends Component {
    urlBackOffice = urlbackoffice;
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            dateOfBirth: '',
            email: '',
            location: '',
            busy: false
        };
    }


    componentDidMount() {
        const { navigation } = this.props;
        var self = this;

        this.focusListener = navigation.addListener('focus', () => {
            self.setState({ busy: false });
            AsyncStorage.getItem("email", (err, email) => {
                //alert(email)
                self.setState({ email: email })
            });
            AsyncStorage.getItem("userId", (err, id) => {
                //alert(id)
                self.getInformationsById(id);
            });
        });


    }

    componentWillUnmount() {
        //   this._unsubscribe();
    }

    getInformationsById = (userId) => {


        var self = this;

        fetch(self.urlBackOffice + 'user/getUserById?id=' + userId, {
            method: "GET"
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {

                    response.json().then(function (json) {
                        //alert(JSON.stringify(json))
                        //console.log("date" + json.birth_date)
                        //console.log(" date " + json.city)
                        self.setState({
                            firstname: json.firstname, lastname: json.lastname, dateOfBirth: json.birth_date, location: json.city
                        })

                    }).catch(err => alert(err))

                } else {

                    console.log('Network request for backoffice failed with response ' + response.status);


                }
            }).catch(err => alert(err));

    }



    submit = () => {
        var self = this;
        this.setState({ busy: true }, () => {
            self.updateUser();

        });
    }

    updateUser = () => {

        var self = this;
        //alert(self.state.firstname + " last " + self.state.lastname + " date " + self.state.dateOfBirth)

        var userDetails = {
            "birth_date": self.state.dateOfBirth,
            "firstname": self.state.firstname,
            "lastname": self.state.lastname,
            "city": self.state.location
        }
        this.updateMemberByEmail(userDetails, this.state.email);








    }

    updateMemberByEmail(userDetails, email) {

        //alert("email" + email)
        //console.log(JSON.stringify(userDetails))
        var self = this;
        fetch(this.urlBackOffice + 'user/updateUserByEmail?email=' + email, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userDetails)
        })
            .then(function (response) {
                //alert(JSON.stringify(response))
                if (response.ok) {
                    //console.log(JSON.stringify(response))
                    response.text().then(function (json) {
                        //alert(JSON.stringify(json))
                        self.props.navigation.navigate('ProfilePage');
                    });
                } else {
                    self.setState({ busy: false });
                    if (response.status == 403) {
                        alert("email does not exist ");

                    }

                }
            });

    }


    render() {

        return (

            <DismissKeyboard>
                <View style={styles.container} >

                    <Text style={{ color: "#fff", fontSize: 26, fontWeight: "700", textAlign: "center", marginTop: 50, marginBottom: 10 }}>
                        User Details
                </Text>

                    <View style={styles.body}>

                        <View style={styles.textHeader} >

                            <View>
                                <Text style={styles.text}>First name</Text>
                                <View style={{ marginTop: "1%" }}>
                                    <TextInput
                                        multiline={true} numberOfLines={1}
                                        style={styles.inputStyle}
                                        placeholder=''
                                        value={this.state.firstname}
                                        autoCapitalize='none'
                                        onChangeText={val => this.setState({ firstname: val })}
                                    ></TextInput>

                                </View>
                            </View>

                            <View>
                                <Text style={styles.text}>Last name</Text>
                                <View style={{ marginTop: "1%" }}>
                                    <TextInput
                                        multiline={true} numberOfLines={1}
                                        style={styles.inputStyle}
                                        placeholder=''
                                        value={this.state.lastname}
                                        autoCapitalize='none'
                                        onChangeText={val => this.setState({ lastname: val })}
                                    ></TextInput>

                                </View>
                            </View>

                            <View>
                                <Text style={styles.text}>Location</Text>
                                <View style={{ marginTop: "1%" }}>
                                    <TextInput
                                        multiline={true} numberOfLines={1}
                                        style={styles.inputStyle}
                                        placeholder=''
                                        value={this.state.location}
                                        autoCapitalize='none'
                                        onChangeText={val => this.setState({ location: val })}
                                    ></TextInput>

                                </View>
                            </View>

                            <View>
                                <Text style={styles.text}>Birth date</Text>
                                <View style={{ marginTop: "1%" }}>
                                    <DatePicker
                                        style={{
                                            width: "100%", borderRadius: 15,
                                            height: 40,
                                            backgroundColor: "#fff",
                                            fontSize: 16,
                                        }}
                                        date={this.state.dateOfBirth}
                                        mode="date"
                                        placeholder=""
                                        format="YYYY-MM-DD"
                                        maxDate={new Date()}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateIcon: {
                                                position: 'absolute',
                                                left: 10,
                                                marginLeft: 0
                                            },
                                            dateInput: {
                                                //marginTop: "0%",
                                                width: "100%",
                                                borderColor: 'white',
                                                borderRadius: 15,
                                                height: 30,
                                                marginRight: "50%",
                                            },
                                            datePicker: {
                                                backgroundColor: colorScheme === "dark" ? "#222" : "white"
                                            }

                                        }}
                                        onDateChange={(date) => { this.setState({ dateOfBirth: date }) }}
                                    />

                                </View>
                            </View>
                            {/*  <View>
                                <Text style={styles.text}>Birth date</Text>
                                <View style={{ marginTop: "1%" }}>
                                    <TextInput
                                        multiline={true} numberOfLines={1}
                                        style={styles.inputStyle}
                                        placeholder=''
                                        //value={this.state.city}
                                        autoCapitalize='none'
                                        onChangeText={val => this.setState({ city: val })}
                                    ></TextInput>

                                </View>
                            </View>
                             

                                <View>
                                    <Text style={styles.text}>zip code</Text>
                                    <View style={{ marginTop: "1%" }}>
                                        <TextInput
                                            multiline={true} numberOfLines={1}
                                            style={styles.inputStyle}
                                            placeholder=''
                                            //value={this.state.zipCode}
                                            autoCapitalize='none'
                                            onChangeText={val => this.setState({ zipCode: val })}
                                        ></TextInput>

                                    </View>
                                </View> */}
                            <View marginVertical='20%' >
                                <TouchableOpacity style={styles.buttonregister} onPress={this.submit} disabled={this.state.busy}>
                                    <Text style={{ color: "white" }}>{this.state.busy ? "Please Wait !" : "Submit"}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonback} onPress={() => this.props.navigation.navigate("ProfilePage")} >
                                    <Text style={{ color: "white" }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>

                            {/* <View style={styles.logo} >
                                    {/* <LogoP></LogoP> 
                                    <Text style={{ color: "#fff", fontSize: 12 }}> TimeToken </Text>
                                </View> */}
                        </View>

                    </View>



                </View >
            </DismissKeyboard>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ACEE",
    },
    body: {

        //flex: 10,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "-20%"
    },
    text: {
        color: "white",
        marginTop: "3%",
        borderRadius: 15,
        alignItems: "center",
        paddingLeft: "5%",
        paddingRight: "10%",

        fontSize: 14
    },
    title: {
        fontWeight: "700",
        //backgroundColor:"red",
        fontSize: 28,
        color: "#fff",
        // marginTop: "10%",
        marginRight: "0%"
    },
    Back: {
        height: 50,
        width: "50%",
        marginTop: "9%",
        borderRadius: 10,
        alignItems: "center",
        //paddingLeft: "5%",
        //paddingRight: "10%",
        justifyContent: "center",
        backgroundColor: "#007b88",
        //flexDirection: "row"
    },
    textHeader: {
        // backgroundColor: "red",
        width: "85%",
        height: "60%"

    },
    buttonregister: {
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3D4A55",
        marginTop: "-6%"
    },
    buttonback: {
        height: 50,
        borderRadius: 15,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3D4A55"
    },
    logo: {
        width: "100%",
        height: 100,
        alignItems: "center",
        marginTop: "10%",
        //marginBottom: "15%"
    },
    inputStyle: {
        borderRadius: 15,
        height: 40,
        backgroundColor: "#fff",
        //paddingRight: 5,
        fontSize: 16,
        //alignSelf: "stretch",
        //flex: 1,
        //lineHeight: 16,
        //paddingTop: 14,
        //paddingBottom: 8,
        paddingLeft: 30,
        //width:"105%",

    }
});

export default EditUser;