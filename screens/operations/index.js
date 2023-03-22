import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity, ScrollView, Image } from 'react-native';

// Style


export function Operations({ navigation }) {

    return (
        <View style={{
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <ScrollView>

                <Text>
                    Operations
                </Text>

            </ScrollView>
        </View>
    )
}