import React from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
const Reg = () => {
    return (
        <View style={[styles.container]}>
            <View style={[styles.border]}>

            </View>
            <View style={[styles.border, styles.rounded]}>
                <Text style={[styles.title]} >Regester</Text>
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
                    
                    <View style={{marginTop:30, width:"100%", marginRight:4,marginLeft:4, alignItems:"center"}}>
                    <TouchableOpacity style={[styles.button]}>
                        
                        <Text style={{textAlign:"center"}}>Click</Text>
                    </TouchableOpacity>
                        
                    </View>



                </View>
            </View>

            <View style={[styles.border]}>

            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    button:{
        backgroundColor:"red",
        width:"30%",
        height:40,
        padding:10,
        borderRadius:10,
        color: "black",
        fontWeight: "bold",

    },
    border: {
        
    },
    rounded: {
        
    },
    container: {
        

    }
    , title: {
        
    }

    , inputs: {
       

    },
    inp_title_block: {
        
    }
    , input: {
        
    }
})
export default Reg;