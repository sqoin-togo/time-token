import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity } from "react-native";

import { Email } from "../components/TimeTokenIcons"

class OrderConfirmed extends Component {


  constructor(props) {
    super(props);
    this.state = {

      idPromotion: this.props.route.params,
    }

  }


  componentDidMount() {
    var self = this;
    //alert(self.state.idPromotion.idPromotion);

  }



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.logo}>
            <Email></Email>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center", fontWeight: "bold" }}>Order Confirmed</Text>
          </View>

          <View style={styles.text}>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}> Congratulations! You have claimed the deal!</Text>
            <Text style={{ color: "#fff", fontSize: 25, textAlign: "center" }}> You can view this deal within your wallet .    </Text>
          </View>

          <View style={styles.buttonstyle}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("InitialPage")}>
              <Text style={{ color: "#fff", fontSize: 15 }}> Back to browshing </Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("DearsPage", { "idPromotion": this.state.idPromotion.idPromotion })}>
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
    marginTop: "8%",
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
export default OrderConfirmed