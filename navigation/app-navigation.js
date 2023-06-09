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
import { AddCyclicalOperation } from './../screens/operations/add-cyclical-operations.js';
import { EditPin } from './../screens/pin/index.js';
import { ShoppingList } from './../screens/shopping-list/index.js';
import { AddList } from './../screens/shopping-list/add-list.js';
import { DetailsShoppingList } from './../screens/shopping-list/shopping-list.js';
import { AddProduct } from './../screens/shopping-list/add-product.js';

const Tab = createBottomTabNavigator();
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

                        <Stack.Navigator>
                            <HomeStack.Screen
                                name="Home"
                                component={Home}
                                options={{ headerShown: false }} />
                            <Stack.Screen
                                name="ScanCode"
                                component={ScanCode}
                                options={{ headerShown: true }} />
                        </Stack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="OperationsScreen"
                    options={TabItemOption("Operacje", "money")}>
                    {() => (

                        <Stack.Navigator>
                            <HomeStack.Screen
                                name="operations"
                                component={Operations}
                                options={{ headerShown: false }} />
                            <Stack.Screen
                                name="AddOperation"
                                component={AddOperation}
                                options={{ headerShown: true }} />
                            <Stack.Screen
                                name="AddCyclicalOperation"
                                component={AddCyclicalOperation}
                                options={{ headerShown: true }} />
                        </Stack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="StatsScreen"
                    options={TabItemOption("Statystyki", "stats")}>
                    {() => (

                        <Stack.Navigator>
                            <HomeStack.Screen
                                name="stats"
                                component={Stats}
                                options={{ headerShown: false }} />
                        </Stack.Navigator>

                    )}
                </Tab.Screen>
                <Tab.Screen
                    name="SettingsScreen"
                    options={TabItemOption("Ustawienia", "setting")}>
                    {() => (

                        <Stack.Navigator>
                            <HomeStack.Screen
                                name="settings"
                                component={Settings}
                                options={{ headerShown: false }} />
                            <Stack.Screen
                                name="EditPin"
                                component={EditPin}
                                options={{ headerShown: false }} />
                            <Stack.Screen
                                name="ShoppingList"
                                component={ShoppingList}
                                options={{ headerShown: false }} />
                            <Stack.Screen
                                name="AddList"
                                component={AddList}
                                options={{ headerShown: true }} />
                            <Stack.Screen
                                name="DetailsShoppingList"
                                component={DetailsShoppingList}
                                options={{ headerShown: true }} />
                            <Stack.Screen
                                name="AddProduct"
                                component={AddProduct}
                                options={{ headerShown: true }} />
                        </Stack.Navigator>

                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer >
    )
}