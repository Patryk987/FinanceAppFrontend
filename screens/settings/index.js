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

                <ListElement label="Członkowie rodziny" onPress={() => alert("Dostępne w wersji PRO! \n Już za 19.99 miesięcznie \n Akceptujemy płatność BLIK!")} />
                <ListElement label="Wydatki" onPress={() => navigation.navigate({ "key": "stats-fslPytFuj9rCxERsOQoiB", "name": "stats", "params": { "types": "spends" }, "path": undefined })} />
                <ListElement label="Przychody" onPress={() => navigation.navigate({ "key": "stats-fslPytFuj9rCxERsOQoiB", "name": "stats", "params": { "types": "donations" }, "path": undefined })} />
                <ListElement label="Oszczędności" onPress={() => navigation.navigate({ "key": "stats-fslPytFuj9rCxERsOQoiB", "name": "stats", "params": { "types": "savings" }, "path": undefined })} />
                <ListElement label="Skanuj produkt" onPress={() => navigation.navigate("ScanCode")} />
                <ListElement label="Lista zakupów" />
                <ListElement label="Edytuj dane" />
                <ListElement label="Ustaw pin" onPress={() => navigation.navigate("EditPin")} />
                <ListElement label="Wyloguj" onPress={() => logout()} />

            </ScrollView>
        </View>
    )
}