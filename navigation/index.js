import React, { useState, useEffect, useContext, createContext } from 'react';
import { Button, View, Text } from 'react-native';

import { AppNavigation } from './app-navigation.js';
import { LoginNavigation } from './login-navigation.js';

const GlobalContext = createContext('Initial Value');

// Context
import { UserContext } from '../context.js';

// Class
import User from './../class/users.js';

// Modules
import PinKeyboard from './../modules/pin-keyboard/index.js';
import Loader from './../modules/loader/index.js';

export function Navigation() {

    const [load, setLoad] = useState(true);
    const [pin, setPin] = useState(true);

    const auth = useContext(UserContext);

    const checkLoginUsers = async () => {
        setPin(await User.get_pin());
        setLoad(false);
        let is_login = await User.user_is_login();

        if (is_login.status) {

            auth.authenticate(is_login.token);

        }

        setLoad(true);
    }

    useEffect(() => {
        checkLoginUsers();
    }, []);

    if (!load) {

        return (
            <Loader>

            </Loader>
        );


    } else if (auth.loggedIn && pin.set && !auth.correctPin) {

        return (
            <View>
                <PinKeyboard />
            </View>
        );

    } else if ((auth.loggedIn && !pin.set) || (auth.loggedIn && pin.set && auth.correctPin)) {

        return <AppNavigation />;

    } else {

        return <LoginNavigation />;

    }

}
