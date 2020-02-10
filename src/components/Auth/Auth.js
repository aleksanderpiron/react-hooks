import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuth:false,
    login: ()=>{}
})

const AuthContextProvider=({children})=>{
    const [logged, setLogged] = useState(false),
    loginHandler=()=>{
        setLogged(prevLogged=>{
            return !prevLogged;
        })
    }
    console.log(logged);

    return <AuthContext.Provider value={{isAuth:logged, login:()=>{loginHandler()}}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;