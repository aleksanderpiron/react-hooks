import React, {useState} from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

const LoginFrom =({login})=>{
    const [{value:loginValue, error:loginError}, setLoginState] = useState({
        value:'',
        error:false
    }),
    submitHandler=(e)=>{
        e.preventDefault();
        login(loginValue, wrongPasswordHanlder);
    },
    wrongPasswordHanlder=()=>{
        setLoginState(prevState=>{
            return {
                value:prevState.value,
                error:true
            }
        });
    }
    return(
        <form onSubmit={submitHandler} className="login-form">
            <Input classes={loginError?'error':''} value={loginValue} type='password' label='Password' change={(e)=>{
                const {value} = e.target;
                setLoginState({value, error:false})
            }}/>
            <p className={loginError?'error-message error-message--visible':'error-message'}>Wrong password!</p>
            <div className="button-box button-box--center">
                <Button type='submit' color='primary'>
                    Login
                </Button>
            </div>
        </form>
    )
}

export default LoginFrom;