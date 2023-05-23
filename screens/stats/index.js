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
import { CircleDiagram, BarDiagram } from './../../modules/digrams/index.js';
// Context
import { UserContext } from '../../context.js';

export function Stats({ route, navigation }) {

    const auth = useContext(UserContext);
    const operation = new Api("api/payments/All", auth.token);
    const savings = new Api("api/payments/AllSavings", auth.token);
    const balance = new Api("api/payments/Balance", auth.token);

    // states
    const [operationList, setOperationList] = useState([]);
    const [balanceValue, setBalanceValue] = useState([]);
    const [load, setLoad] = useState(false);
    const [type, setType] = useState("Wszystkie");
    const [options, setOptions] = useState([]);

    const getDiagram = async (options) => {
        const year = new Date().getFullYear();
        var tab = {
            "01": 0,
            "02": 0,
            "03": 0,
            "04": 0,
            "05": 0,
            "06": 0,
            "07": 0,
            "08": 0,
            "09": 0,
            "10": 0,
            "11": 0,
            "12": 0
        };
        Object.entries(options).map((value, index) => {
            let operationData = value[1].paymentsDate.split("T")[0].split("-");
            let operationYear = operationData[0];
            let operationMonth = operationData[1];
            let operationDay = operationData[2];

            if (operationYear == year) {
                tab[operationMonth] += value[1].amountWal;
            }
        });

        setOptions([
            { "value": tab["01"], "color": "#082032", "label": "01" },
            { "value": tab["02"], "color": "#082032", "label": "02" },
            { "value": tab["03"], "color": "#082032", "label": "03" },
            { "value": tab["04"], "color": "#082032", "label": "04" },
            { "value": tab["05"], "color": "#082032", "label": "05" },
            { "value": tab["06"], "color": "#082032", "label": "06" },
            { "value": tab["07"], "color": "#082032", "label": "07" },
            { "value": tab["08"], "color": "#082032", "label": "08" },
            { "value": tab["09"], "color": "#082032", "label": "09" },
            { "value": tab["10"], "color": "#082032", "label": "10" },
            { "value": tab["11"], "color": "#082032", "label": "11" },
            { "value": tab["12"], "color": "#082032", "label": "12" }
        ]);
    }

    const getOperation = async () => {
        setLoad(false);
        setType("Wszystkie");
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);
        getDiagram(getOperation);
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

    const getSpends = async () => {
        setLoad(false);
        setType("Wydatki")
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);
        getDiagram(getOperation);
        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {
            if (value[1].amountWal < 0) {

                setOperationList(prev => [...prev, <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={value[1].name}
                    date={value[1].paymentsDate.split("T")[0]}
                    price={value[1].amountWal + " " + value[1].waluta} />])
            }
        });

        setLoad(true);
    }

    const getSavings = async () => {
        setLoad(false);
        setType("Oszczędności")
        var getSavings = await savings.get();

        setOperationList([]);
        getDiagram(getSavings);
        Object.entries(getSavings).map((value, index) => {

            setOperationList(prev => [...prev, <ExpenseLabel
                subtitle={"Oszczędności"}
                title={value[1].name}
                date={value[1].paymentsDate.split("T")[0]}
                price={value[1].amountWal + " " + value[1].waluta} />])
        });

        setLoad(true);
    }

    const getDonations = async () => {
        setType("Przychody")
        setLoad(false);
        var getOperation = await operation.get();
        var getBalance = await balance.get();
        console.log(getBalance[0].amountPLN);
        setBalanceValue(getBalance[0].amountPLN);
        getDiagram(getOperation);
        setOperationList([]);
        Object.entries(getOperation).map((value, index) => {
            if (value[1].amountWal > 0) {

                setOperationList(prev => [...prev, <ExpenseLabel
                    subtitle={"Wydatki podstawowe"}
                    title={value[1].name}
                    date={value[1].paymentsDate.split("T")[0]}
                    price={value[1].amountWal + " " + value[1].waluta} />])
            }
        });

        setLoad(true);
    }

    useEffect(() => {
        getOperation();
    }, []);

    useEffect(() => {
        if (route.params) {
            if (route.params.types) {
                switch (route.params.types) {
                    case "spends":
                        getSpends();
                        break;
                    case "savings":
                        getSavings();
                        break;
                    case "donations":
                        getDonations();
                        break;
                    default:
                        getOperation();
                        break;
                }
            }
        }
    }, [route])


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

                <CardTitle title={type} />

                {/* <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', marginTop: 10, marginBottom: 10 }}>
                    <Button title="Filtruj" icon={<FiltrIcon />} />
                    <Button title="Sortuj" icon={<SortIcon />} />
                </View> */}


                <ScrollView style={{ paddingBottom: 20 }}>
                    <View style={{ height: 200 }}>
                        <BarDiagram options={options} />
                    </View>


                    {operationList}


                </ScrollView>

            </Loader>
        </View>
    )
}