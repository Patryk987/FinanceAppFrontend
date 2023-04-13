import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, View, Text } from 'react-native';

import { AppNavigation } from './app-navigation.js';
import { LoginNavigation } from './login-navigation.js';

const GlobalContext = createContext('Initial Value');

import { UserContext } from '../context.js';

// Class
import User from './../class/users.js';

export function Navigation() {

    const [load, setLoad] = useState(false);

    const auth = useContext(UserContext);

    const checkLoginUsers = async () => {
        let is_login = await User.user_is_login();

        if (is_login.status) {

            auth.authenticate(is_login.token);
            auth.setPermission(is_login.permission);

        }

        setLoad(true);
    }

    useEffect(() => {
        checkLoginUsers();
    }, []);

    if (auth.loggedIn) {
        return (<AppNavigation />);
    } else {
        return (<LoginNavigation />);
    }

}
