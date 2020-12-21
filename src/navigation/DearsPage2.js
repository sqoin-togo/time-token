import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { New, Dear, Search, Icon, Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help } from "../components/TimeTokenIcons";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


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
          <LogoP>
          </LogoP>

        </View>

      </View>
      <View style={styles.body}>


        <Text style={{ fontSize: 50, color: "#fff", textAlign: "center", fontWeight: "bold", marginTop: "7%" }}> ₮ 1200</Text>
        <Text style={{ fontSize: 20, color: "#fff", marginTop: 10, textAlign: "center" }}>{/* {this.state.firstname} {this.state.lastname} */}</Text>
      </View>

      <Text style={{ fontSize: 25, color: "#fff", textAlign: "left", fontWeight: "bold", marginTop: "7%", marginLeft: "5%", }}>Your Deals</Text>



      <View style={styles.view}>
        <Dear></Dear>
        <Text style={{ fontSize: 20, color: "#3D4A55", fontWeight: "bold", marginLeft: "5%" }}> 50% off Pizza !</Text>

      </View>

      <Text style={{ fontSize: 25, color: "#fff", textAlign: "left", fontWeight: "bold", marginTop: "20%", marginLeft: "5%", }}>Your History</Text>


      <View style={styles.view2}>

        <Text style={{ fontSize: 20, color: "#3D4A55", fontWeight: "bold", marginLeft: "8%", }}> Date</Text>
        <Text style={{ fontSize: 20, color: "#3D4A55", fontWeight: "bold", marginLeft: "10%", }}> Activity</Text>
        <Text style={{ fontSize: 20, color: "#3D4A55", fontWeight: "bold", marginLeft: "23%", }}> Cost</Text>

      </View>

    </View>


  );
}



function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ backgroundColor: '#3D4A55', color: 'white' }}>

      <View style={{
        alignItems: "center",
        justifyContent: "center",
        marginTop: "5%"
      }}>
        <View style={{
          width: 150,
          height: 150,
          backgroundColor: "#fff",
          borderRadius: 500,
          alignItems: "center", justifyContent: "center"
          //justifyContent:"center"
        }}></View>
        {/*  <Image
                        source={{ uri: `data:image/jpeg;base64,${photo}` }}
                        resizeMode="cover"
                        style={styles.image}
                    ></Image> */}
        <Text style={{ fontSize: 20, color: "#fff", marginTop: 10, textAlign: "center" }}>{/* {this.state.firstname} {this.state.lastname} */}</Text>
      </View>

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
          onPress={() => props.navigation.navigate('ProfilePage')}
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
          onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Setting></Setting>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Settings"
          onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
        <Help></Help>
        <DrawerItem
          labelStyle={{ color: 'white', fontWeight: 'bold' }}
          label="Get Help"
          onPress={() => this.props.navigation.navigate('DearsPage')}
        //style={{ backgroundColor: '#2699FB' }}
        />
      </View>
      <View style={{ width: "20%", height: "20%", marginTop: "20%", alignItems: "center", justifyContent: "flex-start", marginLeft: "38%" }}>
        <LogoP></LogoP>
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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginRight: "40%"
  }



});


