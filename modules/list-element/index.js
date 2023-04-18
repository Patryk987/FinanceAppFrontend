import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Style
import { styles } from './style.js';

// Icon
import { RightArrow } from './icon.js';

export default function ListElement(props) {

    const click = () => {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (
        <TouchableOpacity onPress={() => click()} style={styles.container}>
            <View style={styles.textBox}>
                <Text style={styles.text}>{props.label}</Text>
            </View>
            <View style={styles.textIcon}>
                <RightArrow />
            </View>
        </TouchableOpacity >
    )
}


