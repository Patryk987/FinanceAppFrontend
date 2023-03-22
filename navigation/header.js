import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Button, Animated, Easing, StatusBar } from 'react-native';

import { useNavigation } from '@react-navigation/native';


const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;

export function CustomHeader(props) {

    const { position, style, iconColor } = props;
    const navigation = useNavigation();

    return (
        <View
            style={[styles.container, style]}
        >
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.arrowLeft}
            >

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: STATUS_BAR_HEIGHT,
        height: 50 + STATUS_BAR_HEIGHT,
        width: '100%'
    },
    arrowLeft: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '15%'
    }
});
