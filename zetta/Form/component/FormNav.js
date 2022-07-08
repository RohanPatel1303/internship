import React from "react";
import { View,Text } from "react-native";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { create } from "react-test-renderer";
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
const Stack=createNativeStackNavigator()  ;
function FormNav(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default FormNav;