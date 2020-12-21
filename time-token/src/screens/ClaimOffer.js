import React, { Component } from "react";
import { StyleSheet, View, Text, Image, Modal, TextInput, ImageBackground, AsyncStorage, TouchableOpacity } from "react-native";
import { urlbackoffice, urlexchange } from "../../utils";
import { Dear, Etoile, BackIn } from "../components/TimeTokenIcons";

//import console = require("console");

class ClaimOffer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      idPromotion: '',
      id_user: '',
      promotion: '',
      //promotion_name: '',
      //promotion_description: '',
      //company_name: '',
      //company_category: '',
      //image: '',
      //promotion_category: '',
      //company_description: '',
      //logo: '',
      cost: '',
      idPromotion: this.props.route.params,
      onClicked: false,
      Clicked: false,
      idCompany: '',
      IdKey: '',
      modalVisible: false,
      pin: '',

    };
    this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
  }
  baseUrlKey = urlexchange;

  baseUrl = urlbackoffice;

  promotionId = '';



  componentDidMount() {
    var self = this;
    self.getAllPromotionsDetailsById(self.state.idPromotion.idPromotion);
    self.getPromotionsById(self.state.idPromotion.idPromotion);
    self.getuserIdByEmail();

  }

  getAllPromotionsDetailsById = (idPromotion) => {

    var self = this;

    fetch(self.baseUrl + 'promotion/getPromotionDetailsById?id=' + idPromotion, {
      method: "GET"
    })
      //alert(promotionId)
      .then(function (response) {

        if (response.ok) {

          response.json().then(function (json) {
            //console.log("details => ", JSON.stringify(json))

            self.setState({ promotion: json })


          })
        } else {
          console.log('with response ' + response.status);
        }
      })
      .catch(error => { console.log("smting went wrong!" + error + response) })

  }

  getPromotionsById = (idPromotion) => {

    var self = this;

    fetch(self.baseUrl + 'promotion/getPromotionById?id=' + idPromotion, {
      method: "GET"
    })
      //alert(promotionId)
      .then(function (response) {

        if (response.ok) {

          response.json().then(function (json) {
            //console.log("PromotionById => ", JSON.stringify(json))
            console.log("PromotionById => cost ", JSON.stringify(json.cost))
            console.log("PromotionById => discount ", JSON.stringify(json.discount))
            console.log("PromotionById => id company ", JSON.stringify(json.id_company))
            self.getCompanyById(json.id_company)
            //self.setState({ promotion: json })


          })
        } else {
          console.log('with response ' + response.status);
        }
      })
      .catch(error => { console.log("smting went wrong!" + error + response) })

  }

  getCompanyById = (idcompany) => {

    var self = this;

    fetch(self.baseUrl + 'company/getCompanyById?id=' + idcompany, {
      method: "GET"
    })
      //alert(promotionId)
      .then(function (response) {

        if (response.ok) {

          response.json().then(function (json) {
            console.log("EmailcompanyById => ", JSON.stringify(json.email))
            self.getCompanyIdByEmail(json.email)

          })
        } else {
          console.log('with response ' + response.status);
        }
      })
      .catch(error => { console.log("smting went wrong!" + error + response) })

  }
  getCompanyIdByEmail = (email) => {
    var self = this;

    fetch(self.baseUrl + 'user/getUserIdByEmail?email=' + email, {
      method: "GET"
    })
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (json) {
            //alert(JSON.stringify(json))
            console.log("userIdCompanyKey ", json.id)
            self.setState({ idCompany: json.id })
            //self.getPublicAddressByUserId(json.id)
          }).catch(err => alert(err))

        } else {

          console.log('Network request for backoffice failed with response ' + response.status);

        }
      }).catch(err => alert(err));

  }

  getuserIdByEmail = () => {
    var self = this;

    AsyncStorage.getItem("email", (err, email) => {
      //console.log("EmailuserById => " + email)
      fetch(self.baseUrl + 'user/getUserIdByEmail?email=' + email, {
        method: "GET"
      })
        .then(function (response) {

          if (response.ok) {
            response.json().then(function (json) {
              //alert(JSON.stringify(json))
              console.log("IduserConnectKey ", json.id)
              self.setState({ IdKey: json.id })
              //self.getPublicAddressByUserId(json.id)
            }).catch(err => alert(err))

          } else {

            console.log('Network request for backoffice failed with response ' + response.status);


          }
        }).catch(err => alert(err));
    });
  }


  handlerButtonOnClick() {
    AsyncStorage.getItem("userId", (err, id) => {


      //console.log("handle "+ id + " pro "+ this.state.idPromotion.idPromotion + " cost "+this.state.promotion.cost)
      let post = {
        "id_user": id,
        "id_promotion": this.state.idPromotion.idPromotion,
        "cost": this.state.promotion.cost
      }
      var self = this;

      fetch(self.baseUrl + 'transaction/createOutTransaction', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(post)
      })


        .then(function (response) {
          // alert("then" + response);
          if (response.ok) {
            response.json().then(function (json) {

              //console.log(JSON.stringify(json))
              //  alert("response "+JSON.stringify(json))
              self.setState({
                onClicked: true
              });
              //self._send()
              //self.Modal()
              self.setModalVisible(true);

            })
          } else {
            console.log('with response ' + response.status);
          }
        })

        .catch(error => { console.log("smting went wrong!" + error + response) })
      //  alert("--catch--")
    });
  }

  _modal = () => {
    this.setState({ Clicked: true })
    //this.handlerButtonOnClick
  }



  handlerButton = () => {
    //this.setModalVisible(true);
    if (this.state.onClicked) { // clicked button style onPress={() => this.props.navigation.navigate("OrderConfirmed", { "idPromotion": this.state.idPromotion.idPromotion })}
      return <TouchableOpacity style={styles.ButtonClaimNew} onPress={() => this.props.navigation.navigate("OrderConfirmed", { "idPromotion": this.state.idPromotion.idPromotion })}>
        <Text style={{ color: "#fff", fontSize: 15 }} > Slide to Confirm </Text>
      </TouchableOpacity>
    }
    else { // default button style
      return <TouchableOpacity style={styles.ButtonClaim} onPress={() => { this.handlerButtonOnClick(); this._modal(); }}>
        <Text style={{ color: "#fff", fontSize: 15 }} > Claim offer for {this.state.promotion.cost} ₮</Text>
      </TouchableOpacity>
    }
  }
  /*
  _send() {

    const { modalVisible } = this.state;
    this.setModalVisible(!modalVisible)
  }*/
  _send() {
    const { modalVisible } = this.state;
    this.setModalVisible(!modalVisible)
    let { pin } = this.state;
    console.log(pin)
    //alert(this.state.promotion.cost - (this.state.promotion.cost * this.state.promotion.discount / 100))
    //console.log("cost" + this.state.promotion.cost)
    //console.log("discount" + this.state.promotion.discount)
    console.log(this.state.promotion.cost - (this.state.promotion.cost * this.state.promotion.discount / 100))
    var calculatedCost = this.state.promotion.cost - (this.state.promotion.cost * this.state.promotion.discount / 100)
    // AsyncStorage.getItem("userId", (err, id) => {

    let post = {
      "coin": "SAGE",
      "native": "true",
      "amount": calculatedCost,
      "from": this.state.IdKey,
      "to": this.state.idCompany,
      "pin": pin
    }

    var self = this;

    fetch(self.baseUrlKey + 'api/send', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(post)
    })


      .then(function (response) {
        // alert("then" + response);
        if (response.ok) {
          response.json().then(function (json) {

            console.log(JSON.stringify(json))
            //alert("response "+JSON.stringify(json))
            //self.setState({});

          })
        } else {
          console.log('with response ' + response.status);
        }
      })

      .catch(error => { console.log("smting went wrong!" + error + response) })
    //  alert("--catch--")
    // });
  }
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  Modal() {
    const { modalVisible } = this.state;
    return (
      <>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Private key</Text>

                <TextInput style={styles.inputStyle}
                  placeholder='Enter your pin'
                  autoCapitalize='none'
                  onChangeText={(text) => this.setState({ pin: text })}
                ></TextInput>
                <TouchableOpacity
                  style={styles.button00000}
                  onPress={() => {
                    this._send();
                  }}
                >
                  <Text style={styles.textStyle}>Send</Text>
                </TouchableOpacity>

              </View>

            </View>
          </Modal>
        </View>

      </>
    );
  }

  goBack = () => {
    this.props.navigation.navigate("InitialPage");
  }

  render() {

    const { promotion } = this.state;
    return (

      <View style={styles.container}>
        <View>

          <ImageBackground
            source={{ uri: promotion.image }} style={{ width: 420, height: 300, marginLeft: 0 }}
          >
            <View style={{ marginTop: "10%", marginLeft: "5%" }}>
              <TouchableOpacity onPress={this.goBack}>
                <BackIn></BackIn>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.view3}>

          <View style={{ flexDirection: "row", marginLeft: "8%", marginTop: "5%" }}>
            <View style={{ marginTop: "2%" }}>

              <Etoile></Etoile>
              <Text> </Text>
            </View>
            <Text style={{ color: "#8F8F8F", fontSize: 18, marginLeft: "3%", fontWeight: "bold" }}> - {this.state.promotion.company_category} - {this.state.promotion.promotion_category}</Text>
          </View>
          <Text style={{ fontSize: 28, marginTop: "3%", marginLeft: "8%", color: "black" }}> {this.state.promotion.promotion_name}!</Text>
          <Text style={{ fontSize: 14, marginTop: "3%", marginLeft: "8%" }}> {this.state.promotion.promotion_description} </Text>
          <Text style={{ fontSize: 14, marginTop: "4%", marginLeft: "8%" }}>Stay Tuned for more promotions through the TimeToken App!</Text>
          <Text style={{ fontSize: 20, marginTop: "4%", marginLeft: "8%", color: "#8F8F8F", fontWeight: "bold" }}>About</Text>


          <View style={{ flexDirection: "row", marginLeft: "8%", marginTop: "8%" }}>
            <View style={{ marginTop: "1%" }}>
              <Image
                source={{ uri: promotion.logo }} style={{ width: 50, borderRadius: 25, height: 50 }}
              />
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={{ color: "black", fontSize: 28, marginLeft: "3%", fontWeight: "bold" }}> {this.state.promotion.company_name} </Text>
              <Text style={{ color: "#8F8F8F", fontSize: 15 }}>  Member since Aug 2019 </Text>
            </View>

          </View>

          <Text style={{ fontSize: 14, marginTop: "1%", marginLeft: "8%" }}>{this.state.promotion.company_description} {/*Mario’s are a pizza restaurant founded in 1987 located by the Bay Area. In 2017, they won a Michelin star.*/}</Text>
          {this.state.Clicked === true && this.Modal()}
          {this.handlerButton()}
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
  view3: {
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    marginTop: "50%",
    //flexDirection: "row",
    position: "absolute",
    borderWidth: 0.5,
    bottom: 0,
  },
  ButtonClaim: {
    backgroundColor: "#3D4A55",
    marginTop: "8%",
    marginLeft: "5%", width: "90%", height: "12%",
    borderRadius: 15, alignItems: "center",
    justifyContent: "center"
  },
  ButtonClaimNew: {
    backgroundColor: "#64DDB5",
    marginTop: "2%",
    marginLeft: "5%", width: "90%", height: "12%",
    borderRadius: 15, alignItems: "center",
    justifyContent: "center"
  },
  centeredView: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#00ACEE",
    borderRadius: 20,
    padding: 35,
    //alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#3D4A55",
    borderRadius: 15,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: '#FFFFFF',
    fontSize: 18,
  },
  inputStyle: {
    borderRadius: 15,
    // height: "12%",
    backgroundColor: "white",
    fontSize: 18,
    paddingLeft: 30,
  },
  button00000: {
    backgroundColor: "#3D4A55",
    marginTop: "10%",
    height: "25%",
    //width: "100%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ClaimOffer

