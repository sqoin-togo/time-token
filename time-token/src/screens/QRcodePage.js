import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help } from "../components/TimeTokenIcons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import PhotoProfil from '../components/PhotoProfil';

import GeneratorQRCode from '../components/GeneratorQRCode';
import GetBalance from '../components/GetBalance'

function menu({ navigation }) {
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
          <LogoP style={styles.logo}>
          </LogoP>

        </View>

        <GetBalance></GetBalance>

        {/* <Text style={{
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
          marginTop: "5%"
        }}> ₮ 1200 </Text> */}

      </View>


      <View style={styles.body}>
        <Text style={{ color: "#fff", fontSize: 25, marginTop: "10%" }}>Show Code to provide</Text>



        <GeneratorQRCode></GeneratorQRCode>


        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("InitialPage")}>
          <Text style={{ color: "#fff", fontSize: 15 }}> Done </Text>
        </TouchableOpacity>
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
        // onPress={() => props.navigation.navigate('ProfilePage')}
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
          label="Your  Wallet"
          onPress={() => props.navigation.navigate('QRcodePage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Setting></Setting>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Settings"
          // onPress={() => this.props.navigation.navigate('DearsPage')}
          style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Help></Help>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Get Help"
        // onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
    </DrawerContentScrollView>
  );
}



export default class extends Component {
  render() {
    const Drawer = createDrawerNavigator();
    return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
        <Drawer.Screen name="Menu" component={menu} />

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
    alignItems: "center"
  },
  button: {
    backgroundColor: "#3D4A55",
    height: "10%",
    width: "60%",
    marginTop: "10%",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",

  },
  view: {
    backgroundColor: "#fff",
    width: "65%",
    height: "45%",
    borderRadius: 15,
    marginTop: "10%"
  },
  menu: {
    marginTop: "5%"
  },
  logo: {
    marginLeft: '5%',
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  }



});


