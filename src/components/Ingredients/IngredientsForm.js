import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import Box from '../UI/Box/Box';

const IngredientsForm=({addIng, getList, dbUrl})=>{
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
                <label>
                    <p>Name</p>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={nameValue}
                        onChange={(e)=>setName(e.target.value)}/>
                </label>
                <label>
                    <p>Amount</p>
                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        value={amountValue}
                        onChange={(e)=>setAmount(e.target.value)}/>
                </label>
                <label className='form__submit'>
                    <Button type='submit' color='secondary'>Add</Button>
                </label>
            </form>
        </Box>
    )
}

export default IngredientsForm;