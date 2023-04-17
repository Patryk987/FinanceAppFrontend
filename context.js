import React, { useState } from 'react';

export const UserContext = React.createContext({
    token: '',
    authenticate: (token) => { },
    pinAuthenticate: () => { },
    logout: () => { },
    loggedIn: false,
    correctPin: false
});

export function UserContextProvider({ children }) {

    const [token, setToken] = useState();
    const [correctPin, setCorrectPin] = useState();

    function authenticate(token) {
        setToken(token);
    }

    function pin(pinIsCorrect) {
        setCorrectPin(pinIsCorrect);
    }

    function logout() {
        setToken(null);
    }

    var value = {
        token: token,
        authenticate: authenticate,
        pinAuthenticate: pin,
        logout: logout,
        loggedIn: !!token,
        correctPin: correctPin
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}