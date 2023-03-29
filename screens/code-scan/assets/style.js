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

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // backgroundColor: 'white'
    },
    camera: {
        flex: 1,

    },
    maskContainer: {
        width: '100%',
        height: '100%'
    },
    mask: {
        flex: 1,
        height: (screenHeight - 200) / 2,
        width: '100%',
        backgroundColor: 'rgba(8, 32, 50, 0.9)',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    maskInner: {
        height: '100%',
        width: (screenWidth - 200) / 2,
        backgroundColor: 'rgba(8, 32, 50, 0.9)'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
