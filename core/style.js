import {StyleSheet} from "react-native";
import {theme} from "./theme";

const coreStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: theme.backgroundColor.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    startScreenButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#00586f',
        marginTop: 10,
        width: 300,
        height: 50
    },
    loginScreenButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#00586f',
        width: 100,
        height: 50,
        margin:10,
    },
    buttonText: {
        color: 'white'
    },
    inputUser: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 15,
        padding: 5,
        height: 40,
        width: 250,
        borderRadius: 4
    },
    loginInputContainer: {
        width: '100%',
        marginVertical: 12
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent:'center'
    },
    columnContainer: {
        flexDirection:'column',
        justifyContent:'center',
        alignContent: 'center',
        width: '100%',
    }
})

export default coreStyle
