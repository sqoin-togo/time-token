import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, AsyncStorage } from 'react-native'



class LogoutProfile extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {


    }



    _logOut = () => {
        var self = this;
        AsyncStorage.clear((err) => {
            self.props.navigation.navigate('TimeToken')
        })

    }
    _EditUser = () => {
        var self = this;

        self.props.navigation.navigate('EditUser')


    }

    render() {
        return (

            <View style={styles.buttons}>
                <TouchableOpacity style={styles.button}><Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>Share the TimeToken App!</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this._EditUser}><Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }} >Edit</Text></TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this._logOut}><Text style={{ color: "#fff", fontSize: 17, textAlign: "center" }}>Log Out</Text></TouchableOpacity>
            </View>

        )
    }
}


export default LogoutProfile

const styles = StyleSheet.create({

    buttons: {
        flexDirection: "column",
        marginRight: "20%",
        borderRadius: 15,
        marginTop:"6%"

    },
    button: {
        backgroundColor: "#3D4A55",
        height: "19%",
        width: "155%",
        marginTop: "3%",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    }

});