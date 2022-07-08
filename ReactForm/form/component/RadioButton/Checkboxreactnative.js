import React from "react";
import CheckBox from "@react-native-community/checkbox";
import { View } from "react-native";
import { useState } from "react";
const Checkbox = () => {
    const [check, setcheck] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    return (
        <View style={{ width: "100%" }}>

            <CheckBox onCheckColor='#000000'
            
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}tintColors = {{ true: '#000000' , false: '#ffffff' }}
            />
            <CheckBox onCheckColor='#000000'
            
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}tintColors = {{ true: '#000000' , false: '#ffffff' }}
        />
        <CheckBox onCheckColor='#000000'
            
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}tintColors = {{ true: '#000000' , false: '#ffffff' }}
        />
            {/* <CheckBox style={{ width: "100%" }} title={"Do you Like The UI"}></CheckBox> */}
        </View>
    )
}
export default Checkbox;