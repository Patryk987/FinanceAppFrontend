import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import User from "../../class/users.js"
import Api from "./../../class/api.js"
// Style

// Modules
import CheckListElement from "../../modules/list-element/check-list.js";
import Header from "../../modules/header/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import { CardTitle } from './../../modules/card-title/index.js';
import Loader from './../../modules/loader/index.js';
// Context
import { UserContext } from "../../context.js";

export function DetailsShoppingList({ navigation, route }) {

    const auth = useContext(UserContext);
    const ShoppingListProductApi = new Api("api/ShopingList/List/Product", auth.token);
    const ShoppingListDeleteApi = new Api("api/ShopingList/List/delete", auth.token);
    const [load, setLoad] = useState(true);
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        loadShoppingList();

        if (!route.params.ListId) {
            navigation.goBack();
        }
    }, []);

    const loadShoppingList = async () => {
        var list = await ShoppingListProductApi.get({ "ListId": route.params.ListId });
        setShoppingList(list);
    }

    const check = async (id, status) => {
        console.log(status);
        var data = {
            "ListId": route.params.ListId,
            "Status": status,
            "Id": id
        };

        var results = await ShoppingListProductApi.put(data);
        loadShoppingList();

    }

    const delateList = async () => {

        var data = {
            "Id": route.params.ListId,
        };

        var results = await ShoppingListDeleteApi.post(data);
        if (results.status) {
            alert("Usunięto listę");
            navigation.goBack();
        } else {

            alert("Wystąpił błąd podczas usuwania listy");
        }

    }

    const GenerateList = () => {

        return <>
            {
                shoppingList.map((r) => {
                    return <CheckListElement label={r.ProductName} status={r.Status} onPress={() => check(r.Id, !r.Status)} />
                })
            }
        </>

    }

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <Header label="Lista zakupów" />

            <Loader load={load} onRefresh={() => loadShoppingList()}>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', marginTop: 10, marginBottom: 10 }}>

                    <Button
                        title="Nowa produkt"
                        icon={<Text>+</Text>}
                        onPress={() => navigation.navigate("AddProduct", { ListId: route.params.ListId })}
                    />

                    <Button
                        title="usuń listę"
                        icon={<Text>-</Text>}
                        onPress={() => delateList()}
                    />

                </View>

                <CardTitle title="Listy zakupów" />

                <GenerateList />

            </Loader>
        </View>
    )
}