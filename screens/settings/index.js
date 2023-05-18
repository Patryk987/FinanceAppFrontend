import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import User from "./../../class/users.js";

// Style

// Modules
import ListElement from "../../modules/list-element/index.js";
import Header from "../../modules/header/index.js";

// Context
import { UserContext } from "./../../context.js";

export function Settings({ navigation }) {

    const auth = useContext(UserContext);

    const logout = () => {
        // alert("OK");
        User.logout();
        auth.logout();
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