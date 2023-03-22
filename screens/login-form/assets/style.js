import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const header = StyleSheet.create({
    view: {
        height: '40%',
        width: '100%',
        backgroundColor: 'red'
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export const content = StyleSheet.create({
    view: {
        width: '100%',
        minHeight: (screenHeight * 0.6 + 40 + 20),
        transform: [{ translateY: -40 }],
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        backgroundColor: 'gray'
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export const form = StyleSheet.create({
    view: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

export const main = StyleSheet.create({
    h1: {
        fontSize: 21,
        textAlign: 'center',
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 50,
        marginBottom: 50
    },
    view: {
        width: '100%',
        height: '100%'
    },
    link: {
        fontSize: 12,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#000",
        color: 'gray',
        padding: 20
    },
});

export const footer = StyleSheet.create({
    box: {
        alignContent: 'flex-end',
        padding: 40,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center'
    },
    icon: {
        padding: 20
    },
    text: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});
