import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Menu, Logo, Home, Notification, Profil, Transaction, Setting, Help, Search, Icon, LogoP } from "../components/TimeTokenIcons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import SelectScreen from '../components/SelectScreen'
import PhotoProfil from '../components/PhotoProfil';
import GetBalance from '../components/GetBalance';

function menu({ navigation }) {
  return (

    <View style={styles.container}>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.menu} >
          <Menu>
          </Menu>
        </TouchableOpacity>
        <View style={{ marginLeft: "70%", marginTop: 5 }}>
          <GetBalance></GetBalance>
        </ View>
      </View>

      <View style={{ alignItems: "center" }}>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View style={{ marginRight: "7%" }}>
            <Logo></Logo>
          </ View>
          <Text style={{ color: "#fff", fontSize: 22, textAlign: "center", marginTop: "3%" }}> TimeToken reward you for doing the things that you love.</Text>
          <Text style={{ color: "#fff", fontSize: 22, textAlign: "center", marginTop: "3%" }}> Share a screenshot of your app activity and we will send you TimeToken(₮)!    </Text>
        </View>
      </View>
      <SelectScreen navigation={navigation}></SelectScreen>
      <View style={styles.view3}>
        <TouchableOpacity style={{ marginLeft: "8%", marginTop: "3%" }} onPress={() => navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
        <View style={{ marginLeft: "20%", marginTop: "5%" }} ><Text style={{ color: "#74ADFF", fontSize: 25, }}>CLAIM</Text></View>
        <TouchableOpacity style={{ marginLeft: "20%", marginTop: "3%" }} onPress={() => navigation.navigate("DearsPage")} ><Icon></Icon></TouchableOpacity>
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
          onPress={() => props.navigation.navigate('DearsPage')}
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



export default class SelectScreenshot extends Component {
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
    //alignItems: "center",
  },
  view3: {
    backgroundColor: "#fff",
    width: "100%",
    height: "10%",
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
    // marginTop:"145%",
    bottom: 0,
    flexDirection: "row",
    position: "absolute",
    //   justifyContent: 'flex-end',
    borderWidth: 0.5
  },
  menu: {
    marginTop: "2%",
    marginLeft: "2%"
  },


});


