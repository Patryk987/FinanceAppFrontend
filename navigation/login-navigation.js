import React, { useState, useContext, createContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Button } from 'react-native';


import { Login } from './../screens/login-form/login.js';
import { Registration } from './../screens/login-form/registration.js';
import { ForgetPassword } from './../screens/login-form/forget-password.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();

import { CustomHeader } from './header.js';

export function LoginNavigation() {

    return (

        <NavigationContainer>
            <Stack.Navigator>
                <HomeStack.Screen
                    name="login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="ForgetPassword"
                    component={ForgetPassword}
                    options={{
                        headerShown: true,
                        header: () => (<CustomHeader />),
                    }}
                />
                <Stack.Screen
                    name="registration"
                    component={Registration}
                    options={{
                        headerShown: true,
                        header: () => (<CustomHeader />),
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer >

    )
}