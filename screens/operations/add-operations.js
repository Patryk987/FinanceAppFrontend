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

export function AddOperation({ navigation }) {

    const auth = useContext(UserContext);
    const insertOperation = new Api("api/payments/insert", auth.token);

    const [name, setName] = useState("");
    const [typeOfPayments, setTypeOfPayments] = useState("");
    const [amountWal, setAmountWal] = useState("");
    const [waluta, setWaluta] = useState("");

    const [loader, setLoader] = useState(false);

    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil',
        'England',
        'Dubai',
        'France',
        'Germany',
        'Saudi Arabia',
        'Argentina',
        'India',
    ];

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

        var data = {
            "Name": name,
            "TypeOfPayments": type,
            // "TypeOfPayments": typeOfPayments,
            "AmountWal": amountWal,
            "AmountPLN": amountWal,
            "Waluta": waluta
        };
        var results = await insertOperation.post(data);

        console.log(results);

        if (results == 1) {
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

                {/* <CustomInput
                    label="Grupa wydatków"
                    type="input"

                    onChangeText={(text) => setTypeOfPayments(text)}
                    value={typeOfPayments}
                    keyboardType={"number"}
                /> */}

                <CustomInput
                    label="Konto"
                    type="select"
                    onChangeText={(text) => setTypeOfPayments(text)}
                    value={typeOfPayments}
                    keyboardType={"text"}
                    data={["Konto główne", "Konto oszczędnościowe"]}
                />
                <CustomInput
                    label="Waluta"
                    type="select"
                    onChangeText={(text) => setWaluta(text)}
                    value={waluta}
                    keyboardType={"text"}
                    data={["PLN", "EUR", "USD"]}
                />

                <TouchableOpacity onPress={() => send()}>

                    <CustomInput
                        label={'Zapisz'}
                        type="button"
                    />

                </TouchableOpacity>

            </ScrollView>

        </View >
    )
}