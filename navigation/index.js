import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, View, Text } from 'react-native';

import { AppNavigation } from './app-navigation.js';
import { LoginNavigation } from './login-navigation.js';

const GlobalContext = createContext('Initial Value');

import { PageContext } from './../page-context.js';

export function Navigation() {

    const [auth] = useContext(PageContext);

    switch (auth) {
        case 1:
            return (<AppNavigation />);
            break;
        default:
            return (<LoginNavigation />);
            break;
    }
}
