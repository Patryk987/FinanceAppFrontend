import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import Api from '../../class/api.js';

// Modules
import { CustomInput } from '../../modules/custom-inputs/index.js'
import Header from "../../modules/header/index.js";

// Context
import { UserContext } from '../../context.js';

export function AddProduct({ navigation, route }) {

    const auth = useContext(UserContext);
    const ShoppingListApi = new Api("api/ShopingList/List/Product", auth.token);

    const [name, setName] = useState("");

    useEffect(() => {
        if (!route.params.ListId) {
            navigation.goBack();
        }
    }, [])

    const send = async () => {

        var data = {
            "ProductName": name,
            "ListId": route.params.ListId
        };
        var results = await ShoppingListApi.post(data);

        if (results.status) {
            navigation.goBack();
        } else {
            alert("Wystąpił błąd podczas dodawania operacji");
        }


    }


    return (
        <View style={{ padding: 20 }}>

            <ScrollView>
                <Header label="Dodaj nowy produkt" />


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