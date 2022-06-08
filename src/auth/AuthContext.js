import React, {createContext, useCallback, useContext, useState } from "react";
import { ChatContext } from "../context/chat/ChatContext";
import { fetchNotoken, fetchtoken } from "../helpers/fetch";
import { types } from "../types/types";

export const AuthContext = createContext();

const initialState ={
    uid: null,
    checking: false,
    logged: false,
    name: null,
    email: null
}

export const AuthProvider = ({children}) => {

    const [ auth, setAuth ] = useState(initialState);
    const { dispatch } = useContext( ChatContext )

    const login = async( email, password ) => {
        const resp = await fetchNotoken('login', {email, password}, 'POST');
        console.log(resp)
        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const {email, name, uid } = resp.userdb

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

    const register = async(name, email, password) =>{
        const resp = await fetchNotoken('login/new', {email, password, name}, 'POST');
        console.log(resp)
        if(resp.ok){
            localStorage.setItem('token', resp.token);
            const {email, name, uid } = resp.userdb

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

    const verifyToken = useCallback( async() => {

        const token = localStorage.getItem('token');

        if(!token){
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null
            });
            return false;
        }

        const resp = await fetchtoken('login/renew');
        if (resp.ok){
            localStorage.setItem('token', resp.token);
            const {email, name, uid } = resp.user

            setAuth({
                uid,
                checking: false,
                logged: true,
                name,
                email,
            });
            return true;
        }else{
            setAuth({
                uid: null,
                checking: false,
                logged: false,
                name: null,
                email: null,
            });
            return false;
        }
        
      },[] )

    const logout = () =>{
        localStorage.removeItem('token');

        dispatch({ type: types.closeSession})
        setAuth({
            checking: false,
            logged: false,
        })

    }
    


    return (
        <AuthContext.Provider value={{
            auth,
            login,
            register,
            verifyToken,
            logout,
        }}>
            { children }
        </AuthContext.Provider>
    )
}
