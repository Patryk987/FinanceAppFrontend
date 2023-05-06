import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style
import { main, balance, scan } from './assets/style.js';

// Icon 
import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
import { CardTitle } from './../../modules/card-title/index.js';
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';
import { ExpenseLabel } from "./../../modules/expense-label/index.js";

export function Home({ navigation }) {

    return (
        <View style={main.content}>
            <ScrollView>

                <View style={main.header}>
                    <Text style={main.h1}>Witaj!</Text>
                </View>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Twoje saldo" />
                    </TouchableOpacity>
                    <CircleDiagram />
                </View>

                <TouchableOpacity style={scan.content} onPress={() => navigation.navigate('ScanCode')}>

                    <View style={scan.box}>

                        <View style={scan.icon}>
                            <ProductBarIcon />
                        </View>
                        <View style={scan.textBox}>
                            <Text style={scan.text}>Skanuj produkt</Text>
                        </View>
                        <View style={scan.next}>
                            <RightIcon fill="#fff" />
                        </View>

                    </View>

                </TouchableOpacity>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Twoje wydatki" />
                    </TouchableOpacity>
                    <BarDiagram />
                </View>

                <View style={[balance.content, { height: '100%' }]}>
                    <TouchableOpacity>
                        <CardTitle title="Zaplanowane wydatki" />
                    </TouchableOpacity>

                    <View style={{ marginBottom: 40 }}>

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
                        <ExpenseLabel
                            subtitle={"Wydatki podstawowe"}
                            title={"Wydatki"}
                            date={"01.01.2021"}
                            price={"+70 zł"} />

                    </View>

                </View>



            </ScrollView>
        </View>
    )
}
