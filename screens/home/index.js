import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style
import { main, balance, scan } from './assets/style.js';

// Icon 
import { ProductBarIcon, RightIcon } from './assets/icon.js';

// Modules
import { CardTitle } from './modules/card-title.js';


export function Home({ navigation }) {

    return (
        <View style={main.content}>
            <ScrollView>

                <View style={main.header}>
                    <Text style={main.h1}>Witaj!</Text>
                </View>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Twoje saldo" />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={scan.content}>

                    <View style={scan.box}>

                        <View style={scan.icon}>
                            <ProductBarIcon />
                        </View>
                        <View style={scan.textBox}>
                            <Text style={scan.text}>Skanuj produkt</Text>
                        </View>
                        <View style={scan.next}>
                            <RightIcon fill="#fff" />
                        </View>

                    </View>

                </TouchableOpacity>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Twoje wydatki" />
                    </TouchableOpacity>
                </View>

                <View style={balance.content}>
                    <TouchableOpacity>
                        <CardTitle title="Zaplanowane wydatki" />
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </View>
    )
}
