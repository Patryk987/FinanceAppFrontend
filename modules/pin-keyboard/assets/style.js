import { StyleSheet, Dimensions } from 'react-native';

import { StyleTemplate } from '../../../assets/style.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    keyboard: {
        width: screenWidth,
        height: screenHeight,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#E0E0E0',
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    emptyButton: {
        width: 75,
        height: 75,
        margin: 10,
    },
    backButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 75,
        height: 75,
        borderRadius: 10,
        margin: 10,
        backgroundColor: '#082032',
    },
    backButtonText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FFF',
    },
});