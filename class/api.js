import config from "./config.json";
// import * as Network from 'expo-network';

class Api {

    constructor(endpoint, user_key = "") {
        this.endpoint = endpoint;
        this.user_key = user_key;
        this.api_key = config.api_key;
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
                'api_key': this.api_key,
                'user_key': this.user_key
            }
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
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
                'api_key': this.api_key,
                'user_key': this.user_key
            },
            body: JSON.stringify(data)
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
            .catch((error, response) => {
                console.warn(error)
            });

    }

    put(data) {

        var host = config.host + "/" + this.endpoint;

        const requestOptions = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'api_key': this.api_key,
                'user_key': this.user_key
            },
            body: JSON.stringify(data)
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
            .catch(error => console.warn(error));

    }

    delete(data) {

        var prepare_query = this.convert_data_to_string(data);

        var host = config.host + "/" + this.endpoint + prepare_query;

        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'api_key': this.api_key,
                'user_key': this.user_key
            }
        };

        return fetch(host, requestOptions)
            .then((response) => response.json())
            .then((responseData) => {
                return responseData;
            })
            .catch(error => console.warn(error));

    }

}

export default Api;