import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity } from "react-native";
import {Email} from "../components/TimeTokenIcons";
class EmailConfirmed extends Component {
  componentDidMount() {

    setTimeout(
      () => { this.props.navigation.navigate("StepPage") }, 2000
    )
    
    this._unsubscribe = this.props.navigation.addListener('focus', () => {

      setTimeout(
        () => { this.props.navigation.navigate("StepPage") }, 2000
      )
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }
    render() {
        return (
          <View style={styles.container}>

            <View style={styles.logo}>
             <Email></Email>

              <Text style={{color:"#fff",fontSize:25,textAlign:"center",fontWeight: "bold"}}> Email Confirmed</Text>
               </View></View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ACEE",
    alignItems: "center",

  },
  logo:{
    marginTop:"50%",
    alignItems: "center"
  }
});
export default EmailConfirmed