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

// Modules
import Loader from './../../modules/loader/index.js';

function PinKeyboard(props) {

    const [pin, setPin] = useState('');
    const [load, setLoad] = useState(true);
    const [pinIsCorrect, setPinIsCorrect] = useState(true);
    const [pinLength, setPinLength] = useState(0);
    const [userPin, setUserPin] = useState([1, 2, 3, 4]);
    const auth = useContext(UserContext);

    // Effect

    useEffect(() => {

        setPinLength(props.numberLength);
        renderBox();

    }, [props.numberLength]);

    useEffect(() => {

        setUserPin(props.correctPin)
        renderBox();

    }, [props.correctPin]);

    // Const

    const handlePress = (digit) => {
        if (pin.length <= props.numberLength) {
            let newPin = pin + digit;
            setPin(newPin);

            if (pin.length + 1 == props.numberLength) {
                checkPin(newPin);
            }
        }
    };

    const [box, setBox] = useState([]);
    useEffect(() => {

        renderBox();

    }, [pin]);

    const renderBox = () => {
        setBox([]);
        for (let i = 0; i < props.numberLength; i++) {

            setBox(old => [...old, <BoxNumbers number={pin.split('')[i]} state={pinIsCorrect} />])

        }
    }

    const authPin = (state) => {
        setLoad(false);

        if (state) {
            // Użytkownik został uwierzytelniony
            if (props.pinStatus) props.pinStatus(true);
            setPinIsCorrect(true);
        } else {
            // Uwierzytelnienie nie powiodło się
            if (props.pinStatus) props.pinStatus(false);
            setPinIsCorrect(false);
        }

        setPin('');

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

        if (props.enterPin)
            props.enterPin(pin);


        if (props.correctPin) {
            if (props.correctPin == pin) {
                authPin(true);
            } else {
                authPin(false);
            }

        }

    }

    return (
        <View style={styles.keyboard}>

            <View style={{ marginBottom: 30 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{props.label}</Text>
            </View>

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