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
        padding: 20,
    },
    text: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: StyleTemplate.FontSize.h1,
        color: StyleTemplate.colors.primary
    }
});
