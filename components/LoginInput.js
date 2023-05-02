import React from "react";
import { TextInput, View } from "react-native";
import coreStyle from "../core/style";


const LoginInput = () => {
    return(
        <View style={coreStyle.loginInputContainer}>
            <TextInput style = {coreStyle.inputUser}
            placeholder="User"
            placeholderTextColor={'black'}/>
            <TextInput style={coreStyle.inputUser}
            placeholder="Password"
            placeholderTextColor={'black'}
            secureTextEntry={true}/>
        </View>
    )
}
export default LoginInput