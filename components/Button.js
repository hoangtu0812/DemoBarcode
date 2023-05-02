import React from "react";
import { Pressable, Text } from "react-native";
import coreStyle from "../core/style";

const Button = ({buttonLabel, ...props}) => {
    return(
        <Pressable style={coreStyle.loginScreenButton} {...props}>
            <Text style={coreStyle.buttonText}>{buttonLabel}</Text>
        </Pressable>
    )
}
export default Button