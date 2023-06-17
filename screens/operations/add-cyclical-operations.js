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
import { Popup } from '../../modules/popup/index.js'
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
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [loader, setLoader] = useState(false);
    const [isPopupVisibleError, setIsPopupVisibleError] = useState(false);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const send = async () => {

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
            setIsPopupVisible(true);
        } else {
            setIsPopupVisibleError(true);
        }


    }

    const closePopup = () => setIsPopupVisible(false); const closePopupError = () => setIsPopupVisibleError(false);
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
            <Popup
                title="Nowa operacja"
                message="Poprawnie dodano"
                buttonText="Ok"
                visible={isPopupVisible}
                onClose={closePopup}
            />

            <Popup
                title="Nowa operacja"
                message="Wystąpił błąd podczas dodawania operacji"
                buttonText="Spróbuj ponownie"
                visible={isPopupVisibleError}
                onClose={closePopupError}
            />

        </View >
    )
}