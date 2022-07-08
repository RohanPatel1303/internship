import { View } from "react-native";
import React from "react";
import { Text } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";
import NavigationContainer from "@react-navigation/native/lib/typescript/src/NavigationContainer";
const Form = () => {
    return (<NavigationContainer>
        <View style={[styles.container]}>
            <View style={[styles.border]}>

            </View>
            <View style={[styles.border,styles.rounded]}>
                <Text style={[styles.title]} >Hello User</Text>
                <View style={[styles.inputs]}>
                    <View style={styles.inp_title_block}>

                        <TextInput placeholder="Firstname" style={[styles.input]}></TextInput>


                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput placeholder="Lastname" style={[styles.input]}></TextInput>


                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput placeholder="Email" style={[styles.input]}></TextInput>


                    </View>
                    <FloatingLabelInput label="email">

                    </FloatingLabelInput>


                </View>
            </View>

            <View style={[styles.border]}>

            </View>
        </View>

    </NavigationContainer>
        
    )
}
const styles = StyleSheet.create({
    border: {
        // borderWidth: 3,
        flex: 1,
        // borderColor: "blue"
    },
    rounded:{
        borderRadius:30,
        borderColor:"black",
        flexShrink:"",
        borderWidth:1
    },
    container: {
        backgroundColor: "azure",
        flex: 1,
        color: "black"

    }
    , title: {
        textAlign: "center",
    }
   
    , inputs: {
        // alignContent:"space-around"
        justifyContent:"space-evenly"

    },
    inp_title_block: {
        width: "100%",
        alignItems: "center"
        // alignContent:"space-around"
    }
    , input: {
        borderWidth: 2,
        borderColor: "lightpink",
        borderRadius:10,
        marginBottom: 5,
        width: "60%",
        height: 40
    }
})
export default Form;