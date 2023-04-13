import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

import Api from './api.js';
import { DataBase } from './SQLite.js';
import JWT from './decodeJWT.js';



class User {
    static login = false;
    db = new DataBase("FinanceApp99");

    construct() {


    }

    create_db() {

        const usersDB = "create table if not exists users (token TEXT);";
        this.db.execute(usersDB);

    }

    async login(nick, password, endpoint = 'api/account/login') {

        let api = new Api(endpoint);

        var data = {
            "login": nick,
            "password": password
        };

        console.log(data);

        return api.post(data).then(async response => {

            if (response.status == 200) {
                var data = JWT.decode(response.TokenJWT);
                // console.log(data);
                await this.save(response.TokenJWT);
                console.log(await this.get());
                return { "status": true, "token": response.TokenJWT };
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
            if (response.status == 200) {
                return { "status": true, "errors": {} };
            } else {
                return { "status": false, "errors": response.errors };
            }

        })

    }

    async save(token) {
        this.create_db();

        const insert = "insert into users (token) values (?)";
        const data = [token];

        let insertResults = await this.db.execute(insert, data);
        console.log(insertResults);
        return { "state": true, "insertId": insertResults.insertId };
    }

    async get() {
        this.create_db();

        const select = "SELECT * FROM users";

        return await this.db.execute(select).then((response) => {
            var tab = [];
            for (var i = 0; i < response.rows.length; i++) {
                console.log(response.rows.item(i));
                tab.push(response.rows.item(i));
            }

            return tab;
        });
    }

    logout() {

        const clearDB = "DELETE FROM user";
        this.db.execute(clearDB);

        User.login = false;

    }


    async user_is_login() {

        var users = await this.get();
        if (users.length > 0) {
            return { "status": true, "token": users[0].token };
        } else {
            return { "status": false, "token": "" };
        }

    }

}


export default new User();