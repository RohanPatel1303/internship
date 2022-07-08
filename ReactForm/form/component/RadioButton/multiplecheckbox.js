import React from "react";
import { View, Text, ViewComponent } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useState } from "react";
const Multicheck = () => {
    const [toggle1,settoggle1]=useState(true)
const [toggle2,settoggle]=useState(true)
    const array = [
        {
            key:1,
            label: "I Agree",
            val:"toggle1",
            hel:"settoggle1"
        },
        {
            key:2,
            label: "I Disagree",
            val:"toggle2",
            hel:"settoggle2"


        },
       
       
    ];
    const list=()=>{
        useState
        return array.map((value)=>{
        var x= value.val;
        var y= value.hel;
    const [toggle1,settoggle1]=useState(true)
        
        eval("var"+"["+x+","+y+"]"+"="+useState(true));

        alert(y);

            return(

                <View>
                    <CheckBox value={x} onValueChange={(newvalue)=>toggle1(newvalue)}  disabled={false}></CheckBox>
                    <Text>{value.label}</Text>
                </View>
            )
        })
    }
    return(
        <View key="{list}">{ list()}
        <Text>
            fgyudsfh
            sadfbhsdgf
            asdashjsdaf
            vbhfvb
        </Text>
        
        </View>
        
    )
}

export default Multicheck;