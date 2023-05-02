import React from "react";
import { SafeAreaView, KeyboardAvoidingView } from "react-native";
import coreStyle from "../core/style";

const Background = ({ children }) => {
    return(
        <SafeAreaView style = {coreStyle.background} >
            <KeyboardAvoidingView >
                {children}
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
export default Background
