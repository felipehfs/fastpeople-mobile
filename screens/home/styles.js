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
    grid: {
        marginTop: 10,
        flexDirection: "row",
    }, 
    card: {
        borderRadius: 10,
        backgroundColor: "orange",
        padding: 7,
        flex: 1,
        height: 80,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 8,
    },
    cardDanger: {
        backgroundColor: "red"
    },
    cardPrimary: {
        backgroundColor: '#03c1ff'
    },
    textCardFriend: {
        color: "#fff"
    },
    textCardProfile: {
        color: "#fff"
    },
    textCardPeople: {
        color: "#fff"
    },
    categoriesMain: {
        marginTop: 15,
        padding: 10,
        borderRadius: 20 
    },
    categoriesTitle: {
        color: "#fff",
        fontSize: 17 
    },
    categories: {
        flex: 1
    }
});
