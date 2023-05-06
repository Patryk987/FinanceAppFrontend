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
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';

export function Operations({ navigation }) {

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Header label="Operacje" />
            <ScrollView style={{ width: '100%' }}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, height: 200 }}>

                    <View>
                        <CircleDiagram />
                    </View>

                </View>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <Button title="Nowy przychód" icon={<Text>+</Text>} />
                    <Button title="Nowy wydatek" icon={<Text>-</Text>} />
                </View>

                <CardTitle title="Historia" />

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                    <SmallButton title="Filtruj" icon={<FiltrIcon />} />
                    <SmallButton title="Sortuj" icon={<SortIcon />} />
                </View>

                <ScrollView style={{ paddingBottom: 20 }}>

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
                    <ExpenseLabel
                        subtitle={"Wydatki podstawowe"}
                        title={"Wydatki"}
                        date={"01.01.2021"}
                        price={"+70 zł"} />

                </ScrollView>

            </ScrollView>
        </View>
    )
}