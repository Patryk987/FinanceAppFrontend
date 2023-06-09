import { Platform, NativeModules, StyleSheet, Dimensions } from 'react-native';
import { StyleTemplate } from '../../../assets/style.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : NativeModules.StatusBarManager.HEIGHT;

const paddingNum = 20;

export const main = StyleSheet.create({
    content: {
        height: '100%',
        width: '100%',
        marginTop: STATUSBAR_HEIGHT,
    },
    header: {
        padding: paddingNum,
        width: '100%',
    },
    h1: {
        fontSize: StyleTemplate.FontSize.h1,
        fontWeight: 'bold',
        color: StyleTemplate.colors.primary
    },
});

export const balance = StyleSheet.create({
    content: {
        width: '100%',
        height: 200,
        marginBottom: 10,
    },
});

export const scan = StyleSheet.create({
    content: {
        width: '100%',
        marginBottom: 10,
        padding: paddingNum
    },
    box: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: StyleTemplate.colors.secondary,
        flexDirection: 'row',
        padding: 15,
    },
    icon: {
        width: '15%',
    },
    textBox: {
        width: '80%',
        justifyContent: 'center'
    },
    text: {
        fontWeight: 'bold',
        fontSize: StyleTemplate.FontSize.h2,
        color: StyleTemplate.colors.background

    },
    next: {
        width: '5%',
        justifyContent: 'center'
    },
});
