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
        color: '#FC4231',
    },
    loginErrorMessage: {
        fontSize: 18,
        color: '#FC4231',
        paddingBottom: 6
    },
    registerContainer: {
        paddingBottom: 20
    },
    errorMessageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingBottom: 10,
        flexWrap: 'wrap',
        maxWidth: '80%'
    }
})