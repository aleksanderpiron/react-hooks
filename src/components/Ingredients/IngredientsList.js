import React from 'react';
import Loader from '../UI/Loader/Loader';

const IngredientsList=({items, loading})=>{
    let list = items.map(it=>{
        return <li key={it.id} className="ingredients__item"><span>{it.name}</span><span>x{it.amount}</span></li>
    });
    if(items.length===0){
        list = <p>Empty!</p>
    }
    return(
        <ul className='ingredients__list'>
            {loading?<Loader/>:list}       
        </ul>
    )
}

export default IngredientsList;