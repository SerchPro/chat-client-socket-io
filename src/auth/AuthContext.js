import React, { Children, createContext, useCallback, useState } from "react";
import { fetchNotoken } from "../helpers/fetch";




export const AuthContext = createContext();


const initialState ={
    uid: null,
    checking: true,
    logged: false,
    name: null,
    email: null
}




export const AuthProvider = ({children}) => {

    const [ auth, setAuth ] = useState(initialState);

    const login = async( email, password ) => {
        const resp = await fetchNotoken('login', {email, password}, 'POST');
        console.log(resp)
        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const {email, name, online, uid } = resp.userdb

            setAuth({
                uid,
                checking: false,
                logged: true,
                name,
                email,
            })
        }

        return resp
    }

    const register = (nombre, email, password) =>{

    }

    const verificaToken = useCallback(
      () => {
        
      },[] )

    const logout = () =>{

    }
    


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verificaToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
