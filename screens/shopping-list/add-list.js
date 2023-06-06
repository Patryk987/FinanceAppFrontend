import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import Api from '../../class/api.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'
import Header from "../../modules/header/index.js";

// Context
import { UserContext } from '../../context.js';

export function AddList({ navigation }) {

    const auth = useContext(UserContext);
    const ShoppingListApi = new Api("api/ShopingList/List", auth.token);

    const [name, setName] = useState("");

    const send = async () => {

        var data = {
            "ListName": name,
        };
        var results = await ShoppingListApi.post(data);

        if (results.status) {
            alert("utworzono nową listę");
            navigation.goBack();
        } else {

            alert("Wystąpił błąd podczas dodawania operacji");
        }


    }


    return (
        <View style={{ padding: 20 }}>

            <ScrollView>
                <Header label="Dodaj listę zakupów" />


                <CustomInput
                    label="nazwa"
                    type="input"
                    onChangeText={(text) => setName(text)}
                    value={name}

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