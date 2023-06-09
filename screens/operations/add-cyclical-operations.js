import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import Api from '../../class/api.js';
import User from '../../class/users.js'

// Style
import { main, header, content, footer } from './assets/style.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'
import Header from "../../modules/header/index.js";

// Context
import { UserContext } from '../../context.js';

export function AddCyclicalOperation({ navigation }) {

    const auth = useContext(UserContext);
    const insertOperation = new Api("api/cyclicalExpenses/add", auth.token);

    const [name, setName] = useState("");
    const [typeOfPayments, setTypeOfPayments] = useState("");
    const [amountWal, setAmountWal] = useState("");
    const [waluta, setWaluta] = useState("");
    const [group, setGroup] = useState("");

    const [loader, setLoader] = useState(false);


    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const send = async () => {

        var type = 1;

        switch (typeOfPayments) {
            case "Konto główne":
                var type = 1;
                break;
            case "Konto oszczędnościowe":
                var type = 2;
                break;

            default:
                var type = 1;
                break;
        }

        // var data = {
        //     "Name": name,
        //     "TypeOfPayments": type,
        //     "Groups": group,
        //     "AmountWal": amountWal,
        //     "AmountPLN": amountWal,
        //     "Waluta": waluta
        // };

        var data = {
            "Name": name,
            "StartData": "2023.06.08",
            "Periods": "30",
            "Amount": amountWal,
            "Currency": waluta,
            "Groups": group
        }
        var results = await insertOperation.post(data);

        console.log(results);

        if (results.status) {
            alert("Poprawnie dodano");
        } else {

            alert("Wystąpił błąd podczas dodawania operacji");
        }


    }


    return (
        <View style={{ padding: 20 }}>

            <ScrollView>
                <Header label="Dodaj nową operację" />


                <CustomInput
                    label="nazwa"
                    type="input"
                    onChangeText={(text) => setName(text)}
                    value={name}

                />
                <CustomInput
                    label="Wartość"
                    type="input"
                    onChangeText={(text) => setAmountWal(text)}
                    value={amountWal}
                    keyboardType={"number"}
                />

                <CustomInput
                    label="Waluta"
                    type="select"
                    onChangeText={(text) => setWaluta(text)}
                    value={waluta}
                    keyboardType={"text"}
                    data={["PLN", "EUR", "USD"]}
                />
                <CustomInput
                    label="Grupa transakcji"
                    type="select"
                    onChangeText={(text) => setGroup(text)}
                    value={group}
                    keyboardType={"text"}
                    data={["Żywność", "Rachunki", "Transport", "Zakupy", "Zdrowie i uroda", "Rozrywka", "Edukacja", "Opieka nad domem", "Dzieci", "Inwestycje"]}
                />

                <TouchableOpacity onPress={() => send()}>

                    <CustomInput
                        label={'Zapisz'}
                        type="button"
                    />

                </TouchableOpacity>

            </ScrollView >

        </View >
    )
}