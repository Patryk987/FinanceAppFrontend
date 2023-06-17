import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Context
import { UserContextProvider, UserContext } from '../../context.js';

// Class
import Api from '../../class/api.js';
import User from '../../class/users.js'

// Style
import { main, header, content, footer } from './assets/style.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function Login({ navigation }) {

    const endpointUser = 'api/account/login';
    const auth = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loader, setLoader] = useState(false);
    const [errors, setErrors] = useState(false);

    const send = async () => {

        setLoader(true);

        var loginResult = await User.login(email, password, endpointUser);
        if (loginResult && loginResult.status) {
            auth.authenticate(loginResult.token);
        } else {
            setErrors("Błędne dane logowania");
            console.log(loginResult);
        }


        setLoader(false);

    }

    return (
        <View style={main.content}>

            <View style={header.content}>

                <Text style={header.title}>
                    Logowanie
                </Text>

            </View>

            <ScrollView style={content.content}>

                {errors && <Text style={{ paddingTop: 10, color: "red" }}>{errors}</Text>}

                <CustomInput
                    label="Twój email"
                    type="input"
                    onChangeText={(text) => setEmail(text)}
                    value={email}

                />

                <CustomInput
                    label={'Twoje hasło'}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
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