import React from "react";
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Form = () => {
    return (

        <View style={customstyle.container}>
            <View style={customstyle.title}>
                <Text style={{ textAlign: "center" }}>Hello User</Text>
            </View>
            <View style={{ flexWrap: "wrap", flexDirection: "row" , marginBottom:16 }}>

                {/* <Text style={[customstyle.label]}>FirstName</Text> */}
                <TextInput style={[customstyle.input]} placeholder="Enter First Name Here"></TextInput>

            </View>

            <View style={{ flexWrap: "wrap", flexDirection: "row" , marginBottom:16 }}>

                {/* <Text style={[customstyle.label]}>LastName</Text> */}
                <TextInput style={[customstyle.input]} placeholder="Enter Last Name Here"></TextInput>

            </View>
            <View style={{ flexWrap: "wrap", flexDirection: "row" , marginBottom:16 }}>
                
                {/* <Text style={[customstyle.label]}>Email</Text> */}
                <TextInput style={[customstyle.input]} placeholder="Enter Email Here"></TextInput>

            </View>
            <View  style={[customstyle.buttonview]}>
               
                <Button color={"red"} style={[customstyle.buttonstyle]} title="Click" onPress={onclicked()}>

                </Button>
            </View>

        </View>
    );

}
const onclicked=()=>{

}
const customstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#01600"

    },
    title: {
        margin: 20,
        marginTop: 100,
        paddingVertical: 8,
        borderWidth: 4,
        borderRadius: 6,
        backgroundColor: "#61dafb",
        fontSize: 30,
        fontWeight: "bold"
    },

    label: {
        fontSize: 28,
        width: "40%",



    },
    input: {
        borderColor: "#ED7014",
        borderWidth: 2,
        borderRadius: 5,
        width: "54%",


    },
    buttonview:{
        
       
        width:"100%",
        alignItems:"center"
    },
    buttonstyle:{
        margin:10,
        marginLeft:10,
        marginRight:10,
        width:"50",
        Color:"red"
    }
});
export default Form;