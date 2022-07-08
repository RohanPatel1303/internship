import React from "react";
import { Button, Text,TextInput,View } from "react-native";
export default  Styleattr =()=>{
    return(
        <View style={{flex:1}}>
            <View style={{flex:1,borderStyle:"dashed",borderTopColor:"rgba(100,0,0,.5)",borderBottomRightRadius:10, borderWidth:5,borderColor:"black"}}>

            </View>
            <View style={{flex:1, borderWidth:1,borderColor:"red"}}>
              <Text>hello This is not selectable text</Text>
              <Text selectable>hello This is selectable text</Text>

            </View>
            <View style={{flex:1, borderWidth:1,borderColor:"skyblue"}}>

            </View>
            <View style={{flex:1, borderWidth:1,borderColor:"coral"}}>

            </View>
        </View>
        
    )
    const Preview=({})
};