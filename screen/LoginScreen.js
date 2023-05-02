import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native'
import Background from '../components/Background';
import Logo from '../components/Logo';
import Button from '../components/Button';
import login from '../services/WSLogin';
import coreStyle from '../core/style';
const LoginScreen  = ({navigation}) => {
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    
    return (
        <Background>
            <Logo/>
            <TextInput style={
                    style.inputUser
                }
                placeholder='User'
                placeholderTextColor={'black'}
                onChangeText={setUser}/>
            <TextInput style={
                    style.inputUser
                }
                placeholder='Password'
                placeholderTextColor={'black'}
                secureTextEntry={true}
                onChangeText={setPass}/>
            <View style={coreStyle.rowContainer}>
                <Button buttonLabel={'Login'}
                    onPress={
                        () => login(user,pass,navigation)
                    }/>
                <Button buttonLabel={'Thoát'}/>
            </View>

        </Background>
    )
}
export default LoginScreen
const style = StyleSheet.create({
    inputUser: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        height: 50,
        width: 300,
        marginBottom: 15,
        borderRadius: 4
    }
})
