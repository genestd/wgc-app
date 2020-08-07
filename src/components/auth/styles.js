import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    authButton: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    loginContainer: {
       paddingBottom: 20
    },
    loginInput: {
        width: '80%',
        marginBottom: 20
    },
    loginMessageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10
    },
    loginMessage: {
        fontSize: 18,
        color: 'white'
    },
    loginLink: {
        paddingLeft: 10,
        fontSize: 18,
        color: 'red',
    },
    loginErrorMessage: {
        fontSize: 18,
        color: 'red',
        paddingTop: 10
    },
    registerContainer: {
        paddingBottom: 20
    },
})