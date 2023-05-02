import React from "react";
import { Pressable, Text } from "react-native";
import {useNetInfo} from "@react-native-community/netinfo";

import coreStyle from "../core/style";
const CheckConnectButton = (props) => {
    const netInfo = useNetInfo();
    return(
        <Pressable style={coreStyle.startScreenButton} onPress={() => {checkConnection(netInfo)}} {...props}>
            <Text style={coreStyle.buttonText}>Check Connect</Text>
        </Pressable>
    )
}
export default CheckConnectButton

function checkConnection (netInfo)  {
    console.log("Checking connection ...");
    if (netInfo.isConnected == false) {
        console.log('No internet connection');
        alert('Không có kết nối Internet. Vui lòng kiểm tra lại đường truyền');
    } else{
        console.log('Internet connection OK');
        alert('Có kết nối đến Internet')
    }
}