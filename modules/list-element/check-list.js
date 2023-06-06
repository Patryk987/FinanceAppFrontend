import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Style
import { styles } from './style.js';

// Icon
import { RightArrow } from './icon.js';

export default function CheckListElement(props) {

    const click = () => {
        if (props.onPress) {
            props.onPress();
        }
    }

    return (<TouchableOpacity onPress={() => click()} style={styles.container}>
        <View style={styles.textBox}>
            <Text style={[styles.text, { textDecorationLine: props.status ? 'line-through' : 'null' }]}>{props.label}</Text>
        </View>
        <View style={styles.textIcon}>
            {(props.status && props.status == true) ? <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#082032', borderStyle: 'solid', backgroundColor: '#082032' }}></View> : <View style={{ width: 20, height: 20, borderWidth: 2, borderColor: '#082032', borderStyle: 'solid' }}></View>}
        </View>
    </TouchableOpacity >
    )
}


