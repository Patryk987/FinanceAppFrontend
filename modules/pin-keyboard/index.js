import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { styles } from './assets/style.js';

import * as LocalAuthentication from 'expo-local-authentication';

const numberLength = 4;

function PinKeyboard({ onPress }) {
    const [pin, setPin] = useState('');

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

            setBox(old => [...old, <BoxNumbers number={pin.split('')[i]} />])

        }

    }, [pin]);

    const auth = (state) => {
        if (state) {
            // Użytkownik został uwierzytelniony
            alert("OK");
        } else {
            // Uwierzytelnienie nie powiodło się
            alert("NIE OK");
        }
    }

    const handleAuthenticate = async () => {
        const options = {
            promptMessage: 'Proszę o uwierzytelnienie',
            fallbackLabel: 'Użyj PINu',
        };

        const result = await LocalAuthentication.authenticateAsync(options);
        if (result.success) {
            auth(true);
        } else {
            auth(false);
        }
    };

    const checkPin = (pin) => {
        if (pin == "1111") {
            auth(true);
        } else {
            auth(false);
        }
    }

    return (
        <View style={styles.keyboard}>
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
                <TouchableOpacity style={styles.button} onPress={() => handleAuthenticate()}>
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>
                <PinButton digit={0} onPress={handlePress} />
                <TouchableOpacity style={styles.backButton} onPress={() => setPin(pin.slice(0, -1))}>
                    <Text style={styles.backButtonText}></Text>
                </TouchableOpacity>
            </View>



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

const BoxNumbers = ({ number }) => (
    <View style={{
        borderWidth: 2,
        borderColor: "#082032",
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