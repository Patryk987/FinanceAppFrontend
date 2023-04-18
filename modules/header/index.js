import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';

// Style
import { styles } from './style.js';


export default function Header(props) {

    return (
        <View style={[styles.container, { ...props.style }]}>
            <Text style={styles.text}>
                {props.label}
            </Text>
        </View>
    )
}