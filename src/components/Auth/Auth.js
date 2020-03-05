import React, { useState } from 'react';
import {useCookies} from 'react-cookie';

export const AuthContext = React.createContext({
    isAuth:false,
})

const AuthContextProvider=({children})=>{
    const [cookies, setCookie, removeCookie] = useCookies(['isAuth']),
    checkIfLogged=()=>{
        if(cookies.isAuth === 'true'){
            return true;
        }else{
            return false;
        }
    },
    [logged, setLogged] = useState(checkIfLogged()),
    loginHandler=()=>{
        setLogged(true);
        if(typeof cookies.isAuth === 'undefined'){
            setCookie('isAuth',true);
        }
    },
    logoutHandler=()=>{
        setLogged(false);
        if(typeof cookies.isAuth !== 'undefined'){
            removeCookie('isAuth');
        }
    }

    return <AuthContext.Provider value={{
        isAuth:logged,
        login:()=>loginHandler(),
        logout:()=>logoutHandler()}}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;