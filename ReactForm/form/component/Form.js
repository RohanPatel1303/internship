import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ToastAndroid } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { ScrollView } from "react-native";

const Form = () => {

    const [toggleCheckBox, setToggleCheckBox] = useState(true)
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true)
    const [toggleforupdates,settoggleforupdates]=useState(true)
    const [name,setname]=useState("");
   const details=()=>{
   
   }

    return (
        <ScrollView style={[styles.container]}>
            <View style={[styles.cust]}>

            </View>
            <View style={[styles.border, styles.rounded]}>
                <Text style={[styles.title]} >REGESTRATION</Text>
                <View style={[styles.inputs]}>
                    <View style={styles.inp_title_block}>

                        <TextInput placeholder="Firstname" style={[styles.input]} defaultValue={name} onChangeText={newext=>setname(newext)} ></TextInput>
                            {/* <Text>{name}</Text> */}

                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput keyboardType="default" placeholder="Lastname" style={[styles.input]}></TextInput>


                    </View>
                    <View style={styles.inp_title_block}>

                        <TextInput keyboardType="email-address" placeholder="Email" style={[styles.input]}></TextInput>



                    </View>

                    <View style={{ marginTop: 30, width: "100%", marginRight: 4, marginLeft: 4, alignItems: "center" }}>
                        <TouchableOpacity style={[styles.button]} >

                            <Text   style={{ textAlign: "center" }} onPress={details()}>Click</Text>
                        </TouchableOpacity>

                        <View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                    tintColors={{ true: '#000000', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    I Agree
                                </Text>
                            </View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleCheckBox1}
                                    onValueChange={(newValue) => setToggleCheckBox1(newValue)}
                                    tintColors={{ true: '#00ff00', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    Keep Me Logged In
                                </Text>
                            </View>
                            <View style={[styles.clickandcheck]}>
                                <CheckBox tintColor="#000000" onFillColor="#000000" style={{ marginLeft: -30 }}
                                    disabled={false}
                                    value={toggleforupdates}
                                    onValueChange={(newValue) => settoggleforupdates(newValue)}
                                    tintColors={{ true: '#ff0000', false: '#d4d4d4' }}
                                />
                                <Text style={styles.checkboxtitle}>
                                    Receive Updates!!
                                </Text>
                            </View>


                        </View>




                    </View>





                </View>
            </View>
        </ScrollView>
    )

}
const styles = StyleSheet.create({
    checkboxtitle:{
        marginTop:8,
        marginLeft:10

    },
    clickandcheck: {
        flexDirection: "row",
        justifyContent:"flex-start",
        // alignItems: "center",
        // alignSelf: "center",
        width: "100%",
        // borderWidth: 3,
    },
    cust: {
        marginBottom: 120,
    },
    focusing: {
        borderColor: "red",
        borderWidth: 6,
    },
    button: {
        backgroundColor: "red",
        width: "30%",
        height: 40,
        padding: 10,
        borderRadius: 10,
        color: "black",
        fontWeight: "bold",
        marginBottom: 30,

    },
    border: {
        // borderWidth: 3,
        flex: 1,
        // borderColor: "blue"
    },
    rounded: {
        borderRadius: 30,
        // borderColor:"black",
        // borderWidth:1
    },
    container: {
        backgroundColor: "#f4b41a",
        flex: 1,
        color: "black",
        fontWeight: "bold",

    }
    , title: {
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginBottom: 30
    }

    , inputs: {
        // alignContent:"space-around"
        justifyContent: "space-evenly",
        color: "black",
        fontWeight: "bold",

    },
    inp_title_block: {
        width: "100%",
        alignItems: "center",
        // alignContent:"space-around"
    }
    , input: {
        borderWidth: 2,
        borderColor: "00870",
        borderRadius: 10,
        marginBottom: 5,
        width: "60%",
        height: 40,
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#99eedf"

    }
})
export default Form;