import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView } from 'react-native';

// Class
import User from './../../class/users.js';

// Style

// Icon

// Modules
import PinKeyboard from './../../modules/pin-keyboard/index.js'
import Loader from './../../modules/loader/index.js';


export function EditPin({ navigation }) {


    // States

    const [pin, setPin] = useState();
    const [status, setStatus] = useState(true);
    const [load, setLoad] = useState(true);

    // Effects

    useEffect(() => {
        getPin();
    }, [])

    // local functions

    const getPin = async () => {
        setLoad(true);
        var userPin = await User.get_pin();
        setPin(userPin);
        setLoad(false);
        // setPin(userPin[0]);
    }

    const onReturnPinStatus = (yourStatus) => {
        setStatus(!yourStatus);
    }

    const onEnterPin = (enterPin) => {
        User.set_pin(enterPin);
        alert("Ustawiono nowy pin");
        navigation.goBack();
    }

    if (load) {

        <Loader></Loader>

    } else if (status) {

        return (
            <View>

                <PinKeyboard
                    numberLength={pin.length}
                    correctPin={pin.pin}
                    label={"Podaj twój pin"}
                    pinStatus={(status) => onReturnPinStatus(status)} />


            </View>
        )

    } else {

        return (
            <View>

                <PinKeyboard
                    numberLength={pin.length}
                    label="Podaj nowy pin"
                    enterPin={(enterPin) => onEnterPin(enterPin)} />


            </View>

        )

    }
}