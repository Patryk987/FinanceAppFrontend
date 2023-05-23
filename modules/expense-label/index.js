import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
import { StyleTemplate } from './../../assets/style.js';

export function ExpenseLabel(props) {

    return (
        <View style={main.content}>
            <View style={main.data}>
                <View style={main.info}>
                    <Text style={main.subtitle}>{props.subtitle}</Text>
                    <Text style={main.title}>{props.title}</Text>
                </View>
                <View style={main.price}>
                    <Text style={main.subtitle}>{props.date}</Text>
                    <Text style={main.title}>{props.price}</Text>
                </View>
            </View>
        </View>
    );

}


const main = StyleSheet.create({
    content: {
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    data: {
        padding: 20,
        flexDirection: 'row',
        backgroundColor: StyleTemplate.colors.primary,
        borderRadius: 10,
    },
    info: {
        width: '50%',
        color: 'white',
    },
    price: {
        width: '50%',
        color: 'white',
        alignItems: 'flex-end'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
    subtitle: {
        fontSize: 10,
        fontWeight: '200',
        color: 'white',
    }

})