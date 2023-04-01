import config from "./config.json";
// import * as Network from 'expo-network';

export class Api {

    endpoint

    constructor(endpoint) {
        this.endpoint = endpoint;
    }


    get_user_key() {

        var user_key = "";

        return user_key;
    }

    convert_data_to_string(data) {

        var prepare_query = '';

        Object.keys(data).forEach((key) => {
            if (prepare_query.length == 0) {
                prepare_query += "?";
            } else {
                prepare_query += "&";
            }
            prepare_query += key + "=" + data[key];

        });

        return prepare_query;
    }

    get(data) {

        var prepare_query = this.convert_data_to_string(data);

        var host = config.host + "/" + this.endpoint + prepare_query;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'api_key': config.api_key,
                'user_key': this.get_user_key()
            }
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            })
            .catch(error => console.warn(error));

    }

    post(data) {

        var host = config.host + "/" + this.endpoint;

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api_key': config.api_key,
                'user_key': this.get_user_key()
            },
            body: JSON.stringify(data)
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            })
            .catch(error => console.warn(error));


    }

    put(data) {

        var host = config.host + "/" + this.endpoint;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'api_key': config.api_key,
                'user_key': this.get_user_key()
            },
            body: JSON.stringify(data)
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            })
            .catch(error => console.warn(error));


    }

    delete(endpoint, data) {

        var prepare_query = this.convert_data_to_string(data);

        var host = config.host + "/" + endpoint + prepare_query;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'api_key': config.api_key,
                'user_key': this.user_key
            }
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                console.log(responseData);
                return responseData;
            })
            .catch(error => console.warn(error));

    }

}