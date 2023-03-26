import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Navigation 

// Style
import { PageContext } from './../../page-context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function ForgetPassword({ navigation }) {

    const [auth, set_auth] = useContext(PageContext);

    const [login, setLogin] = useState();

    const send = () => {

        set_auth(1);

    }

    return (
        <View style={main.content}>

            <View style={header.content}>

                <Text style={header.title}>
                    Resetuj hasło
                </Text>

            </View>

            <ScrollView style={content.content}>

                <CustomInput
                    label={'Twój email'}
                    value={(text) => setLogin(text)}

                />

                <TouchableOpacity onPress={() => send()}>

                    <CustomInput
                        label={'Resetuj'}
                        type="button"
                    />

                </TouchableOpacity>

            </ScrollView>


        </View>
    )
}