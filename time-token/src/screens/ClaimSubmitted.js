import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity } from "react-native";

import { Email } from "../components/TimeTokenIcons"

class ClaimSubmitted extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.body}>
                    <View style={styles.logo}>
                        <Email></Email>
                        <Text style={{ color: "#fff", fontSize: 25, textAlign: "center", fontWeight: "bold" }}>Order Submitted</Text>
                    </View>

                    <View style={styles.text}>
                        <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}> We have received your TimeToken (₮) Claim!</Text>
                        <Text style={{ color: "#fff", fontSize: 25, textAlign: "center", marginTop: "5%" }}> Please allow up to 48 hours for the claim to be processed</Text>
                    </View>

                    <View style={styles.buttonstyle}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("InitialPage")}>
                            <Text style={{ color: "#fff", fontSize: 15 }}> Back to Home </Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("QRcodePage")}>
                            <Text style={{ color: "#fff", fontSize: 15 }}> Your Wallet </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00EEAE",
        //alignItems: "center",

    },
    text: {
        marginTop: "8%"
    },
    body: {
        //marginTop: "0%",
        alignItems: "center"

    },
    logo: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: "10%"
    },

    buttonstyle: {
        flexDirection: "column",
        width: "90%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

    },

    button: {
        backgroundColor: "#3D4A55",
        height: "20%",
        width: "90%",
        marginTop: "5%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",

    }

});
export default ClaimSubmitted