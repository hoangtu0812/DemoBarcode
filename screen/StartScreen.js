import React from 'react'
import Logo from '../components/Logo'
import LoginButton from '../components/LoginButton'
import CheckConnectButton from '../components/CheckConnectButton'
import Background from '../components/Background'
import {View} from 'react-native'
import coreStyle from '../core/style'

const StartScreen = ({navigation}) => {

    return (
        <Background>
            <Logo/>
            <View style={coreStyle.columnContainer}>
                <LoginButton onPress={
                    () => navigation.navigate('LoginScreen')
                }/>
                <CheckConnectButton/>
            </View>
        </Background>
    )
}
export default StartScreen
