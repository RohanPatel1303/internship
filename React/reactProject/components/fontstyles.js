import React from "react";
import { View, Text, ToastAndroid } from "react-native";


function Fontstyles(){
    {
        return(
                <View style={{borderColor:'red',borderWidth:4, borderRadius:3}}>
                        <Text style={{fontFamily:"serif"}}>Serif Text

                        </Text>
                        <Text style={{fontFamily:"monospace"}}>Monospace</Text>
                </View>
            )

    }
   
}
export default Fontstyles;