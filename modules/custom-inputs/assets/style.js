import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StyleTemplate } from '../../../assets/style.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const input = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    label_box: {
        flexDirection: 'row',
        width: '100%',
        borderColor: StyleTemplate.colors.primary,
        borderRadius: 5,
        borderWidth: 2,
        padding: 5,
        alignContent: 'center',
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: StyleTemplate.FontSize.h2,
        color: StyleTemplate.colors.primary
    },
    input: {
        paddingTop: 5,
        paddingBottom: 5,
        fontSize: StyleTemplate.FontSize.h2,
        width: '90%'
    },
    button: {
        padding: 15,
        backgroundColor: StyleTemplate.colors.primary,
        borderRadius: 5,
        fontSize: StyleTemplate.FontSize.h2,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: StyleTemplate.colors.background,
        fontSize: StyleTemplate.FontSize.h2,
        fontWeight: 'bold'
    },
    svg: {
        width: '10%',
        height: 40,
        justifyContent: 'center',
        alignContent: 'center',
    },
    error: {
        fontSize: StyleTemplate.FontSize.p,
        color: StyleTemplate.colors.error
    },
    warning: {
        fontSize: StyleTemplate.FontSize.p,
        color: StyleTemplate.colors.warning
    },
});

export const checkbox = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    box: {
        width: 25,
        height: 25,
        borderWidth: 2,
        borderColor: StyleTemplate.FontSize.p,
        borderStyle: 'solid',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxChecked: {
        borderColor: StyleTemplate.colors.error,
        backgroundColor: StyleTemplate.colors.error
    },
    text: {
        fontSize: StyleTemplate.FontSize.p
    }
});
