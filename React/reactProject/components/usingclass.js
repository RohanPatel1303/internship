import React from "react";
import { Component } from "react";
import { View ,Text, ToastAndroid} from "react-native";
class UsingClass extends Component{
    render()
    {
        return(
            
    <View style={{padding:10, backgroundColor:'red'}}>
        <Text  onPress={()=>hello()} selectionColor={'white'}>The Component Is Made By Class Component
        Press On The Component To Load A ToastAndroid</Text>
        <Text>The Code Used Is:
            
        </Text>

    </View>
        )
            
        function hello(){
            ToastAndroid.show("HELLO",ToastAndroid.SHORT)
    
        }
    }
    
}
export default UsingClass;