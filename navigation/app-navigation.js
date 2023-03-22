import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, Button } from 'react-native';

import { TabItemOption, screenOptions } from './tab.js';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import { Home } from './../screens/home/index.js';
import { Operations } from './../screens/operations/index.js';
import { Stats } from './../screens/stats/index.js';
import { Settings } from './../screens/settings/index.js';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


export function AppNavigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator {...{ screenOptions }}>
                <Tab.Screen
                    name="Home"
                    options={TabItemOption("Home", "home")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="operations"
                    options={TabItemOption("Operacje", "money")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="operations"
                                component={Operations}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="stats"
                    options={TabItemOption("Statystyki", "stats")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="stats"
                                component={Stats}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="settings"
                    options={TabItemOption("Ustawienia", "setting")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <SettingsStack.Screen
                                name="settings"
                                component={Settings}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}