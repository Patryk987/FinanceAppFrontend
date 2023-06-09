import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style

// Class
import Api from "./../../class/api.js"

// Icons
import { FiltrIcon, SortIcon } from "./assets/icons.js"

// Modules
import { ExpenseLabel } from "./../../modules/expense-label/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import Header from "../../modules/header/index.js";
import { CardTitle } from './../../modules/card-title/index.js';
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';
import Loader from './../../modules/loader/index.js';

// Context
import { UserContext } from '../../context.js';

export function Operations({ navigation }) {

    const auth = useContext(UserContext);
    const operation = new Api("api/payments/All", auth.token);
    const balance = new Api("api/payments/Balance", auth.token);

    // states
    const [operationList, setOperationList] = useState([]);
    const [options, setOptions] = useState([
        { "value": 0, "color": "#FFFFFF", "label": "Żywność" },
        { "value": 0, "color": "#00FFFF", "label": "Rachunki" },
        { "value": 0, "color": "#FF00FF", "label": "Transport" },
        { "value": 0, "color": "#C0C0C0", "label": "Zakupy" },
        { "value": 0, "color": "#FFD700", "label": "Zdrowie i uroda" },
        { "value": 0, "color": "#00FF00", "label": "Rozrywka" },
        { "value": 0, "color": "#4B0082", "label": "Edukacja" },
        { "value": 0, "color": "#F5F5DC", "label": "Opieka nad domem" },
        { "value": 0, "color": "#40E0D0", "label": "Dzieci" },
        { "value": 0, "color": "#800080", "label": "Inwestycje" },
    ]);
    const [balanceValue, setBalanceValue] = useState([]);
    const [load, setLoad] = useState(false);

    useEffect(() => {

        getOperation();

    }, []);


    const getOperation = async () => {
        setLoad(false);
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);

        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {

            options.map((r, i) => {

                if (typeof r.label == typeof value[1].groups) {
                    if (r.label.trim() == value[1].groups.trim()) {
                        options[i].value += value[1].amountWal;
                    }
                }
            })

            setOperationList(prev => [...prev, <ExpenseLabel
                subtitle={value[1].groups ? value[1].groups : "Wydatki podstawowe"}
                title={value[1].name}
                date={value[1].paymentsDate.split("T")[0]}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });
        setLoad(true);
    }


    const Bar = ({ label, color }) => {
        return (
            <View style={{ flexDirection: 'row', margin: 5, minHeight: 10, alignItems: 'center' }}>
                <View style={{ marginRight: 5 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: color }}></View>
                </View>
                <View>
                    <Text style={{ fontSize: 10 }}>{label}</Text>
                </View>
            </View >
        )
    }

    return (
        <View style={{
            width: '100%',
            height: '100%'
        }}>

            <Header label="Operacje" />

            <Loader load={load} onRefresh={() => getOperation()}>
                <ScrollView style={{ width: '100%' }}>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, height: 250 }}>

                        <View>
                            <CircleDiagram billing={balanceValue} options={options} />
                        </View>

                        <View style={{ width: '45%' }}>
                            {options.map((r) => <Bar label={r.label} color={r.color}></Bar>)}
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                        <Button
                            title="Nowa operacja"
                            icon={<Text>+</Text>}
                            onPress={() => navigation.navigate("AddOperation")}
                        />
                        <Button
                            title="Stałą operacja"
                            icon={<Text>+</Text>}
                            onPress={() => navigation.navigate("AddCyclicalOperation")}
                        />
                        {/* <Button title="Nowy wydatek" icon={<Text>-</Text>} /> */}
                    </View>

                    <CardTitle title="Historia" />

                    {/* <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                    <SmallButton title="Filtruj" icon={<FiltrIcon />} />
                    <SmallButton title="Sortuj" icon={<SortIcon />} />
                </View> */}

                    <ScrollView style={{ paddingBottom: 20 }}>


                        {operationList}


                    </ScrollView>

                </ScrollView>

            </Loader>
        </View>
    )
}