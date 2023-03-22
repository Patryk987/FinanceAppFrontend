import React, { useState, useContext, createContext, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Button, Animated, Easing } from 'react-native';
import { HomeIcon, MoneyIcon, StatsIcon, SettingIcon } from './assets/icon.js';

export function CustomTab(props) {

    const { focused } = props;

    const heightValue = new Animated.Value(0);
    const opacityValue = new Animated.Value(0);

    useEffect(() => {
        spin();
    }, [spin]);

    function spin() {
        heightValue.setValue(0);
        Animated.timing(heightValue, {
            toValue: 1,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
        }).start();

        opacityValue.setValue(0);
        Animated.timing(opacityValue, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    const translateY = heightValue.interpolate({
        inputRange: [0, 1],
        outputRange: [focused ? 5 : 0, focused ? 0 : 5]
    });

    const opacity = opacityValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    switch (props.icon) {
        case "home":
            var icon = <HomeIcon />;
            break;
        case "money":
            var icon = <MoneyIcon />;
            break;
        case "stats":
            var icon = <StatsIcon />;
            break;
        case "setting":
            var icon = <SettingIcon />;
            break;
        default:
            var icon = <HomeIcon />;
            break;
    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>


            {focused ? (
                <>
                    <Animated.View style={{ transform: [{ translateY }] }}>
                        <View style={{ height: 25 }}>
                            {icon}
                        </View>
                    </Animated.View>
                    <Animated.View style={{ opacity }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 10, color: 'white' }}>{props.name}</Text>
                    </Animated.View>
                </>
            ) : (
                <View style={{ height: 25 }}>
                    {icon}
                </View>
            )}

        </View >
    );
}

export const TabItemOption = (label, icon) => {
    return {
        tabBarLabel: '',
        headerShown: false,
        tabBarIcon: ({ color, size, focused }) => (<CustomTab name={label} focused={focused} icon={icon} />),
        tabBarShowLabel: false
    }
}

export const TabOption = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle: {
        shadowColor: "#fff",
        shadowOpacity: 0,
        shadowRadius: 0,
        elevation: 0,
        backgroundColor: '#082032',
        height: 75,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        borderTopWidth: 0,
    },
    tabBarItemStyle: {
        margin: 5,
    }
};

export const screenOptions = {
    unmountOnBlur: false,
    headerShown: false,
    tabBarStyle: {
        elevation: 0,
        backgroundColor: '#082032',
        height: 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderTopWidth: 0,
    },
    tabBarItemStyle: {
        margin: 5,
    }
};