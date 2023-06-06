import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StyleTemplate } from '../../assets/style.js';

export function SmallButton(props) {

    const onPress = () => {
        if (props.onPress) props.onPress();

    }

    return (
        <TouchableOpacity style={small.content} onPress={() => onPress()}>
            <View style={small.data}>
                <Text style={small.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

}

export function Button(props) {

    const onPress = () => {

        if (props.onPress) props.onPress();

    }

    return (
        <TouchableOpacity style={[big.content, props.style]} onPress={() => onPress()}>
            <View style={big.data}>
                <View style={big.icon}>
                    {props.icon && props.icon}
                </View>
                <Text style={big.title}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );

}


const small = StyleSheet.create({
    content: {
        marginLeft: 10,
        marginRight: 10,
        width: 100,
    },
    data: {
        width: '100%',
        padding: 10,
        flexDirection: 'row',
        borderColor: StyleTemplate.colors.primary,
        borderWidth: 1,
        borderStyle: `solid`,
        borderRadius: 20,
    },
    title: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 12,
        color: StyleTemplate.colors.primary,
        textAlign: 'center',
    },

})

const big = StyleSheet.create({
    content: {
        marginLeft: 10,
        marginRight: 10,
        width: 170,
    },
    data: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
        borderColor: StyleTemplate.colors.primary,
        borderWidth: 1,
        borderStyle: `solid`,
        borderRadius: 40,
    },
    title: {
        width: '100%',
        fontWeight: 'bold',
        fontSize: 15,
        color: StyleTemplate.colors.primary
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },

})