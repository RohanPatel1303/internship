import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
  const Stack = createNativeStackNavigator();
  
  function MYApp() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default MYApp;