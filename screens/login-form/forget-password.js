import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

import { main, header, content, footer } from './assets/style.js';

// Navigation 

// Style
import { UserContext } from '../../context.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'

export function ForgetPassword({ navigation }) {

    return (
        <View style={main.content}>

            <View style={header.content}>

                <Text style={header.title}>
                    Resetuj hasło
                </Text>

            </View>

            <ScrollView style={content.content}>

                <CustomInput
                    label={'Twój email'}
                />

                <TouchableOpacity onPress={() => send()}>

                    <CustomInput
                        label={'Resetuj'}
                        type="button"
                    />

                </TouchableOpacity>

            </ScrollView>


        </View>
    )
}