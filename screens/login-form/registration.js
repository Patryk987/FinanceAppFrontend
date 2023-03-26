import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Navigation 

// Style
import { UserContext } from '../../context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function Registration({ navigation }) {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");


    const registration = () => {


    }

    return (
        <View style={main.content}>

            <View style={[header.content, { height: '10%' }]}>

                <Text style={header.title}>
                    Rejestracja
                </Text>

            </View>

            <ScrollView style={content.content}>

                <CustomInput
                    label={'Twój email'}
                    value={(text) => setEmail(text)}

                />

                <CustomInput
                    label={'Twoje imię'}
                    value={(text) => setName(text)}

                />

                <CustomInput
                    label={'Twoje nazwisko'}
                    value={(text) => setSurname(text)}

                />

                <CustomInput
                    label={'Twoje hasło'}
                    value={(text) => setPassword(text)}
                    secureTextEntry={true}
                />

                <CustomInput
                    label={'Powtórz hasło'}
                    value={(text) => setRepeatPassword(text)}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => registration()}>

                    <CustomInput
                        label={'Zarejestruj się '}
                        type="button"
                    />

                </TouchableOpacity>


            </ScrollView>

        </View >
    )
}