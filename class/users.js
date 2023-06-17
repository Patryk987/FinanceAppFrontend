import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

import Api from './api.js';
import { DataBase } from './SQLite.js';
import JWT from './decodeJWT.js';



class User {
    static login = false;
    static pinLength = 4;
    db = new DataBase("asd");

    construct() {


    }

    create_db() {

        const usersDB = "create table if not exists users (token TEXT, pinStatus BOOL, pin TEXT);";
        this.db.execute(usersDB);

    }

    async login(nick, password, endpoint = 'api/account/login') {

        let api = new Api(endpoint);

        var data = {
            "login": nick,
            "password": password
        };

        return api.post(data).then(async response => {
            console.log(response);
            if (response && response.status == 200) {
                var data = JWT.decode(response.tokenJWT);
                await this.save(response.tokenJWT);
                return { "status": true, "token": response.tokenJWT };
            }

            return { "status": false, "token": "" };
        })

    }

    async registration(email, name, surname, password, repeatPassword, endpoint = "endpointRegistrationUser") {

        let api = new Api(endpoint);

        var data = {
            "login": email,
            "name": name,
            "surname": surname,
            "password": password,
            "confirmPassword": repeatPassword
        };

        return await api.post(data).then(response => {
            console.log(response);
            if (response && response.status == 200) {
                return { "status": true, "errors": {} };
            } else {
                return { "status": false, "errors": response.errors };
            }

        })

    }

    async save(token) {
        this.create_db();

        const insert = "insert into users (token, pinStatus, pin) values (?, ?, ?)";
        const data = [token, false, ""];

        let insertResults = await this.db.execute(insert, data);

        return { "state": true, "insertId": insertResults.insertId };
    }

    async get() {
        this.create_db();

        const select = "SELECT * FROM users";

        return await this.db.execute(select).then((response) => {
            var tab = [];
            for (var i = 0; i < response.rows.length; i++) {
                tab.push(response.rows.item(i));
            }

            return tab;
        });
    }

    logout() {

        const clearDB = "DELETE FROM users";
        this.db.execute(clearDB);

        const truncateDB = "TRUNCATE users";
        this.db.execute(truncateDB);

        User.login = false;

    }

    async get_pin() {

        var userData = await this.get();

        return {
            "length": User.pinLength, "set": userData[0].pinStatus, "pin": userData[0].pin
        }

    }

    async set_pin(pin) {

        console.log(pin + "+");
        const updatePin = "UPDATE users SET pinStatus = ?, pin = ?";
        let results = await this.db.execute(updatePin, [true, pin]);

        console.log(results);
    }

    async user_is_login() {

        var users = await this.get();

        if (users.length > 0) {
            return { "status": true, "token": users[0].token };
        } else {
            return { "status": false, "token": "" };
        }

    }

    async checkUserPin(pin) {

        var userData = await this.get();
        var userPin = userData[0].pin;

        if (pin == userPin) {
            return true;
        } else {
            return false;
        }

    }

}


export default new User();