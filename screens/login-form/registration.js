import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Class
import User from '../../class/users.js'

// Style
import { UserContext } from '../../context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'
import { Popup } from '../../modules/popup/index.js'

export function Registration({ navigation }) {

    const endpointRegistrationUser = 'api/account/register';
    const auth = useContext(UserContext);

    const [loader, setLoader] = useState(false);
    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const registration = async () => {

        setLoader(true);

        var registrationResult = await User.registration(email, name, surname, password, repeatPassword, endpointRegistrationUser);

        if (registrationResult.status) {
            setIsPopupVisible(true);
        } else {
            console.log(registrationResult.errors);
        }

        setLoader(false);
    }

    const closePopup = () => {
        navigation.navigate("login");
        setIsPopupVisible(!isPopupVisible);
    };

    return (
        <View style={main.content}>

            <ScrollView style={content.content}>

                <View style={[header.content, { height: '10%' }]}>

                    <Text style={header.title}>
                        Rejestracja
                    </Text>

                </View>

                <CustomInput
                    label={'Twój email'}
                    onChangeText={(text) => setEmail(text)}
                    value={email}

                />

                <CustomInput
                    label={'Twoje imię'}
                    onChangeText={(text) => setName(text)}
                    value={name}

                />

                <CustomInput
                    label={'Twoje nazwisko'}
                    onChangeText={(text) => setSurname(text)}
                    value={surname}

                />

                <CustomInput
                    label={'Twoje hasło'}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />

                <CustomInput
                    label={'Powtórz hasło'}
                    onChangeText={(text) => setRepeatPassword(text)}
                    value={repeatPassword}
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={() => registration()}>

                    <CustomInput
                        label={'Zarejestruj się '}
                        type="button"
                    />

                </TouchableOpacity>


            </ScrollView>

            <Popup
                title="Rejestracja"
                message="Poprawnie zarejestrowano użytkownika, możesz się teraz zalogować"
                buttonText="Zaloguj"
                visible={isPopupVisible}
                onClose={closePopup}
            />

        </View >
    )
}