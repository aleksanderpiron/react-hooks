import React, { useState } from 'react';

export const AuthContext = React.createContext({
    isAuth:false,
    login: ()=>{
    }
})

const AuthContextProvider=({children})=>{
    return <AuthContext.Provider>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider;