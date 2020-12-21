import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { New, Dear, Search, Icon, Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help } from "../components/TimeTokenIcons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import ProfileDeals from '../components/ProfileDeals';
import PhotoProfil from '../components/PhotoProfil';


function menu({ navigation, route }) {
  //alert("Menu" + navigation.id)
  const { idPromotion } = route.params;
  return (

    <View style={styles.container}>

      <View style={{
        justifyContent: "space-between",
        flexDirection: "row",
        marginLeft: 10,
        marginRight: 10,
        marginTop: "2%",
        backgroundColor: "#00ACEE"

      }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
          <Menu>
          </Menu>
        </TouchableOpacity>

        <View style={styles.logo}>
          <LogoP>
          </LogoP>

        </View>

      </View>
      <View>
        <ProfileDeals navigation={navigation} id={idPromotion}></ProfileDeals>

      </View>

      <View style={styles.view3}>
        <TouchableOpacity style={{ marginLeft: "8%", marginTop: "3%" }} onPress={() => navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: "20%", marginTop: "5%" }} onPress={() => navigation.navigate("SelectScreenshot")}><Text style={{ color: "#74ADFF", fontSize: 25, }}>CLAIM</Text></TouchableOpacity>
        <View style={{ marginLeft: "20%", marginTop: "3%" }} ><Icon></Icon></View>
      </View>

    </View>


  );
}



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#3D4A55', color: 'white' }}>

      <PhotoProfil></PhotoProfil>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

        <Home></Home>

        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Home"
          onPress={() => props.navigation.navigate('InitialPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />


      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

        <Notification></Notification>

        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Notifications"
        //onPress={() => props.navigation.navigate('ProfilePage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>


      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Profil></Profil>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Your Profile"
          onPress={() => props.navigation.navigate('ProfilePage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>

      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Transaction></Transaction>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Your  Transactions"
        //onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Setting></Setting>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Settings"
        //onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Help></Help>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Get Help"
        //onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ width: "20%", height: "20%", marginTop: "20%", alignItems: "center", justifyContent: "flex-start", marginLeft: "38%" }}>
        <LogoP></LogoP>
      </View>
    </DrawerContentScrollView>
  );
}



export default class DearsPage extends Component {


  constructor(props) {
    super(props);
    this.state = {
      idPromotion: (this.props.route.params) ? this.props.route.params : "",
      //idPromotion: this.props.route.params,
    };


  }

  render() {
    //alert("DearsPidPromotion " + this.state.idPromotion.idPromotion)
    //this.setState({ photo: this.state.idPromotion.idPromotion });
    const Drawer = createDrawerNavigator(

    );
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="menu" component={menu} initialParams={{ idPromotion: this.state.idPromotion.idPromotion }} />

      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00ACEE",


  },
  body: {
    alignItems: "center",
    //position:"relative"
  },
  view: {
    width: "90%",
    height: "8%",
    borderRadius: 12,
    backgroundColor: "#fff",
    marginLeft: "5%",
    flexDirection: "row",
    marginTop: "3%",
    alignItems: "center",
    position: "relative",

  },
  view2: {
    backgroundColor: "#fff",
    width: "90%",
    height: "33%",
    marginLeft: "5%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    marginTop: "3%",
    flexDirection: "row",

  },
  view3: {
    backgroundColor: "#fff",
    width: "100%",
    height: "10%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    marginTop: "145%",
    flexDirection: "row",
    position: "absolute",
    borderWidth: 0.5,
    bottom: 0,


  },
  menu: {
    marginTop: "5%"
  },
  logo: {
    marginRight: "35%"
    //justifyContent: "center",
    //alignItems: "center",
    //alignContent: "center"
  }



});


