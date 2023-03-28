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
        backgroundColor: StyleTemplate.colors.background,
        marginTop: STATUSBAR_HEIGHT,
    }
});
