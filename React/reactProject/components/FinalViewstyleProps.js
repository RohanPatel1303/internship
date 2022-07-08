import React from "react";
import { View,Text } from "react-native";
const FinalViewstyleProps=()=>{
    return(
        <View>
            <View style={{borderColor:"red",borderWidth:3,borderTopColor:"skyblue",borderTopStartRadius:10}}>
                <Text>The Box With:
                    1)borderColor:"red"
                    2)borderWidth:3
                    3)borderTopColor:"skyblue"
                    4)borderTopStartRadius:10
                </Text>
            </View>
        </View>

    )
};
export default FinalViewstyleProps;