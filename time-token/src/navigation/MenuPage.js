import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, AsyncStorage, Image, Settings } from "react-native";
import { Home, Notification, Profil, Transaction, Setting, Help, LogoP } from "../components/TimeTokenIcons"
class Menupage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            photo: '',
            firstname: '',
            lastname: ''
        };
    }


    /*componentDidMount() {
    
      var self = this;
    
      AsyncStorage.getItem("photo", (err, photo) => {
        AsyncStorage.getItem("firstname", (err, firstname) => {
          AsyncStorage.getItem("lastname", (err, lastname) => {
            self.setState({ photo, firstname, lastname });
    
          });
        });
      });
    }*/
    render() {
        var { photo } = this.state;
        return (


            <View style={styles.container}>
                {/*<TouchableOpacity onPress={() => { this.props.navigation.navigate("Menu") }}>

        </TouchableOpacity>*/}
                <View style={{ alignItems: "center", marginTop: "5%", borderRadius: 15 }}>
                    <Image
                        source={{ uri: `data:image/jpeg;base64,${photo}` }}
                        resizeMode="cover"
                        style={styles.image}
                    ></Image>
                    <Text style={{ fontSize: 20, color: "#fff", marginTop: 10, textAlign: "center" }}>{this.state.firstname} {this.state.lastname}</Text>
                </View>



                <View style={styles.body}>




                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', alignItems: "center" }}>

                        <Home></Home>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff" }} onPress={() => this.props.navigation.navigate('InitialPage')}> Home </Text>

                    </TouchableOpacity>





                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: "3%" }}>
                        <Notification></Notification>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff" }} onPress={() => this.props.navigation.navigate('')}> Notifications </Text>
                    </TouchableOpacity>



                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: "3%" }}>

                        <Profil></Profil>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff" }} onPress={() => this.props.navigation.navigate('ProfilePage')}> Your Profile </Text>

                    </TouchableOpacity>




                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: "3%" }}>
                        <Transaction></Transaction>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff" }} onPress={() => this.props.navigation.navigate('DearsPage')}> Your  Transactions </Text>
                    </TouchableOpacity>


                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: "3%" }}>

                        <Setting></Setting>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff"}} onPress={() => this.props.navigation.navigate('')}> Settings </Text>

                    </TouchableOpacity>



                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: "3%", alignItems: "center" }}>
                        <Help></Help>
                        <Text style={{ paddingLeft: 10, fontSize: 20, color: "#fff", marginTop: -5, }} onPress={() => this.props.navigation.navigate('')}> Get Help </Text>
                    </TouchableOpacity>



                </View>
                <View style={{ width: "20%", height: "20%", marginTop: "28%", alignItems: "center" }}>
                    <LogoP></LogoP>
                </View>
            </View >

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#3D4A55",
        alignItems: "center"
    },
    body: {
        marginTop: "10%",
        alignItems: "flex-start",
    },
    image: {
        width: 150,
        height: 150,
        backgroundColor: "#fff",
        borderRadius: 500,
        //justifyContent:"center"
    }

});

export default Menupage

