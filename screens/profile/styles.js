import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#000"
    },
    header: {
        padding: 15,
        marginBottom: 14,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headerText: {
        fontSize: 20,
        color: "#fff"
    },
    onlineLabel: {
        color: "#fff"
    },
    form: {
        flex: 1,
        padding: 15
    },
    inputGroupOnline: {
        flexDirection: "row",
        alignItems: "center"
    },
    btnText: {
        color: "#fff",
        textAlign: "center"
    },
    btn: {
        padding: 10,
        backgroundColor: "#ff4103",
    },
    avatarInput: {
        padding: 7,
        borderBottomColor: "#fff",
        borderBottomWidth: 1,
        marginBottom: 20,
        color: "#fff"
    },
    footer: {
        padding: 15
    }
});
