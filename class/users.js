import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, TouchableOpacity } from 'react-native';

import Api from './api.js';
import db from './SQLite.js';
import JWT from './decodeJWT.js';



class User {
    static login = false;

    construct() {

    }

    create_db() {

        const usersDB = "create table if not exists user (id INTEGER not null, token TEXT, type INTEGER);";
        db.execute(usersDB);

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

                // this.save(data.payload.token);
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

    save(token) {
        this.create_db();

        const insert = "insert into user (id, token) values (?, ?, ?)";
        const data = [id, token, type];

        db.execute(insert, data);
    }

    get() {
        this.create_db();

        const select = "SELECT * FROM user";

        db.execute(select).then((response) => {
            for (var i = 0; i < response.rows.length; i++) {
                console.log(response.rows.item(i));
            }
        });

    }

    logout() {

        const clearDB = "DELETE FROM user";
        db.execute(clearDB);

        User.login = false;

    }

}


export default new User();