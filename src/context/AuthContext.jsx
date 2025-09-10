import {createContext, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{

    const [isAuthenticated, setIsAuthenticated] = useState(JSON.parse(localStorage.getItem('isAuthenticated')) || false);

    const userLogout = ()=>{
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        localStorage.removeItem('isAuthenticated');
    }

    const userLogin = (user)=>{
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('isAuthenticated', JSON.stringify(true));
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, userLogout, userLogin}}>
            {children}
        </AuthContext.Provider>
    )

}