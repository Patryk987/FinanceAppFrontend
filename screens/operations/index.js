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
    const [balanceValue, setBalanceValue] = useState([]);
    const [load, setLoad] = useState(false);

    const getOperation = async () => {
        setLoad(false);
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);

        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {

            setOperationList(prev => [...prev, <ExpenseLabel
                subtitle={"Wydatki podstawowe"}
                title={value[1].name}
                date={value[1].paymentsDate.split("T")[0]}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });

        setLoad(true);
    }

    useEffect(() => {
        getOperation();
    }, []);

    return (
        <View style={{
            width: '100%',
            height: '100%'
        }}>

            <Header label="Operacje" />

            <Loader load={load} onRefresh={() => getOperation()}>
                <ScrollView style={{ width: '100%' }}>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10, height: 200 }}>

                        <View>
                            <CircleDiagram billing={balanceValue} />
                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>
                        <Button
                            title="Nowa operacja"
                            icon={<Text>+</Text>}
                            onPress={() => navigation.navigate("AddOperation")}
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