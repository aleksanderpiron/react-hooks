import React, {useContext} from 'react';
import {AuthContext} from '../Auth/Auth';
import Button from '../UI/Button/Button';
import Loader from '../UI/Loader/Loader';

const IngredientsList=({items, removeIng, loading})=>{
    const auth = useContext(AuthContext);
    let list = items.map(it=>{
        return <li
        onClick={()=>removeIng(it.id)}
        key={it.id}
        className="ingredients__item">
            <span>{it.name}</span><span>x{it.amount}</span>
        </li>
    });
    if(items.length===0){
        list = <p>Empty!</p>
    }
    return(
        <>
            <ul className='ingredients__list'>
                {loading?<Loader/>:list}
            </ul>
            <div className="button-box button-box--center">
                <Button color='danger' click={()=>{auth.logout()}}>Logout</Button>
            </div>
        </>
    )
}

export default IngredientsList;