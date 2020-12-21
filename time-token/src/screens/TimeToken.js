import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity } from "react-native";
import {Logo} from "../components/TimeTokenIcons";


class TimeToken extends Component {
  Register = () => {
    this.props.navigation.navigate("RegisterPage");
  }

  render() {
    return (




      <View style={styles.container}>

          <View style={styles.body}>

          <Logo></Logo>
            <Text style={{ color: "#fff", fontSize: 30, marginTop: "3%" }}>Time Token</Text>


            </View>
          <View style={styles.buttonstyle}>
          <TouchableOpacity style={styles.button}onPress={() => this.props.navigation.navigate('LoginPage')}>

            <Text style={{ textAlign: "center", fontSize: 15, alignItems: "center", color: "#fff" }} >Login</Text>

          </TouchableOpacity> 

          <TouchableOpacity style={styles.button} onPress={this.Register}>

            <Text style={{ textAlign: "center", fontSize: 15, alignItems: "center", color: "#fff" }}>Sign Up</Text>

          </TouchableOpacity>



        </View>


      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ACEE",
    alignItems: "center",

  },

  body: {
    marginTop: "30%",
    alignItems: "center"
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
    marginTop: "10%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

  }
});
export default TimeToken

 