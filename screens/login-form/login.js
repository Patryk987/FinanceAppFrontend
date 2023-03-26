import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Navigation 

// Style
import { UserContextProvider, UserContext } from '../../context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function Login({ navigation }) {

    const auth = useContext(UserContext);
    // 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const send = () => {

        auth.authenticate("OK");

    }

    return (
        <View style={main.content}>

            <View style={header.content}>

                <Text style={header.title}>
                    Logowanie
                </Text>

            </View>

            <ScrollView style={content.content}>

                <CustomInput
                    label={'Twój email'}
                    value={(text) => setEmail(text)}

                />

                <CustomInput
                    label={'Twoje hasło'}
                    value={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => navigation.navigate('forgetPassword')}>

                    <View style={{ marginBottom: 30 }}>
                        <Text style={{ fontWeight: 'bold' }}>Zapomniałeś hasła?</Text>
                    </View>

                </TouchableOpacity>


                <TouchableOpacity onPress={() => send()}>

                    <CustomInput
                        label={'Zaloguj się'}
                        type="button"
                    />

                </TouchableOpacity>

            </ScrollView>

            <View style={footer.content}>

                <TouchableOpacity onPress={() => navigation.navigate('registration')}>

                    <Text>
                        <Text style={{ fontWeight: 'bold' }}>Nie masz jeszcze konta?</Text>
                        Zarejestruj się
                    </Text>

                </TouchableOpacity>


            </View>

        </View >
    )
}