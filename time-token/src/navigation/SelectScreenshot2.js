import React, { Component } from "react";
import { StyleSheet, View, Text, Image, AsyncStorage, TouchableOpacity } from "react-native";
//import Menu from "../components/TimeTokenIcons"
import {Logo,Search,Icon} from "../components/TimeTokenIcons"

class SelectScreenshot2 extends Component {
    render() {
        return (
          <View style={styles.container}>
          {/*<Menu></Menu>*/}

             
          <View style={{alignItems:"center",justifyContent:"center"}}>
          <Logo></Logo>
        <Text style={{color:"#fff", fontSize:22 , textAlign:"center",marginTop:"10%" }}> TimeToken reward you for doing the things that you love.</Text>
        <Text style={{color:"#fff", fontSize:22 ,textAlign:"center",marginTop:"3%"  }}> Share a screenshot of your app activity and we will send you TimeToken(₮)!    </Text>
        </View>


        <TouchableOpacity style={{marginTop:"15%", backgroundColor:"#fff", width:"90%", height:"10%",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"#3D4A55", fontSize:15  }}> Select Screenshot</Text>
            </TouchableOpacity>


        <TouchableOpacity style={{marginTop:"5%", backgroundColor:"#3D4A55", width:"90%", height:"10%",borderRadius:15,alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"#fff", fontSize:15  }}> Upload Activity</Text>
            </TouchableOpacity>



            <View style={styles.view3}>
    <TouchableOpacity style={{marginLeft:"8%",marginTop:"3%"}} onPress={() =>this.props.navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
    <TouchableOpacity style={{marginLeft:"20%",marginTop:"5%"}} onPress={() =>this.props.navigation.navigate("SelectScreenshot")}><Text style={{color:"#74ADFF",fontSize: 25, }}>CLAIM</Text></TouchableOpacity>
    <TouchableOpacity style={{marginLeft:"20%",marginTop:"3%"}} onPress={() =>this.props.navigation.navigate("DearsPage")}><Icon></Icon></TouchableOpacity>
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
  view3:{
    backgroundColor:"#fff",
    width:"100%",
    height:"10%",  
   borderTopEndRadius:50,
   borderTopStartRadius:50,
   marginTop:"145%",
   flexDirection: "row",
   position:"absolute",
   borderWidth:0.5,
   bottom:0,

 
  },
});
export default SelectScreenshot2