import React, { Component } from "react";
import {
  StyleSheet, View, Text,
  TouchableOpacity, TextInput, AsyncStorage, Image,
  KeyboardAvoidingView, Appearance
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker';
import { urlbackoffice, urloauthbackoffice } from "../../utils";

const colorScheme = Appearance.getColorScheme();
class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      birth_date: "",
      city: "",
      serverMessage: "-",
      busy: false
    };
  }

  componentDidMount() {
    /*
        var self = this;
        AsyncStorage.getItem("firstname", (err, firstname) => {
          AsyncStorage.getItem("lastname", (err, lastname) => {
            AsyncStorage.getItem("email", (err, email) => {
              AsyncStorage.getItem("Datebirth", (err, Datebirth) => {
                self.setState({
                  firstname,
                  lastname,
                  email,
                  Datebirth
                }, () => {
                });
              });
            });
          });
        });
        this.state
    */
  }

  //https://oauthtimetoken.sagecity.io

  baseUrl = urlbackoffice;
  baseUrlOauth = urloauthbackoffice;

  emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;



  registerOauth = () => {
    //waiting message
    let { firstname, lastname, email, password, confirmPassword } = this.state;

    if ((!firstname) || (firstname.length < 3)) {
      alert("First Name must have at least 3 characters");
      return;
    }

    if ((!lastname) || (lastname.length < 3)) {
      alert("Last Name must have at least 3 characters");
      return;
    }

    if (!this.emailValid.test(email)) {
      alert("Invalid email address");
      return;
    }


    if ((!password) || (password.length < 5)) {
      alert("Passwords are not the same or passwords do not match");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }


    this.setState({ busy: true });
    var self = this;

    let OauthRegistrationData = {

      "username": firstname,
      "email": email,
      "password": password,
      /*"profileImage": image*/
    };

    fetch(this.baseUrlOauth + 'app/registerverificationcode', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(OauthRegistrationData)
    })

      .then(function (response) {

        if (response.ok) {
          //alert("error from server is ok ! ");
          response.json().then(function (json) {
            self.setState({ busy: false })
            self.setState({ serverMessage: 'user saved ! check your email to confirm your account !  ' })


            AsyncStorage.setItem("RegisterState", "EmailSent", (err) => {
              self.setState({ busy: false }, () => {

                self.callRegister();


              });
            });


          }).catch(err => { alert(err); self.setState({ busy: false }) });
        } else {
          //alert("response from server is not ok ");
          self.setState({ busy: false })
          if (response.status == 400) {
            alert("email already exist Oauth");
            self.setState({ busy: false })

          }

        }
      }).catch(err => { alert(err); self.setState({ busy: false }) });;
  }




  callRegister = () => {
    //waiting message
    let { firstname, lastname, email, password, birth_date, city } = this.state;

    this.setState({ busy: true });
    var self = this;
    //alert(firstname + lastname + email + password)
    let registrationData = {
      "firstname": firstname,
      "lastname": lastname,
      "email": email,
      "password": password,
      "city": city,
      "birth_date": birth_date

    };

    fetch(this.baseUrl + 'user/createuser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(registrationData)
    })

      .then(function (response) {

        if (response.ok) {
          //alert("error from server is ok ! ");
          response.json().then(function (json) {
            // console.log(" test " + JSON.stringify(json))
            self.setState({ busy: false })
            self.setState({ serverMessage: 'user saved ! check your email to confirm your account !  ' })
            AsyncStorage.setItem("userId", "" + json.userId, (err) => {
              console.log(" test " + JSON.stringify(json.userId))
              AsyncStorage.setItem("email", email, (err) => {
                AsyncStorage.setItem("firstname", firstname, (err) => {
                  AsyncStorage.setItem("lastname", lastname, (err) => {
                    AsyncStorage.setItem("password", password, (err) => {
                      AsyncStorage.setItem("city", city, (err) => {
                        AsyncStorage.setItem("birthdate", birth_date, (err) => {
                          AsyncStorage.setItem("RegisterState", "EmailSent", (err) => {
                            self.setState({ busy: false }, () => {
                              self.props.navigation.navigate('TakeaPhoto');
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });

          }).catch(err => { alert(err); self.setState({ busy: false }) });
        } else {
          //alert("response from server is not ok ");
          self.setState({ busy: false })
          if (response.status == 400) {
            alert("email already exist ");
            self.setState({ busy: false })

          }
        }
      }).catch(err => { alert(err); self.setState({ busy: false }) });;
  }


  register = () => {

    //var password = this.makeid(20);
    //alert("registing with password " + password)
    var self = this;
    self.callRegister();
  }

  updateBirthDate = (text) => {
    var s = text;
    if (s.length === 2) {
      s = s + "/";
    }
    if (s.length === 5) {
      s = s + "/";
    }
    if (s.length > 10) {
      alert('Wrong Birth Date')
    }
    // this.setState({ birth_date: s });
    this.setState({ birth_date: '01/01/1983' });
  }

  render() {
    var { image, serverMessage, busy } = this.state;
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.body}>

            <Text style={styles.title}> Register Your Information  </Text>

            <View style={styles.buttons} >

              <View marginVertical='3%' >
                <TextInput
                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder='First Name'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ firstname: text })}
                ></TextInput>
              </View>

              <View marginVertical='3%' >
                <TextInput
                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder='Last Name'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ lastname: text })}
                ></TextInput>
              </View>

              <View marginVertical='3%' >
                <TextInput
                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder='Location'
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={(text) => this.setState({ city: text })}
                ></TextInput>

              </View>

              <View marginVertical='3%' >
                <TextInput
                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder='Email'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ email: text })}
                ></TextInput>

              </View>

              <View marginVertical='3%' >

                <DatePicker
                  style={{
                    width: "100%", borderRadius: 15,
                    height: 50,
                    backgroundColor: "#fff",
                    fontSize: 16,
                    paddingLeft: "2%"
                  }}
                  date={this.state.birth_date}
                  mode="date"
                  placeholder="BirthDate"
                  format="MM/DD/YYYY"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  maxDate={new Date()}
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 8,
                      marginLeft: 0
                    },
                    dateInput: {
                      marginTop: 10,
                      width: 350,
                      paddingRight: 40,
                      borderColor: 'white',
                      borderRadius: 15,
                      height: 50,


                      marginRight: "44%",
                    },
                    datePicker: {
                      backgroundColor: colorScheme === "dark" ? "#222" : "white"
                    }

                  }}
                  onDateChange={(date) => { this.setState({ birth_date: date }) }}
                />

                {/*  <TextInput style={styles.inputStyle}
                  placeholder='mm/dd/yyyy'
                  autoCapitalize='none'
                  value={this.state.birth_date}
                  onChangeText={this.updateBirthDate}
                  maxLength={10}
                ></TextInput> */}
              </View>

              <View marginVertical='3%' >
                <TextInput
                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder='Password'
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={(text) => this.setState({ password: text })}
                ></TextInput>

              </View>

              <View marginVertical='3%' >
                <TextInput

                  multiline={true} numberOfLines={1}
                  style={styles.inputStyle}
                  placeholder=' Confirm Password'
                  autoCapitalize='none'
                  secureTextEntry
                  onChangeText={(text) => this.setState({ confirmPassword: text })}
                ></TextInput>

              </View>

              <View marginVertical='3%' >
                <TouchableOpacity style={styles.buttonregister} onPress={this.registerOauth} disabled={busy} >
                  <Text style={{ color: "white" }}> {this.state.busy ? "Please Wait !" : "Register"}</Text>
                </TouchableOpacity>
              </View>

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
    backgroundColor: "#00ACEE"
  },
  body: {
    alignItems: "center",
    justifyContent: "center"
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


  inputStyle: {
    borderRadius: 15,
    height: 50,
    backgroundColor: "#fff",
    fontSize: 16,
    paddingLeft: 30,

  },
  buttons: {
    width: "80%",
    marginVertical: 10
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

export default RegisterPage

{/*<TextInput style={styles.inputStyle}
                                    placeholder='mm/dd/yyyy'
                                    autoCapitalize='none'
                                    value={this.state.birthdate}
                                    onChangeText={this.updateBirthDate}
                                    maxLength={10}
                    ></TextInput>*/}


/*
    baseUrl = "https://3.14.72.187/";



    emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    callRegister = () => {
      emailValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


      callRegister = () => {
        let { firstname, lastname, email, password, } = this.state;


        if ((!firstname) || (firstname.length < 3)) {
          alert("First Name least 3 characters");
          return;
        }

        if ((!lastname) || (lastname.length < 5)) {
          alert("Lase  must have at least 3 characters");
          return;
        }

        if (!this.emailValid.test(email)) {
          alert("invalid email address");
          return;
        }
        if ((!password) || (password.length < 5)) {
          alert("Password must have at least 6 characters");
          return;
        }

        if (password !== confirmPassword) {
          alert("password are not the same");
        return;
        }
      }
    }
  */