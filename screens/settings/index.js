import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class

// Style

// Modules
import ListElement from "../../modules/list-element/index.js";
import Header from "../../modules/header/index.js";

export function Settings({ navigation }) {

    const logout = () => {
        alert("OK");
    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ScrollView>

                <Header label="Ustawienia" />

                <ListElement label="Członkowie rodziny" />
                <ListElement label="Wydatki" />
                <ListElement label="Przychody" />
                <ListElement label="Skanuj produkt" />
                <ListElement label="Lista zakupów" />
                <ListElement label="Edytuj dane" />
                <ListElement label="Ustaw pin" />
                <ListElement label="Wyloguj" onPress={() => logout()} />

            </ScrollView>
        </View>
    )
}