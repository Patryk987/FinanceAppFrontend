import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Icon 
import { RightIcon } from './../assets/icon.js';


export function CardTitle(props) {

    return (
        <View style={main.content}>
            <View style={main.textBox}>
                <Text style={main.text}>
                    {props.title}
                </Text>
            </View>
            <View style={main.next}>
                <RightIcon fill="#082032" />
            </View>
        </View>
    );

}


const main = StyleSheet.create({
    content: {
        width: '100%',
        padding: 20,
        flexDirection: 'row',
    },
    textBox: {
        width: '90%',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#082032'
    },
    next: {
        width: '10%',
        justifyContent: 'center'
    },
})