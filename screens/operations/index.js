import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style

// Class
import Api from "./../..//class/api.js"

// Icons
import { FiltrIcon, SortIcon } from "./assets/icons.js"

// Modules
import { ExpenseLabel } from "./../../modules/expense-label/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import Header from "../../modules/header/index.js";
import { CardTitle } from './../../modules/card-title/index.js';
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';

// Context
import { UserContext } from '../../context.js';

export function Operations({ navigation }) {

    const auth = useContext(UserContext);
    const operation = new Api("api/payments/All", auth.token);

    // states
    const [operationList, setOperationList] = useState([]);

    const getOperation = async () => {

        var getOperation = await operation.get();

        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {

            setOperationList(prev => [...prev, <ExpenseLabel
                subtitle={"Wydatki podstawowe"}
                title={value[1].name}
                date={value[1].paymentsDate}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });

    }

    useEffect(() => {
        getOperation();
    }, []);

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
                    <Button title="Nowy przychód" icon={<Text>+</Text>} onPress={() => navigation.navigate("AddOperation")} />
                    <Button title="Nowy wydatek" icon={<Text>-</Text>} />
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
        </View>
    )
}