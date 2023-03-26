import React, { useState } from 'react';

export const UserContext = React.createContext({
    token: '',
    authenticate: (token) => { },
    logout: () => { },
    loggedIn: false
});

export function UserContextProvider({ children }) {

    const [token, setToken] = useState();

    function authenticate(token) {
        setToken(token);
    }

    function logout() {
        setToken(null);
    }

    var value = {
        token: token,
        authenticate: authenticate,
        logout: logout,
        loggedIn: !!token
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}