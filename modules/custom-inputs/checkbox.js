import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

// Style
// import StyleData from './../../assets/style-assets.json';
import { checkbox } from './assets/style.js';

// Icon
import { Check } from './assets/icon.js';

export default function Checkbox(props) {

    const [checked, set_checked] = useState(props.checked);
    const [position, set_position] = useState(props.position ? props.position : 'right');

    useEffect(() => {

        set_checked(props.checked);

    }, [props.checked])

    const rightButton = (
        <View style={checkbox.container}>
            <View style={[checkbox.box, checked && checkbox.boxChecked]}>
                {checked && <Check />}
            </View>
            <View>
                <Text style={[checkbox.text, { marginLeft: '5%' }]}>
                    {props.label}
                </Text>
            </View>
        </View>
    );

    const leftButton = (
        <View style={checkbox.container}>
            <View style={{ width: '90%' }}>
                <Text style={[checkbox.text, { marginRight: '5%' }]}>{props.label}</Text>
            </View>
            <View style={{ width: '10%' }}>
                <View style={[checkbox.box, checked && checkbox.boxChecked]}>
                    {checked && <Check />}
                </View>
            </View>
        </View>
    );

    return (position == 'right') ? rightButton : leftButton;

}
