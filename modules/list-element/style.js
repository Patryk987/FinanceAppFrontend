import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { StyleTemplate } from '../../assets/style.js';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        borderBottomColor: StyleTemplate.colors.primary,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        flexDirection: 'row',
        alignItems: 'center',
        minHeight: 50
    },
    textBox: {
        width: '90%'
    },
    textIcon: {
        width: '10%'
    },
    text: {
        fontSize: 16,
        color: StyleTemplate.colors.primary
    }
});
