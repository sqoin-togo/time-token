import * as React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
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
                    <LogoP style={styles.logo}>
                    </LogoP>

                </View>

                <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", marginTop: "5%" }}> ₮ 1200 </Text>

            </View>
            <View style={{ height: "10%" }}>

                <TextInput style={styles.inputStyle}
                    placeholder='Search'
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
                <TouchableOpacity style={styles.view} onPress={() => this.props.navigation.navigate("ClaimOffer")}>
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
                <TouchableOpacity style={{ marginLeft: "8%", marginTop: "3%" }} onPress={() => this.props.navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "5%" }} onPress={() => this.props.navigation.navigate("SelectScreenshot")}><Text style={{ color: "#74ADFF", fontSize: 25, }}>CLAIM</Text></TouchableOpacity>
                <TouchableOpacity style={{ marginLeft: "20%", marginTop: "3%" }} onPress={() => this.props.navigation.navigate("DearsPage")}><Icon></Icon></TouchableOpacity>
            </View>

        </View>


    );
}



function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: '#2699FB', color: 'white' }}>
            <DrawerItemList {...props} />

            <DrawerItem
                labelStyle={{ color: 'white' }}
                label="Home"
                onPress={() => props.navigation.navigate('InitialPage')}
                style={{ backgroundColor: '#2699FB' }}
            />

            <View style={{ flexDirection: "row" }}>

                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Notifications"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                    style={{ backgroundColor: '#2699FB' }}
                />
            </View>


            <View style={{ marginTop: "0%" }}>
                <DrawerItem
                    labelStyle={{ color: 'white' }}
                    label="Your Profile"
                    onPress={() => props.navigation.navigate('ProfilePage')}
                    style={{ backgroundColor: '#2699FB' }}
                />
            </View>
            <DrawerItem
                labelStyle={{ color: 'white' }}
                label="Your  Transactions"
                onPress={() => this.props.navigation.navigate('DearsPage')}
                style={{ backgroundColor: '#2699FB' }}
            />
            <DrawerItem
                labelStyle={{ color: 'white' }}
                label="Settings"
                onPress={() => this.props.navigation.navigate('DearsPage')}
                style={{ backgroundColor: '#2699FB' }}
            />
            <DrawerItem
                labelStyle={{ color: 'white' }}
                label="Get Help"
                onPress={() => this.props.navigation.navigate('DearsPage')}
                style={{ backgroundColor: '#2699FB' }}
            />
        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />} >
            <Drawer.Screen name="Menu" component={menu} />

        </Drawer.Navigator>
    );
}


const styles = StyleSheet.create({
    body: {
        width: "100%",
        height: "100%"

    },
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
        height: "60%",
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
        marginTop: "5%"
    },
    logo: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center"
    }



});
