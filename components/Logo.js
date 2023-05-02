import React from "react";
import {Image, StyleSheet} from "react-native";

const Logo = () => {
    return (
        <Image style={
                style.logo
            }
            source={
                require('../assests/logo/citek-logo.png')
            }/>
    )
}
export default Logo
const style = StyleSheet.create({
    logo: {
        width: 300,
        height: 150,
        marginBottom: 10
    }
})
