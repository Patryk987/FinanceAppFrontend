import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import Api from "./../..//class/api.js"

// Icons
import { FiltrIcon, SortIcon } from "./assets/icons.js"

// Modules
import { ExpenseLabel } from "./../../modules/expense-label/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import Header from "../../modules/header/index.js";
import { CardTitle } from './../../modules/card-title/index.js';
import Loader from './../../modules/loader/index.js';

// Context
import { UserContext } from '../../context.js';

export function Stats({ navigation }) {

    const auth = useContext(UserContext);
    const operation = new Api("api/payments/All", auth.token);
    const savings = new Api("api/payments/AllSavings", auth.token);
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
                date={value[1].paymentsDate}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });

        setLoad(true);
    }

    const getSpends = async () => {
        setLoad(false);
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);

        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {
            if (value[1].amountWal < 0) {

                setOperationList(prev => [...prev, <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={value[1].name}
                    date={value[1].paymentsDate}
                    price={value[1].amountWal + " " + value[1].waluta} />])
            }
        });

        setLoad(true);
    }

    const getSavings = async () => {
        setLoad(false);
        var getSavings = await savings.get();

        setOperationList([]);
        Object.entries(getSavings).map((value, index) => {

            setOperationList(prev => [...prev, <ExpenseLabel
                subtitle={"Oszczędności"}
                title={value[1].name}
                date={value[1].paymentsDate}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });

        setLoad(true);
    }

    const getDonations = async () => {
        setLoad(false);
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);

        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {
            if (value[1].amountWal > 0) {

                setOperationList(prev => [...prev, <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={value[1].name}
                    date={value[1].paymentsDate}
                    price={value[1].amountWal + " " + value[1].waluta} />])
            }
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

            <Header label="Statystyki" />

            <Loader load={load} onRefresh={() => getOperation()}>

                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>

                    <SmallButton title="Wydatki" onPress={() => getSpends()} />
                    <SmallButton title="Przychody" onPress={() => getDonations()} />
                    <SmallButton title="Oszczędności" onPress={() => getSavings()} />

                </View>

                <CardTitle title="Oszczędności" />

                {/* <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <Button title="Filtruj" icon={<FiltrIcon />} />
                    <Button title="Sortuj" icon={<SortIcon />} />
                </View> */}



                <ScrollView style={{ paddingBottom: 20 }}>


                    {operationList}


                </ScrollView>

            </Loader>
        </View>
    )
}