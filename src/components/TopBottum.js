import React from 'react'
import { StyleSheet, Text, Button, View, TouchableOpacity } from 'react-native'
//import BottomSheet from 'reanimated-bottom-sheet'
import BottomSheet from "react-native-bottomsheet-reanimated";
import { Search, Icon, LogoP } from "./TimeTokenIcons";

export default class TopBottum extends React.Component {
    /* renderInner = () => (
      <React.Fragment>
        {[...Array(60)].map((e, i) => (
          <View
            key={i}
            style={{ height: 40, backgroundColor: `#${i % 10}88424` }}
          >
            <Text>computed</Text>
          </View>
        ))}
      </React.Fragment>
    ) 

    renderHeader = () => (
        <View
            style={{
                height: 40,
                backgroundColor: 'red',
            }}
        >
            <Button onPress={() => this.bs.current.snapTo(3)} title="1" />
            <Text>123</Text>
        </View>
    )

    bs = React.createRef()
*/
    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                <BottomSheet
                    bottomSheerColor="#FFFFFF"
                    ref="BottomSheet"
                    initialPosition={"10%"}  //200, 300
                    snapPoints={["10%", "22%"]}
                    isBackDrop={true}
                    isBackDropDismisByPress={true}
                    isRoundBorderWithTipHeader={true}
                    // backDropColor="red"
                    // isModal
                    containerStyle={{ backgroundColor: "#fff" }}
                    // tipStyle={{backgroundColor:"red"}}
                    // headerStyle={{backgroundColor:"red"}}
                    // bodyStyle={{backgroundColor:"red",flex:1}}

                    body={
                        <View style={styles.view3}>
                            <TouchableOpacity style={{ marginLeft: "7%", marginTop: "3%" }} onPress={() => navigation.navigate("InitialPage")}><Search></Search></TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: "20%", marginTop: "0%" }} onPress={() => navigation.navigate("SelectScreenshot")}><LogoP></LogoP></TouchableOpacity>
                            <TouchableOpacity style={{ marginLeft: "20%", marginTop: "3%" }} onPress={() => navigation.navigate("DearsPage")}><Icon></Icon></TouchableOpacity>
                        </View>
                    }
                />
            </View>)
    }
}



const styles = StyleSheet.create({
    container: {
        height: "1%",
        width: "100%",
        backgroundColor: '#F5FCFF',
    },
    view3: {
        //backgroundColor: "#fff",
        //width: "100%",
        height: "1%",
        //borderTopEndRadius: 50,
        //borderTopStartRadius: 50,
        // marginTop:"145%",
        //bottom: 5,
        flexDirection: "row",
        position: "absolute",
        //   justifyContent: 'flex-end',
        //borderWidth: 0.5


    },
})

{/* <View style={styles.container}>
                <BottomSheet
                    ref={this.bs}
                    snapPoints={[70, 40, '6%', 0]}
                    //renderContent={this.renderInner}
                    renderHeader={this.renderHeader}
                />
                <View style={{ flexDirection: "row", height: "25%" }}>
                    <Button onPress={() => this.bs.current.snapTo(0)} title="0" />

                </View>
            </View> */}




