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
import { ScanCode } from './../screens/code-scan/index.js';
import { AddOperation } from './../screens/operations/add-operations.js';
import { EditPin } from './../screens/pin/index.js';

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


export function AppNavigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator {...{ screenOptions }}>
                <Tab.Screen
                    name="HomeScreen"
                    options={TabItemOption("Home", "home")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <HomeStack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }} />
                            <SettingsStack.Screen
                                name="ScanCode"
                                component={ScanCode}
                                options={{ headerShown: true }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="OperationsScreen"
                    options={TabItemOption("Operacje", "money")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <HomeStack.Screen
                                name="operations"
                                component={Operations}
                                options={{ headerShown: false }} />
                            <SettingsStack.Screen
                                name="AddOperation"
                                component={AddOperation}
                                options={{ headerShown: true }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="StatsScreen"
                    options={TabItemOption("Statystyki", "stats")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <HomeStack.Screen
                                name="stats"
                                component={Stats}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="SettingsScreen"
                    options={TabItemOption("Ustawienia", "setting")}>
                    {() => (

                        <SettingsStack.Navigator>
                            <HomeStack.Screen
                                name="settings"
                                component={Settings}
                                options={{ headerShown: false }} />
                            <SettingsStack.Screen
                                name="EditPin"
                                component={EditPin}
                                options={{ headerShown: false }} />
                        </SettingsStack.Navigator>

                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}