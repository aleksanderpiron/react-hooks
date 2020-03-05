import {useReducer} from 'react';

const initialState = {
    loading:false,
    error:null,
    data:null,
}

const httpReducer = (currentState, action) => {
    switch (action.type){
        case 'SEND':
            return {loading:true, error:null, data:null};
        case 'SUCCESS':
            console.log(action.data);
            return {loading:false, error:null, data:action.data};
        case 'ERROR':
            return {loading:false, error:action.error, data:null};
        default:
            return 0;
    }
}

const useHttp=()=>{
    const [httpState, dispatch] = useReducer(httpReducer, initialState),
    http=async(url, method, body)=>{
        try{
            dispatch({type:'SEND'})
            const resp = await fetch(url, {
                method,
                body
            }),
            data = await resp.json();
            return data;
        }catch(err){
            dispatch({type:'ERROR', error:'true'});
        }
    }
    return {
        loading:httpState.loading,
        error:httpState.error,
        data:httpState.data,
        http
    }
}

export default useHttp;