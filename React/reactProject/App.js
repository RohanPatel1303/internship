import React from "react";
import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import UsingClass from "./components/usingclass";
import Viewattributes from "./components/viewattribute";
import Fontstyles from "./components/fontstyles";
class App extends Component {
    render() {

        return (
            <View>

                <Viewattributes ></Viewattributes>
                <UsingClass></UsingClass>
                <Fontstyles></Fontstyles>
            </View>
        );
    }
}

export default App;