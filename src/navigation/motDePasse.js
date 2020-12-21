import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from "react-native";
export default class stateExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userPass: "",
            isVisible: true,
            toggleMsg: "Show"
        };
    }//here we are initialising the value of state attributes.
    handleClick = () => {
        const { isVisible } = this.state;
        if (isVisible) {
            this.setState({ isVisible: false });
            this.setState({ toggleMsg: "Hide" });
        } else {
            this.setState({ isVisible: true });
            this.setState({ toggleMsg: "Show" });
        }
    };
    render() {
        return (
            <View style={stateStyles.containerStyle}>
                <TextInput
                    secureTextEntry={this.state.isVisible}
                    style={{
                        width: 411,
                        height: 53,
                        backgroundColor: "green",
                        color: "white",
                        fontSize: 21
                    }}
                />
                <TouchableOpacity onPress={this.handleClick}>
                    <Text style={{ fontSize: 21 }}>{this.state.toggleMsg}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const stateStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start"
    }
});