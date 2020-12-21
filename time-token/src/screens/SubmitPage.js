import React, { Component } from "react"
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native'
import ToggleSwitch from 'toggle-switch-react-native';
import { Submit } from "../components/TimeTokenIcons";



class SubmitPage extends Component {
    constructor(props) {
        super(props);
        this.state
            = {
            isOnDefaultToggleSwitch: false,
            isOnLargeToggleSwitch: true,
            isOnBlueToggleSwitch: false,
            isOnDefaultToggleSwitch2: false,
            isOnLargeToggleSwitch2: true,
            isOnBlueToggleSwitch2: false,
            disableButtonSubmit: true,
            styleDisabled: styles.buttonSubmitDisabled,
            styleAbled: styles.buttonSubmitAbled,
        };
    }
    onToggle(isOn) {
        console.log("Changed to " + isOn);
    }


    goToSubmitPage = () => {

        this.props.navigation.navigate("CheckPage");

    }




    render() {

        return (




            <View style={styles.container}>

                <View style={styles.Header}>

                    <View style={styles.headerstyle}>

                        <View style={{ marginRight: "5%" }}>
                            <Submit></Submit>
                        </View>
                        <Text style={{ color: "#fff", marginTop: "3%", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
                            We core about your privacy.Your data is sage and secure.
                    </Text>
                    </View>
                </View>


                <View style={styles.body}>
                    <Text style={styles.text}>
                        Before we get started, Time Token needs your consent to securely store your data for you.This app is made by
                    </Text>


                    <Text style={styles.text}>

                        <Text style={{ fontWeight: 'bold' }}>Your data is encrypted on your secure servers </Text>and cannot be read by anyone but yourself.
                        <Text style={{ fontWeight: 'bold' }}>You have full control over your  </Text>
                        data and can export or delete it

                    </Text>


                    <Text style={styles.text}>
                        Your can learn more about how we  process data in our <Text style={{ color: "#55828B", fontWeight: 'bold' }}>privacy policy.</Text>
                    </Text>




                    <View style={styles.togglebutton}>
                        <View style={styles.toggle}>
                            <ToggleSwitch
                                isOn={this.state.isOnDefaultToggleSwitch}
                                onColor="#364958"
                                //offColor="red"
                                //label="Example label"
                                labelStyle={{ color: "black" }}
                                size="small"
                                onToggle={isOnDefaultToggleSwitch => {
                                    this.setState({ isOnDefaultToggleSwitch });
                                    this.onToggle(isOnDefaultToggleSwitch);
                                }}
                            />
                            <Text style={{ color: "#364958", marginLeft: "10%", fontSize: 15 }}>I understand mu data protection rights and consent to my data being stared</Text>

                        </View>


                    </View>

                    <View style={styles.buttons}>
                        <TouchableOpacity style={styles.buttonS} disabled={true} >
                            <Text style={{ color: "white" }}> Cancel </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} disabled={!this.state.isOnDefaultToggleSwitch} onPress={this.goToSubmitPage}>
                            <Text style={{ color: "white" }}>  Submit  </Text>
                        </TouchableOpacity>
                    </View>




                </View>

            </View>
        )

    }
}
export default SubmitPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    Header: {
        backgroundColor: "#3D4A55",
        height: "20%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingRight: 10
    },
    headerstyle: {
        flexDirection: "row",
        marginTop: "15%",
        width: "70%",
        justifyContent: "center",
        //paddingRight: 20,
        // marginVertical: "5%",

        // justifyContent: "space-evenly"

    },
    body: {
        //marginTop: "20%",
        backgroundColor: "#fff",
        flex: 10,
        alignItems: "center"

    },

    togglebutton: {
        flexDirection: "row",
        marginTop: "15%"
        //alignItems: "center",
        //justifyContent: "space-between"
    },


    textstyle: {
        flexDirection: "column",

    },

    text: {
        color: "#3D4A55",
        width: "90%",
        marginTop: "8%",
        fontSize: 18

    },

    button: {
        backgroundColor: "#3D4A55",
        width: "40%",
        height: 50,
        marginHorizontal: "3%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonS: {
        backgroundColor: "#0E76A8",
        width: "40%",
        height: 50,
        marginHorizontal: "3%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },

    buttonSubmitDisabled: {
        backgroundColor: "grey",
        width: "40%",
        height: 50,
        marginHorizontal: "3%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    buttonSubmitAbled: {
        backgroundColor: "#3D4A55",
        width: "40%",
        height: 50,
        marginHorizontal: "3%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15
    },
    buttons: {
        flexDirection: "row",
        width: "80%",
        flex: 1,
        //marginVertical: "0.2%"
        marginTop: "10%",
        marginLeft: "5%"
    },
    toggle: {
        flexDirection: "row",
        //marginTop: "2%",
        width: "60%",
        justifyContent: "center",
        marginHorizontal: "3%"




    }


});
