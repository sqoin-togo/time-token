import React, { Component } from "react"
import {
  StyleSheet, View, Text,
  AsyncStorage, TouchableOpacity, TextInput, KeyboardAvoidingView, ScrollView
} from "react-native"
import { urlbackoffice } from "../../utils";
import { Logo } from "../components/TimeTokenIcons"
//import { ScrollView } from "react-native-gesture-handler";

class LoginPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      serverMessage: "-",
      busy: false,
      password: ""

    };
  }


  //baseUrl = "http://3.14.72.187/";

  urlBackOffice = urlbackoffice;


  callLoginBackOffice = () => {



    let { email, password } = this.state;

    let loginData = {
      "email": email,
      "password": password
    }

    console.log(email + " password " + password)
    var self = this;

    self.setState({ busy: true })

    fetch(self.urlBackOffice + 'user/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(loginData)
    })

      .then(function (response) {



        if (response.ok) {
          response.json().then(function (json) {

            //alert(JSON.stringify(json))
            //console.log("tesssst " + JSON.stringify(json))
            AsyncStorage.setItem("connectedUser", "" + String(json.member.id), (err) => {


              if (err) {
                alert("error setting connectedUser in AsyncStorage")
                self.setState({ busy: false });
              }
              AsyncStorage.setItem("email", "" + json.member.email, (err) => {
                if (err) {
                  alert("error setting email in AsyncStorage")
                  self.setState({ busy: false })
                }
                AsyncStorage.setItem("userId", "" + String(json.member.id), (err) => {
                  if (err) {
                    alert("error setting memberId in AsyncStorage")
                    self.setState({ busy: false })
                  }
                  AsyncStorage.setItem("firstname", "" + json.member.firstname, (err) => {
                    if (err) {
                      alert("error setting firstname in AsyncStorage")
                      self.setState({ busy: false })
                    }
                    AsyncStorage.setItem("lastname", "" + json.member.lastname, (err) => {
                      if (err) {
                        alert("error setting lastname in AsyncStorage")
                        self.setState({ busy: false })
                      }
                      AsyncStorage.setItem("country", "" + json.member.country, (err) => {
                        if (err) {
                          alert("error setting country in AsyncStorage")
                          self.setState({ busy: false })
                        }
                        AsyncStorage.setItem("city", "" + json.member.city, (err) => {
                          if (err) {
                            alert("error setting city in AsyncStorage")
                            self.setState({ busy: false })
                          }
                          AsyncStorage.setItem("zipcode", "" + json.member.zip_code, (err) => {
                            if (err) {
                              alert("error setting zipcode in AsyncStorage")
                              self.setState({ busy: false })
                            }
                            AsyncStorage.setItem("birthdate", "" + json.member.birth_date, (err) => {
                              if (err) {
                                alert("error setting birthdate in AsyncStorage")
                                self.setState({ busy: false })
                              }
                              AsyncStorage.setItem("photo", "" + json.member.photo, (err) => {
                                if (err) {
                                  alert("error setting photo in AsyncStorage")
                                  self.setState({ busy: false })
                                }
                                AsyncStorage.setItem("password", "" + json.member.password, (err) => {
                                  if (err) {
                                    alert("error setting password in AsyncStorage")
                                    self.setState({ busy: false })
                                  }
                                  self.setState({ busy: false }, () => {

                                    // alert("go to InitialPage")
                                    self.props.navigation.navigate('InitialPage');


                                  });
                                })
                              })
                            })
                          })
                        })
                      });
                    });
                  });
                });
              });
            });


            // self.getUserInformationsByEmail();


          }).catch(err => { alert(err); self.setState({ busy: false }) });



        } else {
          self.setState({ serverMessage: "error in login", busy: false })
          console.log('Network request for backoffice failed with response ' + response.status);


        }
      }).catch(err => { alert(err); self.setState({ busy: false }) });;

  }

  login = () => {
    var self = this;
    self.callLoginBackOffice();

  }

  render() {
    var { busy } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <View>
            <View style={styles.logo}>
              <Logo></Logo>

              <Text style={{ color: "#3B6064", fontSize: 25, marginTop: "3%" }}>TimeToken</Text>

            </View>


            <View style={{ marginTop: "17%", width: "99%" }} >
              <TextInput style={styles.inputStyle}
                placeholder='admin@email.com'
                autoCapitalize='none'
                onChangeText={(text) => this.setState({ email: text })}
              ></TextInput>

            </View>
            <View style={{ width: "99%", marginTop: "2%" }} >
              <TextInput style={styles.inputStyle}
                placeholder='Password'
                autoCapitalize='none'
                secureTextEntry
                onChangeText={(text) => this.setState({ password: text })}
              ></TextInput>

            </View>

            <View marginVertical='5%'>
              <TouchableOpacity style={styles.button} onPress={this.login} disabled={busy}>

                <Text style={{ color: "white", fontSize: 19 }}>{this.state.busy ? "PLEASE WAIT..." : "Login"}</Text>

              </TouchableOpacity>
            </View>



          </View>
        </ScrollView>
      </KeyboardAvoidingView >
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ACEE",
    alignItems: "center",

  },

  logo: {
    marginTop: "25%",
    alignItems: "center"
  },



  button: {


    height: 55,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3D4A55",
    marginTop: "10%"

  },
  inputStyle: {
    borderRadius: 15,
    // height: "12%",
    backgroundColor: "#fff",
    fontSize: 18,
    paddingLeft: 30,


  },
});

export default LoginPage