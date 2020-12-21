import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity, TextInput, ScrollView } from "react-native";

class InformationPage extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
    }



    render() {
        return (

            <View style={styles.container}>

                <Text> </Text>
                <View style={styles.body}>


                    <Text style={styles.title}>  Your Information</Text>

                    <View style={styles.buttons} >

                        <View marginVertical='3%' >
                            <TextInput
                                multiline={true} numberOfLines={1}
                                style={styles.inputStyle}
                                placeholder='Location'
                                autoCapitalize='none'
                            // onChangeText={(text) => this.setState({  })}
                            ></TextInput>
                        </View>

                        <View marginVertical='3%' >
                            <TextInput
                                multiline={true} numberOfLines={1}
                                style={styles.inputStyle}
                                placeholder='Number of claims'
                                autoCapitalize='none'
                            //  onChangeText={(text) => this.setState({ : text })}
                            ></TextInput>
                        </View>

                        <View marginVertical='3%' >
                            <TextInput
                                multiline={true} numberOfLines={1}
                                style={styles.inputStyle}
                                placeholder='All time earned'
                                autoCapitalize='none'
                            //onChangeText={(text) => this.setState({ : text })}
                            ></TextInput>
                        </View>

                        <View marginVertical='3%' >
                            <TouchableOpacity style={styles.buttonregister} onPress={() => this.props.navigation.navigate('SubmitPage')}/*onPress={this.registerOauth} disabled={busy} */>
                                <Text style={{ color: "white", fontSize: 20 }}> {/*this.state.busy ? "Please Wait !" : "Register"*/}Register</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00ACEE"
    },
    body: {
        alignItems: "center",
        justifyContent: "center",
        marginTop:"15%"
    },
    title: {

        fontSize: 25,
        color: "#fff",
        fontWeight: "700",
        marginTop: "5%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    buttons: {
        width: "80%",
        marginVertical: 60
    },

    inputStyle: {
        borderRadius: 15,
        height: 50,
        backgroundColor: "#fff",
        fontSize: 16,
        paddingLeft: 30,

    },
    buttonregister: {
        height: 50,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3D4A55",
        marginTop: "10%"
    },



});
export default InformationPage