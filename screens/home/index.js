import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';
// Class
import Api from "./../..//class/api.js"
// Style
import { main, balance, scan } from './assets/style.js';

// Icon 
import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
import { CardTitle } from './../../modules/card-title/index.js';
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';
import { ExpenseLabel } from "./../../modules/expense-label/index.js";

// Context
import { UserContext } from '../../context.js';
import Loader from '../../modules/loader/index.js';

export function Home({ navigation }) {

    const auth = useContext(UserContext);
    const balance = new Api("api/payments/Balance", auth.token);

    // State
    const [balanceValue, setBalanceValue] = useState(0);

    // Function

    const getBalance = async () => {
        var results = await balance.get();
        setBalanceValue(results[0].amountPLN);

    }

    useEffect(() => {
        getBalance();
    }, []);

    return (
        <View style={main.content}>
            <Loader load={true} onRefresh={() => getBalance()}>

                <View style={main.header}>
                    <Text style={main.h1}>Witaj!</Text>
                </View>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Twoje saldo" />
                    </TouchableOpacity>
                    <CircleDiagram billing={balanceValue} />
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



            </Loader>
        </View>
    )
}
