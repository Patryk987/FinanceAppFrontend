import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';


// Style
import { header, content, main, form } from './assets/style.js';


export function Registration() {

    const send = (data) => {
        console.log(data);
    }

    return (
        <View style={form.view}>
            <ScrollView>

                <Text style={main.h1}>
                    Utwórz konto
                </Text>


            </ScrollView>
        </View>
    )
}