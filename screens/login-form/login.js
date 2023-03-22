import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { header, content, main, form } from './assets/style.js';

// Style
import { PageContext } from './../../page-context.js';


export function Login({ navigation }) {

    const [auth, set_auth] = useContext(PageContext);

    const send = () => {

        set_auth(1);

    }

    return (
        <View style={form.view}>
            <ScrollView>

                <Text style={main.h1}>
                    Zaloguj się
                </Text>

                <TouchableOpacity
                    onPress={() => send()}
                >
                    <Text>Login</Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}