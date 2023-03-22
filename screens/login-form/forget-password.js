import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style
import { header, content, main, form } from './assets/style.js';



export function ForgetPassword({ navigation }) {

    return (
        <View style={form.view}>
            <ScrollView>

                <Text style={main.h1}>
                    Zapomniałeś hasła?
                </Text>

            </ScrollView>
        </View>
    )
}