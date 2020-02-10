import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import Box from '../UI/Box/Box';
import Input from '../UI/Input/Input';

const IngredientsForm=({getList, dbUrl})=>{
    const [nameValue, setName] = useState(''),
    [amountValue, setAmount] = useState(''),
    submitHandler=async(e)=>{
        e.preventDefault();
        const ing = {
            name:nameValue,
            amount:amountValue
        };
        try{
            const resp = await fetch(dbUrl, {
                method:'POST',
                body:JSON.stringify(ing),
                headers:{
                    'Content-Type':'application/json'
                }
            }),
            data = await resp.json();
            if(resp.status!==200){
                throw new Error('Something went wrong with posting item to database');
            }else{
                ing.id = data.name;
                getList();
                setName('');
                setAmount('');
            }
        }catch(err){
            console.log(err);
        };
    }
    return(
        <Box center>
            <form onSubmit={submitHandler} className="ingredients__form">
                <Input
                label="Name"
                value={nameValue}
                change={(e)=>setName(e.target.value)}/>
                <Input
                label="Amount"
                type="number"
                value={amountValue}
                change={(e)=>setAmount(e.target.value)}/>
                <div className='form__submit'>
                    <Button type='submit' color='secondary'>Add</Button>
                </div>
            </form>
        </Box>
    )
}

export default IngredientsForm;