import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import * as LocalAuthentication from 'expo-local-authentication';

// Style
import { styles } from './assets/style.js';

// Icon 
import { Backspace, Fingerprint } from './assets/icon.js';

// Context
import { UserContext } from '../../context.js';

// Class
import User from './../../class/users.js';
const userPin = User.get_pin();

// Modules
import Loader from './../../modules/loader/index.js';


const numberLength = userPin.length;

function PinKeyboard({ onPress }) {
    const [pin, setPin] = useState('');
    const [load, setLoad] = useState(true);
    const [pinIsCorrect, setPinIsCorrect] = useState(true);
    const auth = useContext(UserContext);

    const handlePress = (digit) => {
        if (pin.length <= numberLength) {
            let newPin = pin + digit;
            setPin(newPin);

            if (pin.length + 1 == numberLength) {
                checkPin(newPin);
            }
        }
    };

    const [box, setBox] = useState([]);
    useEffect(() => {
        setBox([]);
        for (let i = 0; i < numberLength; i++) {

            setBox(old => [...old, <BoxNumbers number={pin.split('')[i]} state={pinIsCorrect} />])

        }

    }, [pin]);

    const authPin = (state) => {
        setLoad(false);
        if (state) {
            // Użytkownik został uwierzytelniony
            auth.pinAuthenticate(true);
        } else {
            // Uwierzytelnienie nie powiodło się
            auth.pinAuthenticate(false);
            setPinIsCorrect(false);
            setPin('');

        }

        setLoad(true);
    }

    const handleAuthenticate = async () => {
        const options = {
            promptMessage: 'Proszę o uwierzytelnienie',
            fallbackLabel: 'Użyj PINu',
        };

        const result = await LocalAuthentication.authenticateAsync(options);
        if (result.success) {
            authPin(true);
        } else {
            authPin(false);
        }
    };

    const checkPin = async (pin) => {
        let state = await User.checkUserPin(pin);

        if (state) {
            authPin(true);
        } else {
            authPin(false);
        }
    }

    return (
        <View style={styles.keyboard}>
            <Loader load={load}>
                <View style={{ flexDirection: 'row', marginBottom: 40 }}>
                    {box}
                </View>


                <View style={styles.row}>
                    <PinButton digit={1} onPress={handlePress} />
                    <PinButton digit={2} onPress={handlePress} />
                    <PinButton digit={3} onPress={handlePress} />
                </View>
                <View style={styles.row}>
                    <PinButton digit={4} onPress={handlePress} />
                    <PinButton digit={5} onPress={handlePress} />
                    <PinButton digit={6} onPress={handlePress} />
                </View>
                <View style={styles.row}>
                    <PinButton digit={7} onPress={handlePress} />
                    <PinButton digit={8} onPress={handlePress} />
                    <PinButton digit={9} onPress={handlePress} />
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={[styles.button, { backgroundColor: "#FF4C29" }]} onPress={() => handleAuthenticate()}>
                        <Fingerprint />
                    </TouchableOpacity>
                    <PinButton digit={0} onPress={handlePress} />
                    <TouchableOpacity style={styles.backButton} onPress={() => setPin(pin.slice(0, -1))}>
                        <Backspace />
                    </TouchableOpacity>
                </View>

            </Loader>

        </View>
    );
};

const PinButton = ({ digit, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={() => onPress(digit)}>
        <Text style={styles.buttonText}>
            {digit}
        </Text>
    </TouchableOpacity>
);

const BoxNumbers = ({ number, state }) => (
    <View style={{
        borderWidth: 2,
        borderColor: state ? "#082032" : "red",
        borderStyle: 'solid',
        padding: 10,
        margin: 5,
        width: 40,
        height: 50,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    }}>
        <Text style={{
            fontWeight: 'bold',
            fontSize: 21
        }}>
            {number}
        </Text>
    </View>
);

export default PinKeyboard;