import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Text } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import { useState } from "react";
import { useEffect } from "react";
const FormFinal = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.greeting]}>
                <Text style={[styles.title]} >Hello User</Text>
                <View style={[styles.inputs]}>
                    <View style={styles.inp_title_block}>
                    <FloatingLabelInput label={'hello'}>

                    </FloatingLabelInput>
                    <TextInput style={[styles.input]}></TextInput>
                    

                    </View>

                    <TextInput style={[styles.input]}></TextInput>
                    <TextInput style={[styles.input]}></TextInput>

                </View>
            </View>
            
        </View>
    )

}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "azure",
        flex: 1,
        color: "black"

    }
    , title: {
        textAlign: "center",
    }
    , greeting: {
        marginTop: 100,
        marginLeft:10,
        marginRight:10,
        borderColor:"red",
        borderWidth:4,
        borderRadius:10,
      
       
    }
    ,inputs:{
    
    }
    ,input:{
        borderWidth:5,
        borderColor:"black"
    }
})
export default FormFinal;