import React from 'react';
import Box from '../UI/Box/Box';

const IngredientsList=({items})=>{
    let list = items.map(it=>{
        return <li key={it.id} className="ingredients__item"><span>{it.name}</span><span>{it.amount}</span></li>
    });
    if(items.length===0){
        list = <p>Empty!</p>
    }
    return(
        <Box center>
            <ul className='ingredients__list'>
                {list}
            </ul>
        </Box>
    )
}

export default IngredientsList;