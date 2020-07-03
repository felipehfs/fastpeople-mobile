import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#03c1ff',
      alignItems: "center",
      paddingTop: Constants.statusBarHeight,
      paddingHorizontal: 20,
      justifyContent: "space-around"
    },
    form: {
        width: "100%"
    },
    text: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "400",
      fontFamily: "sans-serif",
    },
    input: {
        width: "100%",
        padding: 10,
        borderWidth: 1,
        borderColor: "#fff",
        marginBottom: 30,
        borderRadius: 5,
        color: "#fff"
    },
    btnLogin: {
        width: "100%",
        borderRadius: 5,
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#ff4103",
    },
    btnLoginLabel: {
        textAlign: "center",
        color: "#fff"
    },
    btnRegistry: {
        width: "100%",
        borderRadius: 5,
        padding: 15,
        backgroundColor: "#002633",
    },
    btnRegistryLabel: {
        textAlign: "center",
        color: "#fff" 
    },
    actions: {
        width: "100%"
    }
});