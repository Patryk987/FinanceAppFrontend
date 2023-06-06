import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Class
import User from "../../class/users.js"
import Api from "./../../class/api.js"
// Style

// Modules
import ListElement from "../../modules/list-element/index.js";
import Header from "../../modules/header/index.js";
import { SmallButton, Button } from "./../../modules/buttons/index.js";
import { CardTitle } from './../../modules/card-title/index.js';
import Loader from './../../modules/loader/index.js';

// Context
import { UserContext } from "../../context.js";

export function ShoppingList({ navigation }) {

    const auth = useContext(UserContext);
    const ShoppingListApi = new Api("api/ShopingList/List", auth.token);
    const [load, setLoad] = useState(true);
    const [shoppingList, setShoppingList] = useState([]);

    useEffect(() => { loadShoppingList(); }, []);

    const loadShoppingList = async () => {
        var list = await ShoppingListApi.get();
        setShoppingList(list);
    }

    const GenerateList = () => {

        return <>
            {
                shoppingList.map((r) => {
                    return <ListElement label={r.ListName} onPress={() => { navigation.navigate("DetailsShoppingList", { ListId: r.Id }) }} />
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

                <Button
                    title="Nowa lista"
                    icon={<Text>+</Text>}
                    onPress={() => navigation.navigate("AddList")}
                    style={{ width: '90%' }}
                />

                <CardTitle title="Listy zakupów" />

                <GenerateList />

            </Loader>
        </View>
    )
}