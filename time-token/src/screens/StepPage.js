import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

class StepPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      firstStep: 'Step1',
      listSteps: ['Step2', 'Step3', 'Last One']
    };
  }


  componentDidMount() {
    this.setState({ value: this.state.firstStep })
  }




  nextSummary = () => {


    // console.log("first " , this.state.listSteps[0])
    this.setState({ value: this.state.listSteps[0] })
    this.state.listSteps.splice(this.state.listSteps.indexOf(this.state.listSteps[0]), 1);
    // console.log("list 2 ", this.state.listSteps)     


  }

  changeButtonState() {


    if (this.state.listSteps.length > 0) {

      return (
        <TouchableOpacity style={{ marginTop: "80%", backgroundColor: "#3D4A55", width: "90%", height: "10%", borderRadius: 15, alignItems: "center", justifyContent: "center" }} onPress={this.nextSummary} >
          <Text style={{ color: "#fff", fontSize: 20 }}> Next </Text>
        </TouchableOpacity>
      )
    }

    else {

      return (
        <TouchableOpacity style={{ marginTop: "80%", backgroundColor: "#3D4A55", width: "90%", height: "10%", borderRadius: 15, alignItems: "center", justifyContent: "center" }} onPress={() => this.props.navigation.navigate("InitialPage")} >
          <Text style={{ color: "#fff", fontSize: 20 }}> Ready ! </Text>
        </TouchableOpacity>
      )
    }



  }

  render() {
    return (
      <View style={styles.container}>




        <Text style={{ color: "#fff", fontSize: 30, marginTop: "5%" }}> How Does it works ?</Text>
        <Text style={{ color: "#fff", fontSize: 30, marginTop: "27%" }}> {this.state.value}</Text>

        {this.changeButtonState()}





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


});
export default StepPage



