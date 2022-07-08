import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View,Text } from "react-native";
import Form from "../Form";
function Home({navigation}){
    return(
        <View>
            <Text>This is Home Screen</Text>
        </View>
    )

}
function Details({navigation}){
    return(
        <View>
            <Text>Hello This Is Details</Text>
        </View>
    )
}
const Stack=createNativeStackNavigator();
function MyApp(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
                <Stack.Screen name="Details" component={Details}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default MyApp;