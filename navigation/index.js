import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, View, Text } from 'react-native';

import { AppNavigation } from './app-navigation.js';
import { LoginNavigation } from './login-navigation.js';

const GlobalContext = createContext('Initial Value');

import { UserContext } from '../context.js';

export function Navigation() {

    const auth = useContext(UserContext);

    if (auth.loggedIn) {
        return (<AppNavigation />);
    } else {
        return (<LoginNavigation />);
    }

}
