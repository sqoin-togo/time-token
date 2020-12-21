/*This is an Example to Load Different CSS Style in React Native on View Component */
import React, { Component } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isOldStyle: true,
            pessed: 'hey ??'
        };
    }
    ChangeNewStyle = () => {
        this.setState({
            isOldStyle: false,
            pessed: 'ok ?'
        });
    };
    render() {
        return (
            <View style={styles.MainContainer}>

                <TouchableOpacity
                    onPress={this.ChangeNewStyle}
                    style={this.state.isOldStyle === true ? styles.stylOldR : styles.styleNewN}
                >
                    <Text>
                        {this.state.pessed}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    MainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        margin: 10,
    },

    stylOld: {
        fontSize: 30,
        color: 'red',
        //backgroundColor: "red"
    },

    styleNew: {
        fontSize: 60,
        color: '#fff',
        //backgroundColor: "#fff"
    },
    stylOldR: {
        fontSize: 30,
        //color: 'red',
        backgroundColor: "#fff"
    },

    styleNewN: {
        fontSize: 60,
        //color: 'red',
        backgroundColor: "red"
    },
});
/*
import React from "react";
import { TouchableHighlight, Text, Alert, StyleSheet } from "react-native";

export default class TouchableButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            onClicked: false
        };
        this.handlerButtonOnClick = this.handlerButtonOnClick.bind(this);
    }
    handlerButtonOnClick(){
        this.setState({
           onClicked: true
        });
      }
      render() {
        var _style;
        if (this.state.onClicked){ // clicked button style
          _style = {
              color: "red"
            }
        }
        else{ // default button style
          _style = {
              color: "blue"
            }
        }
        return (
            <View></View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5
    }
});
*/