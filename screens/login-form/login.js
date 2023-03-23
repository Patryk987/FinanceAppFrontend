import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Style
import { PageContext } from './../../page-context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function Login({ navigation }) {

    const [auth, set_auth] = useContext(PageContext);

    const [login, setLogin] = useState();

    const send = () => {

        set_auth(1);

    }

    return (
        <View style={main.content}>

            <View style={header.content}>

                <Text style={header.title}>
                    Logowanie
                </Text>

            </View>

            <View style={content.content}>

                <CustomInput
                    label={'Twój nick lub email'}
                    value={(text) => setLogin(text)}

                />

                <CustomInput
                    label={'Twoje hasło'}
                    value={(text) => setLogin(text)}
                    secureTextEntry={true}
                />

                <View style={{ marginBottom: 30 }}>
                    <Text style={{ fontWeight: 'bold' }}>Zapomniałeś hasła?</Text>
                </View>

                <CustomInput
                    label={'Zaloguj się'}
                    type="button"
                />

            </View>

            <View style={footer.content}>

                <Text>
                    <Text style={{ fontWeight: 'bold' }}>Nie masz jeszcze konta?</Text>
                    Zarejestruj się
                </Text>

            </View>

        </View>
    )
}