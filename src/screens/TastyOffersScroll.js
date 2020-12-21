import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { New, Dear, Search, Icon, Menu, LogoP, Home, Notification, Profil, Transaction, Setting, Help } from "../components/TimeTokenIcons";
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import GetBalance from '../components/GetBalance';

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

                <View style={{ marginLeft: "0%", marginTop: 0 }}>
                    <GetBalance></GetBalance>
                </ View>

            </View>
            <View style={styles.inputStyle}>

                <TextInput
                    placeholder='Search for ...'
                    autoCapitalize='none'
                    onChangeText={(text) => this.setState({ search: text })}
                ></TextInput>

            </View>

            <View >

                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "9%" }}>News</Text>
                <View style={{ alignItems: "center" }}>
                    <New></New>
                </View>
            </View>



            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}> Latest Deals</Text>


            <View style={{ flexDirection: "row", height: "22%" }}>
                <TouchableOpacity style={styles.view} onPress={() => navigation.navigate("ClaimOffer")}>
                    <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                        <Dear></Dear>
                        <Text style={{ marginLeft: "5%", marginTop: "5%", fontSize: 20, fontWeight: "bold", }}>Mario's</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.view}>

                </TouchableOpacity>
            </View>

            <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginLeft: "7%" }}> Tasty Offers</Text>

            <View style={{ flexDirection: "row", height: "10%" }}>
                <TouchableOpacity style={styles.view1}>

                </TouchableOpacity>

                <TouchableOpacity style={styles.view1}>

                </TouchableOpacity>
            </View>

            <View style={styles.view3}>
                <TouchableOpacity style={{ marginLeft: "7%", marginTop: "3%" }} onPress={() => navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "0%" }} onPress={() => navigation.navigate("SelectScreenshot")}><LogoP></LogoP></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "3%" }} onPress={() => navigation.navigate("DearsPage")}><Icon></Icon></TouchableOpacity>
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
                    labelStyle={{ color: 'white' }}
                    label="Home"
                    onPress={() => props.navigation.navigate('InitialPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />


            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>

                <Notification></Notification>

                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Notifications"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>


            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Profil></Profil>
                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Your Profile"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Transaction></Transaction>
                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Your  Transactions"
                    onPress={() => props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Setting></Setting>
                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Settings"
                // onPress={() => this.props.navigation.navigate('DearsPage')}
                //style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-start", marginLeft: "30%" }}>
                <Help></Help>
                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Get Help"
                // onPress={() => this.props.navigation.navigate('DearsPage')}
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
        backgroundColor: "#00ACEE"
    },
    view: {
        width: "40%",
        //height:"350%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "5%",
        marginTop: "1%"
    },
    inputStyle: {
        borderRadius: 15,
        //height: "60%",
        paddingLeft: "5%",
        backgroundColor: "#fff",
        fontSize: 16,
        // paddingLeft: 30,
        width: "95%",
        marginLeft: "2%",
        marginTop: "3%"
    },
    view1: {
        width: "40%",
        //height:"100%",
        borderRadius: 15,
        backgroundColor: "#fff",
        marginLeft: "5%",
        marginTop: "1%"
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
    logo: {
        marginLeft: "10%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }
});




