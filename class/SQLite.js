import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';
import * as SQLite from 'expo-sqlite';

// import * as Device from 'expo-device';


export class DataBase {

    constructor(name = "database") {
        this.db = SQLite.openDatabase(name + ".db");
    }

    execute(query, data = []) {
        // if (Device.brand != null) {

        try {

            return new Promise((resolve, reject) => {

                if (!this.db) {
                    reject(new Error('Database connection not found.'));
                    return;
                }

                this.db.transaction(tx => {
                    tx.executeSql(query, data, (tx, results) => {
                        console.warn(results);
                        resolve(results);
                    }, (tx, error) => {
                        console.warn(error);
                        reject(error);
                    });
                });

            });


        } catch (error) {
            return error;
        }


        // } else {
        //     console.warn("Incorrect device");
        //     return { "status": false }
        // }

    }

    close() {
        this.db.close((err) => {
            if (err) {
                console.error(err.message);
            } else {
                console.log('Closed the SQLite database connection.');
            }
        });
    }

}