import { StyleSheet, Dimensions } from 'react-native';

import { StyleTemplate } from '../../../assets/style.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const main = StyleSheet.create({
    content: {
        height: '100%',
        width: '100%',
        backgroundColor: StyleTemplate.colors.background,
        padding: 40
    },
});

export const header = StyleSheet.create({
    content: {
        height: '30%',
        width: '100%',
        justifyContent: 'center'
    },
    title: {
        fontSize: StyleTemplate.FontSize.h1,
        color: StyleTemplate.colors.primary,
        fontWeight: 'bold',
    }
});

export const content = StyleSheet.create({
    content: {
        height: 'auto',
        width: '100%',
    },
});

export const footer = StyleSheet.create({
    content: {
        height: '10%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
});
