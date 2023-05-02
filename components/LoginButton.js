import React from 'react'
import { Pressable, StyleSheet , Text} from 'react-native'
import { Button } from 'react-native-web'
import coreStyle from '../core/style'

const LoginButton = (props) => {
    return(
        <Pressable style={coreStyle.startScreenButton}  {...props}>
            <Text style={coreStyle.buttonText}>Login</Text>
        </Pressable>
    )
}
export default LoginButton
