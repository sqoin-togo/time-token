import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage } from "react-native";
import { urlbackoffice, urloauthbackoffice } from "../../utils";
import { Check } from "../components/TimeTokenIcons";


class CheckPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      data: "",
      notActivated: "",
      activated: "",
      busy: ""
    }
  }

  componentDidMount() {

    /* var self = this;
    this._unsubscribe = this.props.navigation.addListener('focus', () => {

      AsyncStorage.getItem("RegisterState", (err, result) => {
        if (err) {
          //XXX
          return;
        }
        if (!result) {
          return;
        }
        if (result === "PhotoTaken") {
          self.props.navigation.navigate("RegisterPage");
        }
        if (result === "EmailSent") {
          self.props.navigation.navigate("Checkpage")
        }
        if (result === "EmailValidated") {
          self.props.navigation.navigate("Hi")
        }
        if (result === "ProfileEdited") {
          self.props.navigation.navigate("Menu")
        }

      });
    }); */

  }

  componentWillUnmount() {
    //this._unsubscribe();
  }

  textInput = {}
  urlOauth = urloauthbackoffice;
  urlBackOffice = urlbackoffice;

  validateClick = () => {
    var self = this;

    AsyncStorage.getItem("email", (err, email) => {
      AsyncStorage.getItem("password", (err, password) => {
        self.activateUserCompte(email, password);
      });
    });
    /*  AsyncStorage.setItem("registrationState", "emailValidated", (err) => {
        //XXX
        self.props.navigation.navigate("Emailconfirmedpage")
      }); */
  }


  saveUserData = () => {
    var self = this;
    AsyncStorage.getItem("email", (err, email) => {
      if (err) {
        alert("error getting email");
        return;
      }
      AsyncStorage.getItem("password", (err, password) => {
        if (err) {
          alert("error getting password");
          return;
        }
        AsyncStorage.getItem("firstname", (err, firstname) => {
          if (err) {
            alert("error getting firstname");
            return;
          }
          AsyncStorage.getItem("lastname", (err, lastname) => {

            AsyncStorage.setItem("RegisterState", "EmailValidated", () => {
              self.props.navigation.navigate("EmailConfirmed");

            })
          })

        })
      });
    })
  }

  activateUserCompte = (email, password) => {

    const self = this;
    let activateUserCompteData = {
      "username": email,
      "email": email,
      "password": password
    };

    /**this is the code i received by email **/
    fetch(self.urlOauth + 'app/confirm-account-code/' + self.state.value, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(activateUserCompteData)
    })

      .then(function (response) {


        if (response.ok) {
          response.text().then(function (text) {

            self.setState({ isShow: true })
            self.setState({ activated: 'account activated !  ' })

            self.saveUserData();


          });
        } else {
          self.setState({ notActivated: 'Invalid Code  ' })
        }
      })
      .catch(error => { console.log("something went wrong!") })

  }

  valueChanged = (value) => {
    this.setState({ value })
  }
  render() {

    return (
      <View style={styles.container} >

        <View style={styles.body}>

          <Check></Check>
          <Text style={styles.text}>
            An invitation has been sent to your email . Please check to verify
                 </Text>

          <Text style={styles.text}>
            please Enter validation code {this.state.busy}
          </Text>

          <TextInput
            multiline={true}
            keyboardType="numeric"
            numberOfLines={1}
            style={styles.input}
            onChangeText={this.valueChanged}
            ref={c => { this.textInput = c }}>

          </TextInput>

          <Text style={{ color: "red" }} > {this.state.notActivated} </Text>
          <Text style={{ color: "green" }} > {this.state.activated} </Text>
          <TouchableOpacity style={styles.button} onPress={this.validateClick}>
            <Text style={{ color: "white", fontSize: 20 }}>
              Validate
       </Text>
          </TouchableOpacity>

        </View>

      </View>

    )
  }
}
export default CheckPage

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#00ACEE",
    paddingBottom: 15
  },
  body: {
    marginTop: "28%",
    alignItems: "center",



  },

  text: {
    color: "#3D4A55",
    textAlign: "center",
    paddingHorizontal: 20,
    fontSize: 17,
    marginTop: "10%"

  },
  input: {
    backgroundColor: "white",
    width: "80%",
    height: "10%",
    paddingLeft: "5%",
    borderRadius: 15,
    marginTop: "7%"

  },
  button: {
    backgroundColor: "#3D4A55",
    width: "80%",
    height: "10%",
    borderRadius: 15,
    marginTop: "5%",
    alignItems: "center",
    justifyContent: "center"

  }
});


