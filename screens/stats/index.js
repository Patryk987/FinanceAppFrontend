import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style

// Icons
import { FiltrIcon, SortIcon } from "./assets/icons.js"

// Modules
import { ExpenseLabel } from "./../../modules/expense-label/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import Header from "../../modules/header/index.js";
import { CardTitle } from './../../modules/card-title/index.js';

export function Stats({ navigation }) {

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Header label="Statystyki" />

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>

                <SmallButton title="Wydatki" />
                <SmallButton title="Przychody" />
                <SmallButton title="Oszczędności" />

            </View>

            <CardTitle title="Oszczędności" />

            <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                <Button title="Filtruj" icon={<FiltrIcon />} />
                <Button title="Sortuj" icon={<SortIcon />} />
            </View>

            <ScrollView>

                <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={"Wydatki"}
                    date={"01.01.2021"}
                    price={"+70 zł"} />
                <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={"Wydatki"}
                    date={"01.01.2021"}
                    price={"+70 zł"} />
                <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={"Wydatki"}
                    date={"01.01.2021"}
                    price={"+70 zł"} />

            </ScrollView>
        </View>
    )
}